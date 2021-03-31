from django.core.paginator import Paginator
from rest_framework import status
from rest_framework.views import APIView

from base.helpers.decorators import write_permissions
from base.helpers.pagination import pagination_objects_limit
from base.helpers.response import custom_response
from products.image.serializers import ImageSerializer
from products.models import Product, PriceInfo, Spec, Image
from products.price_info.serializers import PriceInfoSerializer
from products.product.serializers import ProductSerializer
from products.spec.serializers import SpecSerializer


class GetOrCreate(APIView):
    def get(self, request):
        products = Product.objects.all().order_by('created').reverse()

        # Pagination
        paginator = Paginator(products, pagination_objects_limit)
        page_number = request.GET.get('page')
        data = paginator.get_page(page_number)

        pagination = {
            'next_page': data.has_next(),
            'previous_page': data.has_previous(),
            'total_pages': paginator.num_pages,
            'current_page': data.number,
            'total_objects': paginator.count,
            'limit': paginator.per_page
        }

        return custom_response(
            message='Products fetched successfully',
            data=ProductSerializer(data, many=True).data,
            pagination=pagination,
            status=status.HTTP_200_OK
        )

    @write_permissions
    def post(self, request, *args, **kwargs):
        try:
            product = Product.objects.create(**request.data)

            return custom_response(
                message='Product created successfully',
                data=ProductSerializer(product).data,
                status=status.HTTP_201_CREATED
            )

        except Exception as e:
            return custom_response(
                message=str(e),
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class GetEditOrRemove(APIView):
    def get(self, request, **kwargs):
        try:
            product = Product.objects.get(pk=kwargs['pk'])
            price_info = PriceInfo.objects.get(product=product)
            specs = Spec.objects.filter(product=product)
            images = Image.objects.filter(product=product)

            data = ProductSerializer(product).data
            # Additional components
            data['price_info'] = PriceInfoSerializer(price_info).data
            data['specs'] = SpecSerializer(specs, many=True).data
            data['images'] = ImageSerializer(images, many=True).data

            return custom_response(
                message='Product fetched successfully',
                data=data,
                status=status.HTTP_200_OK
            )

        except Exception as e:
            return custom_response(
                message=str(e),
                status=status.HTTP_400_BAD_REQUEST
            )

    @write_permissions
    def put(self, request, **kwargs):
        try:
            product = Product.objects.edit(pk=kwargs['pk'], **request.data)

            return custom_response(
                message='Product edited successfully',
                status=status.HTTP_200_OK,
                data=ProductSerializer(product).data
            )

        except Exception as e:
            return custom_response(
                message=str(e),
                status=status.HTTP_400_BAD_REQUEST
            )

    @write_permissions
    def delete(self, request, **kwargs):
        try:
            product = Product.objects.get(pk=kwargs['pk'])
            product.delete()

            return custom_response(
                message='Product deleted successfully',
                data=ProductSerializer(product).data,
                status=status.HTTP_204_NO_CONTENT
            )

        except Exception as e:
            return custom_response(
                message=str(e),
                status=status.HTTP_400_BAD_REQUEST
            )


class Activate(APIView):
    @write_permissions
    def post(self, request, **kwargs):
        try:
            product = Product.objects.get(pk=kwargs['pk'])
            product.activate()

            return custom_response(
                message=f'Product was activated',
                status=status.HTTP_200_OK,
                data=ProductSerializer(product).data
            )

        except Exception as e:
            return custom_response(
                message=str(e),
                status=status.HTTP_400_BAD_REQUEST
            )


class Deactivate(APIView):
    @write_permissions
    def post(self, request, **kwargs):
        try:
            product = Product.objects.get(pk=kwargs['pk'])
            product.deactivate()

            return custom_response(
                message=f'Product was deactivated',
                status=status.HTTP_200_OK,
                data=ProductSerializer(product).data
            )

        except Exception as e:
            return custom_response(
                message=str(e),
                status=status.HTTP_400_BAD_REQUEST
            )

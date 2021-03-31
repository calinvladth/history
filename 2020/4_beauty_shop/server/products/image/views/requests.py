from rest_framework import status
from rest_framework.views import APIView

from base.helpers.decorators import write_permissions
from base.helpers.response import custom_response
from products.models import Product, Image
from ..serializers import ImageSerializer


class Create(APIView):
    @write_permissions
    def post(self, request, **kwargs):
        try:
            product = Product.objects.get(pk=kwargs['pk'])
            image_path = request.data.get('path')
            data = {
                'path': image_path,
                'product': product
            }
            image = Image.objects.create(**data)

            return custom_response(
                message='Image created successfully',
                status=status.HTTP_201_CREATED,
                data=ImageSerializer(image).data
            )

        except Exception as e:
            return custom_response(
                message=str(e),
                status=status.HTTP_400_BAD_REQUEST
            )


class Delete(APIView):
    @write_permissions
    def delete(self, request, **kwargs):
        try:
            Product.objects.get(pk=kwargs['pk'])
            image = Image.objects.get(pk=kwargs['image_pk'])
            image.delete()

            return custom_response(
                message='Image deleted successfully',
                status=status.HTTP_204_NO_CONTENT,
                data=ImageSerializer(image).data
            )

        except Exception as e:
            return custom_response(
                message=str(e),
                status=status.HTTP_400_BAD_REQUEST
            )

from rest_framework import status
from rest_framework.views import APIView

from base.helpers.decorators import write_permissions
from products.models import Product, Spec
from base.helpers.response import custom_response
from ..serializers import SpecSerializer


class Create(APIView):

    @write_permissions
    def post(self, request, **kwargs):
        try:
            data = request.data
            data['product'] = Product.objects.get(pk=kwargs['pk'])
            spec = Spec.objects.create(**request.data)

            return custom_response(
                message='Spec created successfully',
                status=status.HTTP_201_CREATED,
                data=SpecSerializer(spec).data
            )

        except Exception as e:
            return custom_response(
                message=str(e),
                status=status.HTTP_400_BAD_REQUEST
            )


class UpdateOrDelete(APIView):
    @write_permissions
    def put(self, request, **kwargs):
        try:
            # Check for product
            Product.objects.get(pk=kwargs['pk'])
            spec = Spec.objects.edit(pk=kwargs['spec_pk'], **request.data)

            return custom_response(
                message='Spec updated successfully',
                status=status.HTTP_200_OK,
                data=SpecSerializer(spec).data
            )

        except Exception as e:
            return custom_response(
                message=e,
                status=status.HTTP_400_BAD_REQUEST
            )

    @write_permissions
    def delete(self, request, **kwargs):
        try:
            # Check for product
            Product.objects.get(pk=kwargs['pk'])
            spec = Spec.objects.get(pk=kwargs['spec_pk'])
            spec.delete()

            return custom_response(
                message='Spec deleted successfully',
                status=status.HTTP_204_NO_CONTENT,
                data=SpecSerializer(spec).data
            )

        except Exception as e:
            return custom_response(
                message=str(e),
                status=status.HTTP_400_BAD_REQUEST
            )

from rest_framework import status
from rest_framework.views import APIView

from base.helpers.response import custom_response
from products.models import Product, Stock
from products.stock.serializers import StockSerializer
from base.helpers.decorators import write_permissions


class CreateEditOrDelete(APIView):
    @write_permissions
    def post(self, request, **kwargs):
        try:
            data = request.data
            data['product'] = Product.objects.get(pk=kwargs['pk'])

            stock = Stock.objects.create(**data)

            return custom_response(
                message='Stock created successfully',
                status=status.HTTP_201_CREATED,
                data=StockSerializer(stock).data
            )

        except Exception as e:
            return custom_response(
                message=str(e),
                status=status.HTTP_400_BAD_REQUEST
            )

    @write_permissions
    def put(self, request, **kwargs):
        try:
            data = request.data
            data['product'] = Product.objects.get(pk=kwargs['pk'])
            stock = Stock.objects.edit(**data)

            return custom_response(
                message='Stock edited successfully',
                status=status.HTTP_200_OK,
                data=StockSerializer(stock).data
            )

        except Exception as e:
            return custom_response(
                message=str(e),
                status=status.HTTP_400_BAD_REQUEST
            )

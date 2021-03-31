from rest_framework import status
from rest_framework.views import APIView

from base.helpers.decorators import write_permissions
from base.helpers.response import custom_response
from products.models import Product, PriceInfo
from ..serializers import PriceInfoSerializer


class CreateOrUpdate(APIView):
    @write_permissions
    def post(self, request, **kwargs):
        try:
            product = Product.objects.get(pk=kwargs['pk'])
            data = request.data
            data['product'] = product
            price_info = PriceInfo.objects.get(product=product)

            if price_info:
                PriceInfo.objects.edit(**data)
                message = 'Price updated successfully'
                _status = status.HTTP_200_OK
            else:
                PriceInfo.objects.create(**data)
                message = 'Price created successfully'
                _status = status.HTTP_201_CREATED

            return custom_response(
                message=message,
                data=PriceInfoSerializer(PriceInfo.objects.get(product=kwargs['pk'])).data,
                status=_status
            )

        except Exception as e:
            return custom_response(
                message=str(e),
                status=status.HTTP_400_BAD_REQUEST
            )

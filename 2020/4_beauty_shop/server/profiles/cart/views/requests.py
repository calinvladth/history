from rest_framework import status
from rest_framework.views import APIView

from base.helpers.decorators import check_account
from base.helpers.response import custom_response
from products.models import Product
from profiles.cart.serializers import CartSerializer
from profiles.models import Cart


class GetOrCreate(APIView):
    @check_account
    def get(self, request):
        try:
            cart = Cart.objects.get(account=request.user)
            return custom_response(
                message='Cart fetched successfully',
                status=status.HTTP_200_OK,
                data=CartSerializer(cart, many=True).data
            )
        except Exception as e:
            return custom_response(
                message=str(e),
                status=status.HTTP_400_BAD_REQUEST
            )

    @check_account
    def post(self, request):
        try:
            product = Product.objects.get(id=request.data.get('product'))
            data = {
                'account': request.user,
                'product': product
            }
            cart = Cart.objects.create(**data)
            return custom_response(
                message='Cart item created successfully',
                status=status.HTTP_201_CREATED,
                data=CartSerializer(cart).data
            )
        except Exception as e:
            return custom_response(
                message=str(e),
                status=status.HTTP_400_BAD_REQUEST
            )


class Delete(APIView):
    @check_account
    def delete(self, request, **kwargs):
        try:
            cart = Cart.objects.get(account=request.user, pk=kwargs['pk'])
            cart.delete()
            return custom_response(
                message='Cart item deleted successfully',
                status=status.HTTP_204_NO_CONTENT,
                data=CartSerializer(cart).data
            )
        except Exception as e:
            return custom_response(
                message=str(e),
                status=status.HTTP_400_BAD_REQUEST
            )

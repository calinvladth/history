from rest_framework import status
from rest_framework.views import APIView

from base.helpers.decorators import check_account
from base.helpers.response import custom_response
from products.models import Product
from profiles.models import WishList
from profiles.wish_list.serializers import WishListSerializer


class GetOrCreate(APIView):
    @check_account
    def get(self, request):
        try:
            wish_list = WishList.objects.get(account=request.user)
            return custom_response(
                message='WishList fetches successfully',
                status=status.HTTP_200_OK,
                data=WishListSerializer(wish_list, many=True).data
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
            wish_list = WishList.objects.create(**data)
            return custom_response(
                message='WishList created successfully',
                status=status.HTTP_201_CREATED,
                data=WishListSerializer(wish_list).data
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
            wish_list = WishList.objects.get(account=request.user, pk=kwargs['pk'])
            wish_list.delete()
            return custom_response(
                message='WishList deleted successfully',
                status=status.HTTP_204_NO_CONTENT,
                data=WishListSerializer(wish_list).data
            )
        except Exception as e:
            return custom_response(
                message=str(e),
                status=status.HTTP_400_BAD_REQUEST
            )

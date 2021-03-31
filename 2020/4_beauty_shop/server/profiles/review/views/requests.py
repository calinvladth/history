from rest_framework import status
from rest_framework.views import APIView
from products.models import Product
from profiles.models import Review
from base.helpers.response import custom_response
from profiles.review.serializers import ReviewSerializer
from base.helpers.decorators import check_account


class GetCreateUpdateDelete(APIView):
    @check_account
    def get(self, request, **kwargs):
        try:
            review = Review.objects.get(account=request.user)
            return custom_response(
                message='Reviews fetches successfully',
                status=status.HTTP_200_OK,
                data=ReviewSerializer(review, many=True).data
            )
        except Exception as e:
            return custom_response(
                message=str(e),
                status=status.HTTP_400_BAD_REQUEST
            )

    @check_account
    def post(self, request, **kwargs):
        try:
            product = Product.objects.get(pk=request.data.get('product'))
            del request.data['product']
            review = Review.objects.create(account=request.user, product=product, **request.data)
            return custom_response(
                message='Review created successfully',
                status=status.HTTP_201_CREATED,
                data=ReviewSerializer(review).data
            )
        except Exception as e:
            return custom_response(
                message=str(e),
                status=status.HTTP_400_BAD_REQUEST
            )

    @check_account
    def put(self, request, **kwargs):
        try:
            product = Product.objects.get(pk=request.data.get('product'))
            del request.data['product']
            review = Review.objects.edit(account=request.user, product=product, **request.data)

            return custom_response(
                message='Review updated successfully',
                status=status.HTTP_200_OK,
                data=ReviewSerializer(review).data
            )
        except Exception as e:
            return custom_response(
                message=str(e),
                status=status.HTTP_400_BAD_REQUEST
            )

    def delete(self, request, **kwargs):
        try:
            product = Product.objects.get(pk=request.data.get('product'))
            review = Review.objects.get(account=request.user, product=product)
            review.delete()

            return custom_response(
                message='Review deleted successfully',
                status=status.HTTP_204_NO_CONTENT,
                data=ReviewSerializer(review).data
            )
        except Exception as e:
            return custom_response(
                message=str(e),
                status=status.HTTP_400_BAD_REQUEST
            )

from rest_framework import status
from rest_framework.views import APIView

from base.helpers.decorators import check_account
from base.helpers.response import custom_response
from profiles.address.serializers import AddressSerializer
from profiles.models import Address


class GetOrCreate(APIView):
    @check_account
    def get(self, requests, **kwargs):
        try:
            obj = Address.objects.filter(account=requests.user)
            return custom_response(
                message='All Addresses fetched successfully',
                status=status.HTTP_200_OK,
                data=AddressSerializer(obj, many=True).data
            )

        except Exception as e:
            return custom_response(
                message=str(e),
                status=status.HTTP_400_BAD_REQUEST
            )

    @check_account
    def post(self, requests):
        try:
            obj = Address.objects.create_address(account=requests.user, **requests.data)

            return custom_response(
                message='Address was created successfully',
                status=status.HTTP_201_CREATED,
                data=AddressSerializer(obj).data
            )

        except Exception as e:
            return custom_response(
                message=str(e),
                status=status.HTTP_400_BAD_REQUEST
            )


class GetByPkUpdateOrDelete(APIView):
    @check_account
    def get(self, requests, **kwargs):
        try:
            obj = Address.objects.get(account=requests.user, pk=kwargs['pk'])
            return custom_response(
                message='Address was fetched successfully',
                status=status.HTTP_200_OK,
                data=AddressSerializer(obj).data
            )
        except Exception as e:
            return custom_response(
                message=str(e),
                status=status.HTTP_400_BAD_REQUEST
            )

    @check_account
    def put(self, requests, **kwargs):
        try:
            obj = Address.objects.update(account=requests.user, pk=kwargs['pk'], **requests.data)

            return custom_response(
                message='Address was updated successfully',
                status=status.HTTP_200_OK,
                data=AddressSerializer(obj).data
            )
        except Exception as e:
            return custom_response(
                message=str(e),
                status=status.HTTP_400_BAD_REQUEST
            )

    @check_account
    def delete(self, requests, **kwargs):
        try:
            obj = Address.objects.remove_address(account=requests.user, pk=kwargs['pk'])

            return custom_response(
                message='Address was deleted successfully',
                status=status.HTTP_204_NO_CONTENT,
                data=AddressSerializer(obj).data
            )
        except Exception as e:
            return custom_response(
                message=str(e),
                status=status.HTTP_400_BAD_REQUEST
            )

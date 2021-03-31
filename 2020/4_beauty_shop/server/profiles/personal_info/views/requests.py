from rest_framework.views import APIView
from rest_framework import status
from base.helpers.decorators import check_account
from base.helpers.response import custom_response
from profiles.personal_info.models import PersonalInfo
from profiles.personal_info.serializers import PersonalInfoSerializer


class GetOrUpdate(APIView):
    @check_account
    def get(self, request, **kwargs):
        print('GET: ', request.user)
        try:
            obj = PersonalInfo.objects.get(account=request.user)
            return custom_response(
                message='Personal info fetched successfully',
                status=status.HTTP_200_OK,
                data=PersonalInfoSerializer(obj).data
            )
        except Exception as e:
            return custom_response(
                message=str(e),
                status=status.HTTP_400_BAD_REQUEST
            )

    @check_account
    def put(self, request):
        try:
            obj = PersonalInfo.objects.update(account=request.user, **request.data)
            return custom_response(
                message='Personal info updated successfully',
                status=status.HTTP_200_OK,
                data=PersonalInfoSerializer(obj).data
            )

        except Exception as e:
            return custom_response(
                message=str(e),
                status=status.HTTP_400_BAD_REQUEST
            )

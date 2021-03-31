from django.contrib.auth import authenticate, login
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView

from accounts.account.serializers import BasicAccountSerializer
from accounts.models import Account
from base.helpers.decorators import account_is_admin, check_account
from base.helpers.response import custom_response


class Register(APIView):
    def post(self, request):
        try:
            account = Account.objects.create(**request.data)
            token, _ = Token.objects.get_or_create(user=account)
            data = BasicAccountSerializer(account).data
            data['is_authenticated'] = True
            data['token'] = token.key
            return custom_response(
                data=data,
                message='Account was created',
                status=status.HTTP_201_CREATED
            )
        except Exception as e:
            return custom_response(
                message=str(e),
                status=status.HTTP_400_BAD_REQUEST,
                data={
                    'is_authenticated': False,
                    'token': ''
                }
            )


class RegisterAdmin(APIView):
    def post(self, request, **kwargs):
        try:
            request.data['creator'] = account_is_admin(pk=kwargs['pk'])
            account = Account.objects.create_admin(**request.data)
            return custom_response(
                data=BasicAccountSerializer(account).data,
                message=f'Account was created successfully',
                status=status.HTTP_200_OK
            )

        except Exception as e:
            return custom_response(
                message=str(e),
                status=status.HTTP_400_BAD_REQUEST,
                data={
                    'is_authenticated': False,
                    'token': ''
                }
            )


class Login(APIView):
    def post(self, request):
        try:
            Account.objects.get(email=request.data.get('email'))
            account = authenticate(**request.data)

            if not account:
                raise ValueError('Account credentials are invalid')

            login(request, account)

            token, _ = Token.objects.get_or_create(user=account)
            data = BasicAccountSerializer(account).data
            data['is_authenticated'] = True
            data['token'] = token.key
            return custom_response(
                data=data,
                message=f'Welcome {account.email}',
                status=status.HTTP_200_OK
            )

        except Exception as e:
            return custom_response(
                message=str(e),
                status=status.HTTP_400_BAD_REQUEST,
                data={
                    'is_authenticated': False,
                    'token': ''
                }
            )


class CheckAccount(APIView):
    @check_account
    def get(self, request, **kwargs):
        try:
            token, _ = Token.objects.get_or_create(user=request.user)
            data = BasicAccountSerializer(request.user).data
            data['is_authenticated'] = True
            data['token'] = token.key
            return custom_response(
                data=data,
                message=f'Welcome {request.user.email}',
                status=status.HTTP_200_OK
            )

        except Exception as e:
            print('ERROR!!!!!')
            return custom_response(
                message=str(e),
                status=status.HTTP_400_BAD_REQUEST,
                data={
                    'is_authenticated': False,
                    'token': ''
                }
            )

# class Forgot(APIView):
#     def post(self, request):
#         return Response({
#             'success': True,
#             'message': 'Forgot'
#         })
#
#
# class Reset(APIView):
#     def post(self, request):
#         return Response({
#             'success': True,
#             'message': 'Reset'
#         })

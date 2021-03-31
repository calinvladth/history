from django.shortcuts import render
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import get_object_or_404
from rest_framework.authtoken.models import Token

from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticated

from rest_framework.response import Response
from rest_framework import status

from .serializers import RegisterSerializer, AccountSerializer, GetProfileSettingsSerializer,ProfileSettingsSerializer, CurrencySerializer
from .models import Account, Currency, ProfileSettings

import sys
sys.path.append('..')
from wallet.models import Wallet
from wallet.serializers import WalletSerializer


# class GetPutProfileSettings(APIView):
#     def put(self, request):
#         profile_settings_model = ProfileSettings.objects.get(belongs_to=request.user.pk)
#         profile_settings_serializer = ProfileSettingsSerializer(profile_settings_model,
#                                                                 data=request.data, partial=True)
#
#         if profile_settings_serializer.is_valid():
#             profile_settings_serializer.save()
#             return Response(profile_settings_serializer.data,
#                             status=status.HTTP_200_OK)
#
#         return Response(profile_settings_serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class CheckUser(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        profile_settings_model = ProfileSettings.objects.get(belongs_to=request.user.pk)
        profile_settings_serializer = GetProfileSettingsSerializer(profile_settings_model)
        return Response({
            'success': True,
            'message': 'Your account was checked',
            'isAuthenticated': True,
            'profile_settings': profile_settings_serializer.data})


class Login(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        # username = request.data['username']
        email = request.data.get('email')
        password = request.data.get('password')

        if email is None or password is None:
            return Response({'success': False, 'message': 'Your username or password are missing'}, status=status.HTTP_400_BAD_REQUEST)

        user = authenticate(email=email, password=password)

        if not user:
            return Response({'success': False, 'message': 'Invalid credentials'}, status=status.HTTP_404_NOT_FOUND)

        token, _ = Token.objects.get_or_create(user=user)

        user_model = Account.objects.get(pk=user.pk)
        user_serializer = AccountSerializer(user_model)

        wallet_model = Wallet.objects.get(belongs_to=user.pk)
        wallet_serializer = WalletSerializer(wallet_model)

        return Response({
            'success': True,
            'message': 'Hola',
            'token': token.key,
            'wallet_id': wallet_serializer.data['id']}, status=status.HTTP_200_OK)



class Register(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        request.data['username'] = request.data['email']
        check_user_if_exists = Account.objects.filter(email=request.data['email']).count()
        if check_user_if_exists != 0:
            return Response({'success': False, 'message': 'This user already exists'})

        user_serializer = RegisterSerializer(data=request.data)

        if not request.data.get('account') \
                and not request.data.get('password1') \
                and not request.data.get('password2') \
                and request.data.get('account') != 0:
            return Response({'error': 'Incomplete credentials'}, status=status.HTTP_400_BAD_REQUEST)

        if request.data.get('password1') != request.data.get('password2'):
            return Response({'success': False, 'message': 'Your passwords does not match'}, status=status.HTTP_400_BAD_REQUEST)

        if user_serializer.is_valid():
            # After user validation and after savind, create the wallet
            user_serializer.save(request)

            # Get the pk from the registered user
            user_pk = Account.objects.get(email=user_serializer.data['email'])
            user_pk_serializer = AccountSerializer(user_pk)
            # Create the wallet with the chosen value
            wallet_data = {'belongs_to': user_pk_serializer.data['id'], 'account': request.data['account']}
            wallet_serializer = WalletSerializer(data=wallet_data)
            # Create the ProfileSetting
            profile_setting = {'currency': request.data.get('currency'), 'belongs_to': user_pk_serializer.data['id']}
            profile_setting_serializer = ProfileSettingsSerializer(data=profile_setting)

            if profile_setting_serializer.is_valid():
                profile_setting_serializer.save()
                if wallet_serializer.is_valid():
                    wallet_serializer.save()
                    return Response({'success': True, 'message': 'Your account was created successfully'}, status=status.HTTP_201_CREATED)
                else:
                    return Response(wallet_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            else:
                return Response(profile_setting_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ChooseCurrency(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        currency_model = Currency.objects.all()
        currency_serializer = CurrencySerializer(currency_model, many=True)
        return Response(currency_serializer.data, status=status.HTTP_200_OK)

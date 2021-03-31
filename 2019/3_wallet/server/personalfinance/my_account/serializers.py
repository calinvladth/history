from rest_framework import serializers
from rest_framework.response import Response
from rest_framework.status import HTTP_403_FORBIDDEN
from rest_auth.registration.serializers import RegisterSerializer
from allauth.account.adapter import get_adapter
from .models import Account, ProfileSettings, Currency


class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ('id', 'username', 'email')


class RegisterAccountSerializer(RegisterSerializer):

    class Meta:
        model = Account
        fields = ('username', 'email', 'password', 'is_active')

    def get_cleaned_data(self):
        return {
            'username': self.validated_data.get('username', ''),
            'password1': self.validated_data.get('password1', ''),
            'password2': self.validated_data.get('password1', ''),
            'email': self.validated_data.get('email', ''),
        }

    def save(self, request):
        adapter = get_adapter()
        user = adapter.new_user(request)
        self.cleaned_data = self.get_cleaned_data()

        user.save()
        adapter.save_user(request, user, self)

        return user


class CurrencySerializer(serializers.ModelSerializer):

    class Meta:
        model = Currency
        fields = '__all__'


class GetProfileSettingsSerializer(serializers.ModelSerializer):
    currency = CurrencySerializer()

    class Meta:
        model = ProfileSettings
        fields = '__all__'


class ProfileSettingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfileSettings
        fields = '__all__'

from rest_framework import serializers
from .models import Account


class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ['email', 'is_active', 'id', 'is_admin', 'is_staff', 'last_login']


class BasicAccountSerializer(serializers.ModelSerializer):

    class Meta:
        model = Account
        fields = ['email', 'is_active']

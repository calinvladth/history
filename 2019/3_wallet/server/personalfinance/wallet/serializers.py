from rest_framework import serializers
from .models import Category, Wallet, WalletActivity


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class WalletSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wallet
        fields = '__all__'


class WalletActivitySerializer(serializers.ModelSerializer):

    class Meta:
        model = WalletActivity
        fields = '__all__'


class GetWalletActivitySerializer(serializers.ModelSerializer):

    category = CategorySerializer()

    class Meta:
        model = WalletActivity
        fields = '__all__'

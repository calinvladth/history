from rest_framework import serializers
from .models import PriceInfo


class PriceInfoSerializer(serializers.ModelSerializer):
    flag = serializers.ReadOnlyField()

    class Meta:
        model = PriceInfo
        exclude = ['product']

from rest_framework import serializers
from ...models import Scans


class ScanSerializer(serializers.ModelSerializer):
    class Meta:
        model = Scans
        fields = '__all__'

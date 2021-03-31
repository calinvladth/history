from rest_framework import serializers
from ...models import ShowCase
from ..scans.serializer import ScanSerializer


class ShowCaseSerializer(serializers.ModelSerializer):
    scan = ScanSerializer()

    class Meta:
        model = ShowCase
        fields = '__all__'

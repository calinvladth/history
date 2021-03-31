from rest_framework import serializers
from ...models import EnterKey


class EnterKeySerializer(serializers.ModelSerializer):
    class Meta:
        model = EnterKey
        fields = '__all__'

from rest_framework.serializers import ModelSerializer
from .models import Spec


class SpecSerializer(ModelSerializer):
    class Meta:
        model = Spec
        exclude = ['product']

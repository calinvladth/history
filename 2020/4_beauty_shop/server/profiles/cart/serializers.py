from rest_framework.serializers import ModelSerializer
from .models import Cart
from products.product.serializers import ProductSerializer


class CartSerializer(ModelSerializer):
    product = ProductSerializer()

    class Meta:
        model = Cart
        fields = '__all__'

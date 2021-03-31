from rest_framework.serializers import ModelSerializer
from .models import WishList
from products.product.serializers import ProductSerializer


class WishListSerializer(ModelSerializer):
    product = ProductSerializer()

    class Meta:
        model = WishList
        fields = '__all__'

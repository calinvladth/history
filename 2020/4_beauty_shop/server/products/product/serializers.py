from rest_framework import serializers
from .models import Product
from products.image.serializers import ImageSerializer
from products.price_info.serializers import PriceInfoSerializer
from products.stock.serializers import StockSerializer


class ProductSerializer(serializers.ModelSerializer):
    images = ImageSerializer(many=True)
    price_info = PriceInfoSerializer()
    stock = StockSerializer(many=True)

    class Meta:
        model = Product
        fields = '__all__'

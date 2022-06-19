from rest_framework import serializers

from products.serializers import AdditionalSerializer
from products.models import Product


class ProductSerializer(serializers.ModelSerializer):
    additionals = AdditionalSerializer(many=True)

    class Meta:
        model = Product
        fields = [
            'id',
            'title',
            'subtitle',
            'picture',
            'additionals',
            'price',
            'created',
            'updated',
        ]

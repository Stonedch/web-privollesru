from rest_framework import serializers

from products.models import Additional


class AdditionalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Additional
        fields = ['id', 'title', 'body', 'product', 'created', 'updated']

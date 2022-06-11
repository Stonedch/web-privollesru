from rest_framework import serializers

from settings.models import Point


class PointSerializer(serializers.ModelSerializer):

    class Meta:
        model = Point
        fields = [
            'map_x',
            'map_y',
        ]

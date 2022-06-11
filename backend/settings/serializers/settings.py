from rest_framework import serializers

from settings.models import Settings
from .point import PointSerializer


class SettingsSerializer(serializers.ModelSerializer):
    points = PointSerializer(many=True, read_only=True)

    class Meta:
        model = Settings
        fields = [
            'url',
            'first_number',
            'second_number',
            'email',
            'working_time',
            'address',
            'map_x',
            'map_y',
            'map_zoom',
            'yandex_metrika',
            'points',
        ]

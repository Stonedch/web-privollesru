from rest_framework import serializers

from settings.models import Settings


class SettingsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Settings
        fields = [
            'url',
            'first_number',
            'second_number',
            'working_time',
            'address',
            'map_x',
            'map_y',
            'map_zoom',
            'yandex_metrika',
        ]

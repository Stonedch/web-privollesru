from rest_framework import serializers

from callbacks.models import Callback


class CallbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Callback
        fields = ('id', 'fullname', 'phone_number', 'description')

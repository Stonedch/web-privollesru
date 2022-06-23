from rest_framework.permissions import IsAdminUser
from rest_framework.viewsets import ModelViewSet

from clients.models import Client
from clients.serializers import ClientSerializer
from core.permissions import ReadOnly


class ClientViewSet(ModelViewSet):
    serializer_class = ClientSerializer
    queryset = Client.objects.all()
    permission_classes = (IsAdminUser | ReadOnly, )

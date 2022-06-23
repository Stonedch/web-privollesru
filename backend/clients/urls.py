from rest_framework import routers

from .viewsets import ClientViewSet

router = routers.DefaultRouter()

router.register(r'clients', ClientViewSet, basename='clients')

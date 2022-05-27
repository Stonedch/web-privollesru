from rest_framework import routers

from callbacks.viewsets import CallbackViewSet

router = routers.DefaultRouter()

router.register(r'callbacks', CallbackViewSet, basename='callbacks')

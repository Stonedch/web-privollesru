from rest_framework.permissions import IsAdminUser
from rest_framework.viewsets import ModelViewSet

from products.models import Product
from products.serializers import ProductSerializer
from core.permissions import ReadOnly


class ProductViewSet(ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
    permission_classes = (IsAdminUser | ReadOnly, )

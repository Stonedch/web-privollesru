from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from rest_framework import routers
from rest_framework import permissions

from drf_yasg.views import get_schema_view
from drf_yasg import openapi

from callbacks.urls import router as callbacks_router
from questions.urls import router as questions_router
from products.urls import router as products_router

router = routers.DefaultRouter()

router.registry.extend(callbacks_router.registry)
router.registry.extend(questions_router.registry)
router.registry.extend(products_router.registry)

schema_view = get_schema_view(
    openapi.Info(
        title="API",
        default_version='v1',
        contact=openapi.Contact(email="stch.max.muhin@gmail.com"),
        license=openapi.License(name="MIT"),
    ),
    public=True,
    permission_classes=[permissions.AllowAny],
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include([
        path('v1/', include([
            path('', include(router.urls), name='router')
        ]), name='v1'),
    ]), name='api'),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

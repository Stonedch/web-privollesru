from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from rest_framework import routers

from callbacks.urls import router as callbacks_router
from questions.urls import router as questions_router
from products.urls import router as products_router
from settings.urls import router as settings_router

router = routers.DefaultRouter()

router.registry.extend(callbacks_router.registry)
router.registry.extend(questions_router.registry)
router.registry.extend(products_router.registry)
router.registry.extend(settings_router.registry)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include([
        path('v1/', include([
            path('', include(router.urls), name='router')
        ]), name='v1'),
    ]), name='api'),
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

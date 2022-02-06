from django.conf import settings
from django.urls import include, path
from django.contrib import admin
from django.views.generic.base import TemplateView

from wagtail.admin import urls as wagtailadmin_urls
from wagtail.core import urls as wagtail_urls
from wagtail.documents import urls as wagtaildocs_urls

from search import views as search_views
from feedback import api as feedback_api

urlpatterns = [
    path('django-admin/', admin.site.urls),

    path('admin/', include(wagtailadmin_urls)),
    path('documents/', include(wagtaildocs_urls)),

    path('search/', search_views.search, name='search'),
]

if settings.DEBUG:
    from django.conf.urls.static import static
    from django.contrib.staticfiles.urls import staticfiles_urlpatterns

    urlpatterns += staticfiles_urlpatterns()
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns = urlpatterns + [
    path('api/', include([
        path('v1/', include([
            path('', include(feedback_api.router.urls), name='feedback'),
        ]), name='v1'),
    ]), name='api'),

    path('robots.txt/', TemplateView.as_view(template_name='robots.txt', content_type='text/plain')),
    path('sitemap.xml/', TemplateView.as_view(template_name='sitemap.xml', content_type='text/plain')),

    path('', include(wagtail_urls)),
]


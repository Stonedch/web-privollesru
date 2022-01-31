from django.contrib.sitemaps.views import sitemap
from django.urls import path
from django.views.generic.base import TemplateView

from .views import *
from .sitemaps import *

sitemaps = {
    'static': StaticViewSitemap,
}

urlpatterns = [
    path('robots.txt/', TemplateView.as_view(template_name='robots.txt', content_type='text/plain')),
    path('sitemap.xml/', sitemap, {'sitemaps': sitemaps}, name='django.contrib.sitemaps.views.sitemap'),
    path('', IndexView.as_view(), name='index'),
    path('feedback/', FeedbackView.as_view(), name='feedback'),
]

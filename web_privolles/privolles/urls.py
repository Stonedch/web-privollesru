from django.urls import path
from django.views.generic.base import TemplateView

from .views import *

urlpatterns = [
    path('robots.txt/', TemplateView.as_view(template_name='robots.txt', content_type='text/plain')),
    path('', IndexView.as_view(), name='index'),
    path('feedback/', FeedbackView.as_view(), name='feedback'),
]

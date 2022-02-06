from rest_framework import routers

from .views import FeedbackView

router = routers.DefaultRouter(trailing_slash=True)

router.register(r'feedback', FeedbackView, basename='feedback')


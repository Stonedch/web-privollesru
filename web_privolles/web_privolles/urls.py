from django.urls import path, include

urlpatterns = [
    path('', include('privolles.urls'), name='index'),
]

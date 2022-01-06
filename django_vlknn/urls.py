from django.urls import path, include

urlpatterns = [
    path('', include('vlknn.urls'), name='index'),
]
from django.urls import path, include

urlpatterns = [
    path('', include('privolles.urls'), name='index'),
]

handler404 = 'web_privolles.views.page_not_found_view'


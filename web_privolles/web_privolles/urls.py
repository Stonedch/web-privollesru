from django.urls import path, include

urlpatterns = [
    path('', include('privolles.urls'), name='index'),
]
handler404 = "python3 ./manage.py migrateprivolles.views.page_not_found_view"
from django.urls import path
from .requests import Create, Delete

urlpatterns = [
    path('', Create.as_view()),
    path('<int:image_pk>/', Delete.as_view())
]

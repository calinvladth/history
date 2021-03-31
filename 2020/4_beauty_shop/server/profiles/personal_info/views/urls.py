from django.urls import path

from .requests import GetOrUpdate

urlpatterns = [
    path('', GetOrUpdate.as_view()),
]

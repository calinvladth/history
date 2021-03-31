from django.urls import path
from .requests import CreateOrUpdate

urlpatterns = [
    path('', CreateOrUpdate.as_view())
]

from django.urls import path
from .requests import GetCreateUpdateDelete

urlpatterns = [
    path('', GetCreateUpdateDelete.as_view())
]

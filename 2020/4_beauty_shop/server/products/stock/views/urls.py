from django.urls import path
from .requests import CreateEditOrDelete

urlpatterns = [
    path('', CreateEditOrDelete.as_view())
]

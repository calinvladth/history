from django.urls import path
from .requests import Create, UpdateOrDelete

urlpatterns = [
    path('', Create.as_view()),
    path('<int:spec_pk>/', UpdateOrDelete.as_view())
]

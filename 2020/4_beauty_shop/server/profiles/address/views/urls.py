from django.urls import path

from .requests import GetOrCreate, GetByPkUpdateOrDelete

urlpatterns = [
    path('', GetOrCreate.as_view()),
    path('<int:pk>/', GetByPkUpdateOrDelete.as_view())
]

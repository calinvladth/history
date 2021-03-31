from django.urls import path
from .requests import GetOrCreate, GetEditOrRemove, Activate, Deactivate

urlpatterns = [
    path('', GetOrCreate.as_view()),
    path('<int:pk>/', GetEditOrRemove.as_view()),
    path('<int:pk>/activate/', Activate.as_view()),
    path('<int:pk>/deactivate/', Deactivate.as_view()),
]

from django.urls import path, include
from .views import Login, Register, CheckUser, ChooseCurrency

urlpatterns = [
    path('login/', Login.as_view()),
    path('register/', Register.as_view()),
    path('check_user/', CheckUser.as_view()),
    path('currencies/', ChooseCurrency.as_view())
]

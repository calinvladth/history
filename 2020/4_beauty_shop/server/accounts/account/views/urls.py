from django.urls import path
from .requests import Login, Register, RegisterAdmin, CheckAccount

urlpatterns = [
    path('login/', Login.as_view()),
    path('register/', Register.as_view()),
    path('check_account/', CheckAccount.as_view()),
    path('<int:pk>/register/', RegisterAdmin.as_view())
]

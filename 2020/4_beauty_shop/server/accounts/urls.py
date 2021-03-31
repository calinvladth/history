from django.urls import path, include

urlpatterns = [
    path('', include('accounts.account.views.urls'))
]

from django.urls import path, include
from .views.category import request as category_request
from .views.wallet import request as  wallet_request
from .views.wallet_activity import request as wallet_activity_request, get_tops


urlpatterns = [
    path('category/', category_request.GetPost.as_view()),
    path('category/<int:pk>/', category_request.Put.as_view()),
    path('wallet/', wallet_request.GetPost.as_view()),
    path('wallet/<int:pk>/', wallet_request.GetByPkPut.as_view()),
    path('wallet/activity/', wallet_activity_request.GetCreate.as_view()),
    path('wallet/activity/<int:pk>/', wallet_activity_request.PutDelete.as_view()),
    path('wallet/activity/top/', get_tops.GetTops.as_view())
]

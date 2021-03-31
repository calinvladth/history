from django.urls import path
from .views.key_check.requests import GET_KEY
from .views.scans.requests import GET_SCANS, GET_SCAN_BY_PK
from .views.showcase.requests import GET_SHOWCASE

urlpatterns = [
    path('check_key/', GET_KEY.as_view()),
    path('scans/', GET_SCANS.as_view()),
    path('scans/<uuid:pk>/', GET_SCAN_BY_PK.as_view()),
    path('showcase/', GET_SHOWCASE.as_view())
]

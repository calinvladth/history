from django.urls import path

from .views import LogView

log_urls = [
    path('', LogView.as_view(), name='logs')
]

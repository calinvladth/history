from django.urls import path, include

from .reddit.urls import reddit_urls
from .logs.urls import log_urls

urlpatterns = [
    path('reddit/', include(reddit_urls)),
    path('logs/', include(log_urls))
]

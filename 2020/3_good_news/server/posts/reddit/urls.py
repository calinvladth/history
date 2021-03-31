from django.urls import path

from .views import RedditView

reddit_urls = [
    path('', RedditView.as_view(), name='posts')
]

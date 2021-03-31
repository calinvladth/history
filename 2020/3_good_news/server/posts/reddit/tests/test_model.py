from django.test import TestCase

from ..api import Reddit
from ..models import Posts


class TestModel(TestCase):
    def setUp(self):
        self.reddit = Reddit()
        limit = 25
        days = 2
        self.subreddits = [
            'upliftingnews',
        ]
        self.reddit.set_defaults(limit=limit, days=days, sub=self.subreddits)

    def test_pagination(self):
        self.reddit.set_defaults(limit=100, days=3, sub=self.subreddits)
        Posts.objects.create_all(self.reddit.get_subreddit_hot())
        posts = None

        for x in range(10):
            x += 1
            posts = Posts.objects.pagination(page=x)

        self.assertIsNotNone(posts)

    def test_pagination_with_filters(self):
        pass

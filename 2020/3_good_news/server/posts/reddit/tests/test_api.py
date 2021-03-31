from django.test import TestCase
from ..api import Reddit


class TestApi(TestCase):
    def setUp(self):
        self.reddit = Reddit()
        limit = 25
        days = 2
        subreddits = [
            'coronavirus',
            'goodnews'
        ]

        self.reddit.set_defaults(limit=limit, days=days, sub=subreddits)

    def test_subreddits(self):
        posts = self.reddit.get_subreddit()
        self.assertTrue(posts.__len__() > 0)

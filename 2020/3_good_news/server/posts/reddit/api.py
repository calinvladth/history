import praw
from datetime import datetime, timedelta


class Reddit:
    api = 'https://www.reddit.com'

    subreddits = [
        'upliftingnews',
        'coronavirus',
        'goodnews'
    ]

    black_list_url = [
        'reddit',
    ]

    limit = None
    days = 3

    def __init__(self):
        self.reddit = praw.Reddit(client_id="nuWfQEcNv50SvQ", client_secret="kf0NP_UPn0tCgggS0mxIemxe36k",
                                  password="nikeul1q2w3e", user_agent="theoscoding",
                                  username='calinvladth')
        self.reddit.read_only = True

        self.rules = SubredditRules()

    def get_subreddit_hot(self):
        posts = []

        for subreddit in self.subreddits:
            for post in self.reddit.subreddit(subreddit).hot(limit=self.limit):
                posts.append(post)

        return posts

    def get_subreddit(self):
        posts = []
        for subreddit in self.subreddits:
            for post in self.reddit.subreddit(subreddit).hot(limit=self.limit):
                # Filter by day creation
                if self.filter_by_day_creation(post=post, days=self.days):
                    # Filter by official source
                    if not self.exclude_unofficial_source(post):
                        # Filter by subreddit rule
                        if self.rules.applied_rules(post):
                            posts.append(post)

        return posts

    @classmethod
    def set_defaults(cls, limit=None, days=3, sub=None):
        if sub is None:
            sub = cls.subreddits
        if limit is None:
            limit = cls.limit
        cls.limit = limit
        cls.days = days
        cls.subreddits = sub

    @staticmethod
    def filter_by_day_creation(post, days=3):
        date_1 = datetime.fromtimestamp(post.created_utc)
        date_2 = datetime.now() - timedelta(days=days)

        return True if date_2 < date_1 else False

    def exclude_unofficial_source(self, post):
        # Pass the post only if the official source does not contain the reddit link
        exclude = True
        for rule in self.black_list_url:
            exclude = post.url.find(rule) is not -1

            if exclude:
                break

        return exclude


class SubredditRules:

    def applied_rules(self, post):
        if post.subreddit == 'goodnews':
            return self.goodnews(post)

        if post.subreddit == 'coronavirus':
            return self.coronavirus(post)

        else:
            return True

    def goodnews(self, post):
        flairs = [
            'Positive trends',
            'Game-changing concepts',
            'Feel-good news'
        ]
        return self.filter_by_flair(flairs=flairs, post=post)

    def coronavirus(self, post):
        flairs = [
            'Good News',
            'Good News (/r/all)'
        ]
        return self.filter_by_flair(flairs=flairs, post=post)

    @staticmethod
    def filter_by_flair(flairs, post):
        match = False

        for flair in flairs:
            match = post.link_flair_text == flair

            if match:
                break

        return match

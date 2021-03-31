from django.db import models
from base.models import TimeStamp
from django.core.validators import MinValueValidator, MaxValueValidator
from .managers import ReviewManager


class Review(TimeStamp):
    rating = models.PositiveIntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])
    review = models.TextField()
    # Relationships
    account = models.ForeignKey('accounts.Account', on_delete=models.CASCADE)
    product = models.ForeignKey('products.Product', on_delete=models.CASCADE)

    objects = ReviewManager()

from django.db import models


class Feedback(models.Model):
    name = models.CharField(max_length=120)
    phone_number = models.CharField(max_length=120)
    description = models.TextField(blank=True)


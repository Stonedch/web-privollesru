from django.db import models

from wagtail.core.models import Orderable
from wagtail.admin.edit_handlers import FieldPanel

from modelcluster.fields import ParentalKey

from . import Product


class ProductFeature(Orderable):
    title = models.CharField(max_length=255, null=False, blank=False)
    subtitle = models.CharField(max_length=512, null=False, blank=False)
    product = ParentalKey(
        Product,
        null=False,
        blank=False,
        on_delete=models.CASCADE,
        related_name='features',
    )

    panels = [
        FieldPanel('title'),
        FieldPanel('subtitle'),
    ]


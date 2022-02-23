from django.db import models

from wagtail.admin.edit_handlers import FieldPanel, InlinePanel
from wagtail.images.edit_handlers import ImageChooserPanel

from modelcluster.fields import ParentalKey
from modelcluster.models import ClusterableModel

from . import HomePage


class Product(ClusterableModel):
    page = ParentalKey(HomePage, on_delete=models.CASCADE, related_name='products')
    title = models.CharField(max_length=255)
    subtitle = models.TextField()
    image = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=False,
        on_delete=models.SET_NULL,
        related_name='product',
    )

    panels = [
        FieldPanel('title'),
        FieldPanel('subtitle'),
        ImageChooserPanel('image'),
        InlinePanel('features', label='Features'),
    ]


from tabnanny import verbose
from django.db import models
from django.utils.translation import gettext as _

from .product import Product


class Additional(models.Model):
    title = models.CharField(max_length=256, verbose_name=_('title'))
    body = models.TextField(verbose_name=_('body'))
    product = models.ForeignKey(
        Product,
        related_name='additionals',
        on_delete=models.CASCADE,
        blank=True, null=True,
        verbose_name=_('product')
    )
    created = models.DateTimeField(
        auto_now_add=True, verbose_name=_('created'))
    updated = models.DateTimeField(auto_now=True, verbose_name=_('updated'))

    class Meta:
        verbose_name = _('additional')
        verbose_name_plural = _('additional')

    def __str__(self):
        return f"{self.title}"

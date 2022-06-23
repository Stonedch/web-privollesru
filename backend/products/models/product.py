from django.db import models
from django.utils.translation import gettext as _


class Product(models.Model):
    title = models.CharField(max_length=128, verbose_name=_('title'))
    subtitle = models.CharField(max_length=512, verbose_name=_('subtitle'))
    picture = models.ImageField(
        upload_to='products', blank=True, null=True, verbose_name=_('picture'))
    price = models.FloatField(blank=True, null=True, verbose_name=_('price'))
    created = models.DateTimeField(
        auto_now_add=True, verbose_name=_('created'))
    updated = models.DateTimeField(auto_now=True, verbose_name=_('updated'))
    show_in_top = models.BooleanField(
        default=False, verbose_name=_('show_in_top'))

    class Meta:
        verbose_name = _('product')
        verbose_name_plural = _('products')

    def __str__(self):
        return f"{self.title}"

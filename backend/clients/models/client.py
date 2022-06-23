from django.db import models
from django.utils.translation import gettext as _


class Client(models.Model):
    picture = models.ImageField(
        upload_to='clients', blank=True, null=True, verbose_name=_('picture'))
    created = models.DateTimeField(
        auto_now_add=True, verbose_name=_('created'))
    updated = models.DateTimeField(auto_now=True, verbose_name=_('updated'))

    class Meta:
        verbose_name = _('client')
        verbose_name_plural = _('clients')

    def __str__(self):
        return f'{self.id}'

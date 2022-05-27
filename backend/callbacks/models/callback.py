from django.db import models
from django.utils.translation import gettext as _


class Callback(models.Model):
    fullname = models.CharField(
        max_length=120, verbose_name=_('fullname'))
    phone_number = models.CharField(
        max_length=120, verbose_name=_('phone_number'))
    description = models.TextField(
        max_length=256, blank=True, null=True, verbose_name=_('description'))
    created = models.DateTimeField(
        auto_now_add=True, verbose_name=_('created'))
    updated = models.DateTimeField(
        auto_now=True, verbose_name=_('updated'))

    class Meta:
        verbose_name = _('callback')
        verbose_name_plural = _('callbacks')

    def __str__(self):
        return f'{self.fullname} {self.phone_number}'

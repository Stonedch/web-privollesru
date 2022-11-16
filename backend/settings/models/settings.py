from tabnanny import verbose
from django.db import models
from django.utils.translation import gettext as _

from .singleton import SingletonModel


class Settings(SingletonModel):
    url = models.URLField(max_length=256, null=True, verbose_name=_('url'))
    first_number = models.CharField(
        max_length=256, null=True, verbose_name=_('first_number'))
    second_number = models.CharField(
        max_length=256, null=True, verbose_name=_('second_number'))
    email = models.CharField(
        max_length=256, null=True, verbose_name=_('email'))
    working_time = models.CharField(
        max_length=256, null=True, verbose_name=_('working_time'))
    address = models.TextField(
        max_length=256, null=True, verbose_name=_('address'))
    map_x = models.FloatField(null=True, verbose_name=_('map_x'))
    map_y = models.FloatField(null=True, verbose_name=_('map_y'))
    map_zoom = models.IntegerField(null=True, verbose_name=_('map_zoom'))
    yandex_metrika = models.CharField(
        max_length=128, null=True, verbose_name=_('yandex_metrika'))
    banner = models.ImageField(
        upload_to='banners', blank=True, null=True, verbose_name=_('banner'))

    class Meta:
        verbose_name = _('settings')
        verbose_name_plural = _('settings')

    def __str__(self):
        return 'Settings'

from django.db import models
from django.utils.translation import gettext as _

from .settings import Settings


class Point(models.Model):
    map_x = models.FloatField(null=True, verbose_name=_('map_x'))
    map_y = models.FloatField(null=True, verbose_name=_('map_y'))
    settings = models.ForeignKey(
        Settings,
        related_name='points',
        on_delete=models.CASCADE,
        blank=False, null=False,
        default=1,
        verbose_name=_('settings')
    )

    class Meta:
        verbose_name = _('point')
        verbose_name_plural = _('points')

    def __str__(self):
        return f'{self.map_x}, {self.map_y}'

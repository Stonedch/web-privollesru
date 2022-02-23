from django.utils.translation import gettext as _

from wagtail.core.models import Page
from wagtail.admin.edit_handlers import InlinePanel


class HomePage(Page):
    content_panels = Page.content_panels + [
        InlinePanel('products', label='Products'),
    ]


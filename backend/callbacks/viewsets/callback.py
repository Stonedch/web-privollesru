from django.conf import settings
from django.core.mail import send_mail

from rest_framework.response import Response
from rest_framework import permissions, viewsets, status

from callbacks.models import Callback
from callbacks.serializers import CallbackSerializer


class CallbackViewSet(viewsets.ModelViewSet):
    queryset = Callback.objects.all()
    serializer_class = CallbackSerializer
    permission_classes = (permissions.AllowAny, )
    http_method_names = ('post', )

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)

        serializer.is_valid(raise_exception=True)
        serializer.save()

        data = serializer.data

        send_mail(
            "Новая заявка на обратную связь",
            f"- Номер телефона: {data['phone_number']}\n- Имя: {data['fullname']}\n- Наименование, размер и вид продукции: {data['description']}\n http://privolles.ru",
            settings.EMAIL_HOST_USER,
            settings.RECIPIENT_LIST,
            fail_silently=False,
        )

        return Response(status=status.HTTP_201_CREATED)

from django.core.mail import send_mail
from django.shortcuts import render, redirect
from django.views.generic import View

from .models import Feedback


class IndexView(View):
    def get(self, request):
        return render(request, 'vlknn/index.html')


class FeedbackView(View):
    def post(self, request):
        phone_number = request.POST.get('phone-number', '')
        name = request.POST.get('name', '')

        feedback = Feedback(phone_number=phone_number, name=name).save()

        send_mail(
            'Новая заявка на обратную связь',
            f'- Номер телефона: {phone_number}\n- Имя: {name}',
            'stch.max.muhin@gmail.com',
            ['stch.max.muhin@gmail.com'],
            fail_silently=False,
        )

        return redirect('index')
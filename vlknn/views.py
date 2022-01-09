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

        return redirect('index')
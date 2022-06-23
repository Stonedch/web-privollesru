# Generated by Django 4.0.5 on 2022-06-23 09:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('callbacks', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='callback',
            options={'verbose_name': 'Заявка обратной связи', 'verbose_name_plural': 'Заявки обратной связи'},
        ),
        migrations.AlterField(
            model_name='callback',
            name='created',
            field=models.DateTimeField(auto_now_add=True, verbose_name='Добавлено'),
        ),
        migrations.AlterField(
            model_name='callback',
            name='description',
            field=models.TextField(blank=True, max_length=256, null=True, verbose_name='Описание'),
        ),
        migrations.AlterField(
            model_name='callback',
            name='fullname',
            field=models.CharField(max_length=120, verbose_name='Полное имя'),
        ),
        migrations.AlterField(
            model_name='callback',
            name='phone_number',
            field=models.CharField(max_length=120, verbose_name='Номер телефона'),
        ),
        migrations.AlterField(
            model_name='callback',
            name='updated',
            field=models.DateTimeField(auto_now=True, verbose_name='Обновлено'),
        ),
    ]
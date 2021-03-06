# Generated by Django 4.0.5 on 2022-06-23 10:05

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Client',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('picture', models.ImageField(blank=True, null=True, upload_to='clients', verbose_name='Изображение')),
                ('created', models.DateTimeField(auto_now_add=True, verbose_name='Добавлено')),
                ('updated', models.DateTimeField(auto_now=True, verbose_name='Обновлено')),
            ],
            options={
                'verbose_name': 'client',
                'verbose_name_plural': 'client',
            },
        ),
    ]

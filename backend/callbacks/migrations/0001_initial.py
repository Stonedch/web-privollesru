# Generated by Django 4.0.4 on 2022-05-27 11:56

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Callback',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fullname', models.CharField(max_length=120, verbose_name='fullname')),
                ('phone_number', models.CharField(max_length=120, verbose_name='phone_number')),
                ('description', models.TextField(blank=True, max_length=256, null=True, verbose_name='description')),
                ('created', models.DateTimeField(auto_now_add=True, verbose_name='created')),
                ('updated', models.DateTimeField(auto_now=True, verbose_name='updated')),
            ],
            options={
                'verbose_name': 'callback',
                'verbose_name_plural': 'callbacks',
            },
        ),
    ]

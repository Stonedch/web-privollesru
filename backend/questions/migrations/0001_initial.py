# Generated by Django 4.0.4 on 2022-05-27 12:41

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Question',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.TextField(max_length=512, verbose_name='title')),
                ('body', models.TextField(max_length=512, verbose_name='body')),
                ('created', models.DateTimeField(auto_now_add=True, verbose_name='created')),
                ('updated', models.DateTimeField(auto_now=True, verbose_name='updated')),
            ],
            options={
                'verbose_name': 'question',
                'verbose_name_plural': 'questions',
            },
        ),
    ]

# Generated by Django 4.0.4 on 2022-06-11 12:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('settings', '0003_point'),
    ]

    operations = [
        migrations.RenameField(
            model_name='point',
            old_name='x',
            new_name='map_x',
        ),
        migrations.RenameField(
            model_name='point',
            old_name='y',
            new_name='map_y',
        ),
    ]

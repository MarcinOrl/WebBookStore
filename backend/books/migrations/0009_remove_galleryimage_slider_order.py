# Generated by Django 4.2.17 on 2025-01-05 18:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0008_slider'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='galleryimage',
            name='slider_order',
        ),
    ]
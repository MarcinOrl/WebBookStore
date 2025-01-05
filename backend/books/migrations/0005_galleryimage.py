# Generated by Django 4.2.17 on 2025-01-05 15:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0004_theme_name_userprofile'),
    ]

    operations = [
        migrations.CreateModel(
            name='GalleryImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('description', models.TextField(blank=True)),
                ('image', models.ImageField(upload_to='gallery/')),
                ('slider_order', models.PositiveIntegerField(default=0)),
                ('gallery_id', models.CharField(default='default', max_length=50)),
            ],
            options={
                'ordering': ['slider_order'],
            },
        ),
    ]
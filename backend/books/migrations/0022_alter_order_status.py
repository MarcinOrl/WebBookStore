# Generated by Django 4.2.17 on 2025-01-11 15:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0021_remove_cartitem_book_remove_cartitem_cart_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='status',
            field=models.CharField(choices=[('pending', 'Oczekujące'), ('shipped', 'Wysłane'), ('completed', 'Zakończone'), ('cancelled', 'Anulowane')], default='pending', max_length=10),
        ),
    ]

# Generated by Django 4.2.17 on 2025-01-11 14:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0020_cart_cartitem'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cartitem',
            name='book',
        ),
        migrations.RemoveField(
            model_name='cartitem',
            name='cart',
        ),
        migrations.DeleteModel(
            name='Cart',
        ),
        migrations.DeleteModel(
            name='CartItem',
        ),
    ]
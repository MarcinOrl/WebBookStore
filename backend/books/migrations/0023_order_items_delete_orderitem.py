# Generated by Django 4.2.17 on 2025-01-11 15:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0022_alter_order_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='items',
            field=models.JSONField(default=1),
            preserve_default=False,
        ),
        migrations.DeleteModel(
            name='OrderItem',
        ),
    ]

# Generated by Django 3.0.5 on 2020-05-08 20:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='created',
            field=models.FloatField(default=1588970906.7140348),
        ),
    ]

# Generated by Django 3.0.5 on 2020-05-08 11:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='account',
            name='is_admin',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='account',
            name='created',
            field=models.FloatField(default=1588937700.5675213),
        ),
    ]

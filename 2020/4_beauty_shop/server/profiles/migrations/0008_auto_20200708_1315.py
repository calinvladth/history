# Generated by Django 3.0.5 on 2020-07-08 13:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0007_auto_20200708_1250'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='personalinfo',
            name='email_verification',
        ),
        migrations.AlterField(
            model_name='cart',
            name='created',
            field=models.FloatField(default=1594214144.791477),
        ),
        migrations.AlterField(
            model_name='personalinfo',
            name='created',
            field=models.FloatField(default=1594214144.791181),
        ),
        migrations.AlterField(
            model_name='review',
            name='created',
            field=models.FloatField(default=1594214144.791181),
        ),
        migrations.AlterField(
            model_name='wishlist',
            name='created',
            field=models.FloatField(default=1594214144.791477),
        ),
    ]

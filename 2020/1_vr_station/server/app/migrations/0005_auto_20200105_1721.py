# Generated by Django 3.0.2 on 2020-01-05 17:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0004_auto_20200103_1207'),
    ]

    operations = [
        migrations.AlterField(
            model_name='scans',
            name='image',
            field=models.ImageField(upload_to='app/uploads/2020/1/5/'),
        ),
    ]
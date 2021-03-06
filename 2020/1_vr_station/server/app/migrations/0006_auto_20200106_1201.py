# Generated by Django 3.0.2 on 2020-01-06 12:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0005_auto_20200105_1721'),
    ]

    operations = [
        migrations.AddField(
            model_name='enterkey',
            name='name',
            field=models.CharField(default='', max_length=20),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='scans',
            name='image',
            field=models.ImageField(upload_to='app/uploads/2020/1/6/'),
        ),
        migrations.AlterField(
            model_name='scans',
            name='name',
            field=models.CharField(max_length=25),
        ),
    ]

# Generated by Django 2.2.6 on 2019-10-19 22:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('wallet', '0003_auto_20191018_0645'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='walletactivity',
            name='account_after_changes',
        ),
        migrations.RemoveField(
            model_name='walletactivity',
            name='account_before_changes',
        ),
    ]

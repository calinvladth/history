# Generated by Django 2.2.6 on 2019-10-28 01:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('my_account', '0003_auto_20191028_0114'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profilesettings',
            name='currency',
            field=models.ForeignKey(limit_choices_to={'id_admin': True}, on_delete=django.db.models.deletion.CASCADE, to='my_account.Currency'),
        ),
    ]
# Generated by Django 3.1.2 on 2020-12-23 06:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('reg_jounals', '0005_auto_20201223_1701'),
    ]

    operations = [
        migrations.AlterField(
            model_name='employmenthistory',
            name='eh_dep',
            field=models.ForeignKey(default='79', on_delete=django.db.models.deletion.CASCADE, to='reg_jounals.departments', verbose_name='Подразделение '),
        ),
    ]
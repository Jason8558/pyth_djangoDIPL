# Generated by Django 3.1.2 on 2020-12-23 03:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reg_jounals', '0002_laborcontract'),
    ]

    operations = [
        migrations.AddField(
            model_name='laborcontract',
            name='lc_pos',
            field=models.CharField(db_index=True, default=' ', help_text='Введите должность', max_length=256, verbose_name='Должность'),
        ),
    ]

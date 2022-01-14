# Generated by Django 3.1.2 on 2020-12-23 21:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reg_jounals', '0006_auto_20201223_1857'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='employmenthistory',
            name='eh_dateOfReturn',
        ),
        migrations.AddField(
            model_name='employmenthistory',
            name='eh_dateOfResign',
            field=models.DateField(blank=True, db_index=True, help_text='Введите дату увольнения', null=True, verbose_name='Дата увольнения'),
        ),
    ]

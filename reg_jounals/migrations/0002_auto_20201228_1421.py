# Generated by Django 3.1.2 on 2020-12-28 02:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('reg_jounals', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Employers',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('e_name', models.CharField(db_index=True, help_text='Введите ФИО', max_length=256, verbose_name='ФИО')),
                ('e_razr', models.CharField(db_index=True, help_text='Введите разряд', max_length=2, verbose_name='Разряд ')),
                ('e_lpay', models.CharField(db_index=True, help_text='Введите ступень оплаты', max_length=2, verbose_name='Ступень оплаты ')),
                ('e_dep', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='reg_jounals.departments', verbose_name='Подразделение ')),
            ],
            options={
                'verbose_name': 'Сотрудник',
                'verbose_name_plural': 'Справочник сотрудников',
                'ordering': ['e_name'],
            },
        ),
        migrations.CreateModel(
            name='Positions',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('p_name', models.CharField(db_index=True, help_text='Введите наименование', max_length=256, verbose_name='Наименование ')),
            ],
            options={
                'verbose_name': 'Должность',
                'verbose_name_plural': 'Справочник должностей',
                'ordering': ['p_name'],
            },
        ),
        migrations.CreateModel(
            name='Tabel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('t_year', models.CharField(db_index=True, help_text='Введите год', max_length=4, verbose_name='Год')),
                ('t_month', models.CharField(db_index=True, help_text='Введите месяц', max_length=4, verbose_name='Месяц')),
                ('t_TypeTime1', models.CharField(db_index=True, max_length=4, verbose_name='')),
                ('t_TypeTime2', models.CharField(db_index=True, max_length=4, verbose_name='')),
                ('t_TypeTime3', models.CharField(db_index=True, max_length=4, verbose_name='')),
                ('t_TypeTime4', models.CharField(db_index=True, max_length=4, verbose_name='')),
                ('t_TypeTime5', models.CharField(db_index=True, max_length=4, verbose_name='')),
                ('t_TypeTime6', models.CharField(db_index=True, max_length=4, verbose_name='')),
                ('t_TypeTime7', models.CharField(db_index=True, max_length=4, verbose_name='')),
                ('t_TypeTime8', models.CharField(db_index=True, max_length=4, verbose_name='')),
                ('t_TypeTime9', models.CharField(db_index=True, max_length=4, verbose_name='')),
                ('t_TypeTime10', models.CharField(db_index=True, max_length=4, verbose_name='')),
                ('t_TypeTime11', models.CharField(db_index=True, max_length=4, verbose_name='')),
                ('t_TypeTime12', models.CharField(db_index=True, max_length=4, verbose_name='')),
                ('t_TypeTime13', models.CharField(db_index=True, max_length=4, verbose_name='')),
                ('t_TypeTime14', models.CharField(db_index=True, max_length=4, verbose_name='')),
                ('t_TypeTime15', models.CharField(db_index=True, max_length=4, verbose_name='')),
                ('t_TypeTime16', models.CharField(db_index=True, max_length=4, verbose_name='')),
                ('t_TypeTime17', models.CharField(db_index=True, max_length=4, verbose_name='')),
                ('t_TypeTime18', models.CharField(db_index=True, max_length=4, verbose_name='')),
                ('t_TypeTime19', models.CharField(db_index=True, max_length=4, verbose_name='')),
                ('t_TypeTime20', models.CharField(db_index=True, max_length=4, verbose_name='')),
                ('t_TypeTime21', models.CharField(db_index=True, max_length=4, verbose_name='')),
                ('t_TypeTime22', models.CharField(db_index=True, max_length=4, verbose_name='')),
                ('t_TypeTime23', models.CharField(db_index=True, max_length=4, verbose_name='')),
                ('t_TypeTime24', models.CharField(db_index=True, max_length=4, verbose_name='')),
                ('t_TypeTime25', models.CharField(db_index=True, max_length=4, verbose_name='')),
                ('t_TypeTime26', models.CharField(db_index=True, max_length=4, verbose_name='')),
                ('t_TypeTime27', models.CharField(db_index=True, max_length=4, verbose_name='')),
                ('t_TypeTime28', models.CharField(db_index=True, max_length=4, verbose_name='')),
                ('t_TypeTime29', models.CharField(db_index=True, max_length=4, verbose_name='')),
                ('t_TypeTime30', models.CharField(db_index=True, max_length=4, verbose_name='')),
                ('t_TypeTime31', models.CharField(db_index=True, max_length=4, verbose_name='')),
                ('t_time1', models.IntegerField()),
                ('t_time2', models.IntegerField()),
                ('t_time3', models.IntegerField()),
                ('t_time4', models.IntegerField()),
                ('t_time5', models.IntegerField()),
                ('t_time6', models.IntegerField()),
                ('t_time7', models.IntegerField()),
                ('t_time8', models.IntegerField()),
                ('t_time9', models.IntegerField()),
                ('t_time10', models.IntegerField()),
                ('t_time11', models.IntegerField()),
                ('t_time12', models.IntegerField()),
                ('t_time13', models.IntegerField()),
                ('t_time14', models.IntegerField()),
                ('t_time15', models.IntegerField()),
                ('t_time16', models.IntegerField()),
                ('t_time17', models.IntegerField()),
                ('t_time18', models.IntegerField()),
                ('t_time19', models.IntegerField()),
                ('t_time20', models.IntegerField()),
                ('t_time21', models.IntegerField()),
                ('t_time22', models.IntegerField()),
                ('t_time23', models.IntegerField()),
                ('t_time24', models.IntegerField()),
                ('t_time25', models.IntegerField()),
                ('t_time26', models.IntegerField()),
                ('t_time27', models.IntegerField()),
                ('t_time28', models.IntegerField()),
                ('t_time29', models.IntegerField()),
                ('t_time30', models.IntegerField()),
                ('t_time31', models.IntegerField()),
                ('t_employer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='reg_jounals.employers', verbose_name='Сотрудник ')),
            ],
            options={
                'verbose_name': 'Табель',
                'verbose_name_plural': 'Табели',
                'ordering': ['t_year'],
            },
        ),
        migrations.AddField(
            model_name='employers',
            name='e_pos',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='reg_jounals.positions', verbose_name='Должность '),
        ),
    ]

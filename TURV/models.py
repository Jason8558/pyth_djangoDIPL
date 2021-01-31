from django.db import models
from django.contrib.auth.models import User

class Employers(models.Model):
    fullname = models.CharField(verbose_name = 'ФИО сотрудника', db_index=True, max_length=256)
    position = models.ForeignKey('Position', verbose_name='Должность', db_index=True, on_delete=models.CASCADE)
    department = models.ForeignKey('Department', verbose_name='Подразделение', db_index=True, on_delete=models.CASCADE)
    level = models.CharField(verbose_name='Разряд', max_length=2)
    positionOfPayment = models.CharField(verbose_name='Ступень оплаты', max_length=2)

    class Meta:
        ordering = ['fullname']
        verbose_name = 'Сотрудник'
        verbose_name_plural = 'Сотрудники'

    def __str__(self):
        return self.fullname

class Department(models.Model):
    name = models.CharField(verbose_name = 'Название подразделения', db_index=True, max_length=256)
    user = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name = 'Табельщик')

    class Meta:
        ordering = ['name']
        verbose_name = 'Подразделение'
        verbose_name_plural = 'Подразделения'

    def __str__(self):
        return self.name

class Position(models.Model):
    name = models.CharField(verbose_name = 'Название должности', db_index=True, max_length=256)

    class Meta:
        ordering = ['name']
        verbose_name = 'Должность'
        verbose_name_plural = 'Должности'

    def __str__(self):
        return self.name

class Tabel(models.Model):
    year = models.CharField(verbose_name='Год', db_index=True, max_length=256)
    month = models.CharField(verbose_name='Месяц', db_index=True, max_length=256)
    department = models.ForeignKey('Department', verbose_name='Подразделение', db_index=True, on_delete=models.CASCADE)
    res_officer = models.CharField(blank=True, editable=False,  max_length=256, help_text="Отвественный за составление табеля", verbose_name='Табельщик')
    class Meta:
        ordering = ['-year']
        verbose_name = 'Табель'
        verbose_name_plural = 'Табели'

    def __str__(self):
        return str(self.department) + str(self.month) + str(self.year)

class TabelItem(models.Model):
    bound_tabel = models.CharField(max_length=256, db_index=True, default='None', verbose_name='Связанный табель')
    employer = models.ForeignKey('Employers', verbose_name='Сотрудник', db_index=True, on_delete=models.CASCADE)
    year = models.CharField(verbose_name='Год', db_index=True, max_length=256)
    month = models.CharField(verbose_name='Месяц', db_index=True, max_length=256)
    department = models.ForeignKey('Department', verbose_name='', db_index=True, on_delete=models.CASCADE)
    position = models.ForeignKey('Position', verbose_name='Должность', db_index=True, on_delete=models.CASCADE)
    level = models.CharField(verbose_name='Разряд', max_length=2)
    positionOfPayment = models.CharField(verbose_name='Ступень оплаты', max_length=2)

# Виды времени
    type_time1 = models.CharField(max_length=4, verbose_name='Вид времени1')
    type_time2 = models.CharField(max_length=4, verbose_name='Вид времени2')
    type_time3 = models.CharField(max_length=4, verbose_name='Вид времени3')
    type_time4 = models.CharField(max_length=4, verbose_name='Вид времени4')
    type_time5 = models.CharField(max_length=4, verbose_name='Вид времени5')
    type_time6 = models.CharField(max_length=4, verbose_name='Вид времени6')
    type_time7 = models.CharField(max_length=4, verbose_name='Вид времени7')
    type_time8 = models.CharField(max_length=4, verbose_name='Вид времени8')
    type_time9 = models.CharField(max_length=4, verbose_name='Вид времени9')
    type_time10 = models.CharField(max_length=4, verbose_name='Вид времени10')
    type_time11 = models.CharField(max_length=4, verbose_name='Вид времени11')
    type_time12 = models.CharField(max_length=4, verbose_name='Вид времени12')
    type_time13 = models.CharField(max_length=4, verbose_name='Вид времени13')
    type_time14 = models.CharField(max_length=4, verbose_name='Вид времени14')
    type_time15 = models.CharField(max_length=4, verbose_name='Вид времени15')
    type_time16 = models.CharField(max_length=4, verbose_name='Вид времени16')
    type_time17 = models.CharField(max_length=4, verbose_name='Вид времени17')
    type_time18 = models.CharField(max_length=4, verbose_name='Вид времени18')
    type_time19 = models.CharField(max_length=4, verbose_name='Вид времени19')
    type_time20 = models.CharField(max_length=4, verbose_name='Вид времени20')
    type_time21 = models.CharField(max_length=4, verbose_name='Вид времени21')
    type_time22 = models.CharField(max_length=4, verbose_name='Вид времени22')
    type_time23 = models.CharField(max_length=4, verbose_name='Вид времени23')
    type_time24 = models.CharField(max_length=4, verbose_name='Вид времени24')
    type_time25 = models.CharField(max_length=4, verbose_name='Вид времени25')
    type_time26 = models.CharField(max_length=4, verbose_name='Вид времени26')
    type_time27 = models.CharField(max_length=4, verbose_name='Вид времени27')
    type_time28 = models.CharField(max_length=4, verbose_name='Вид времени28')
    type_time29 = models.CharField(max_length=4, verbose_name='Вид времени29')
    type_time30 = models.CharField(max_length=4, verbose_name='Вид времени30')
    type_time31 = models.CharField(max_length=4, verbose_name='Вид времени31')

# Кол-ва часов
    hours1 = models.CharField(max_length=4, verbose_name='Часы1')
    hours2 = models.CharField(max_length=4, verbose_name='Часы2')
    hours3 = models.CharField(max_length=4, verbose_name='Часы3')
    hours4 = models.CharField(max_length=4, verbose_name='Часы4')
    hours5 = models.CharField(max_length=4, verbose_name='Часы5')
    hours6 = models.CharField(max_length=4, verbose_name='Часы6')
    hours7 = models.CharField(max_length=4, verbose_name='Часы7')
    hours8 = models.CharField(max_length=4, verbose_name='Часы8')
    hours9 = models.CharField(max_length=4, verbose_name='Часы9')
    hours10 = models.CharField(max_length=4, verbose_name='Часы10')
    hours11 = models.CharField(max_length=4, verbose_name='Часы11')
    hours12 = models.CharField(max_length=4, verbose_name='Часы12')
    hours13 = models.CharField(max_length=4, verbose_name='Часы13')
    hours14 = models.CharField(max_length=4, verbose_name='Часы14')
    hours15 = models.CharField(max_length=4, verbose_name='Часы15')
    hours16 = models.CharField(max_length=4, verbose_name='Часы16')
    hours17 = models.CharField(max_length=4, verbose_name='Часы17')
    hours18 = models.CharField(max_length=4, verbose_name='Часы18')
    hours19 = models.CharField(max_length=4, verbose_name='Часы19')
    hours20 = models.CharField(max_length=4, verbose_name='Часы20')
    hours21 = models.CharField(max_length=4, verbose_name='Часы21')
    hours22 = models.CharField(max_length=4, verbose_name='Часы22')
    hours23 = models.CharField(max_length=4, verbose_name='Часы23')
    hours24 = models.CharField(max_length=4, verbose_name='Часы24')
    hours25 = models.CharField(max_length=4, verbose_name='Часы25')
    hours26 = models.CharField(max_length=4, verbose_name='Часы26')
    hours27 = models.CharField(max_length=4, verbose_name='Часы27')
    hours28 = models.CharField(max_length=4, verbose_name='Часы28')
    hours29 = models.CharField(max_length=4, verbose_name='Часы29')
    hours30 = models.CharField(max_length=4, verbose_name='Часы30')
    hours31 = models.CharField(max_length=4, verbose_name='Часы31')

#Итоги видов времени
    sHours1 = models.IntegerField(verbose_name='Явки (Я)', help_text='Явки')
    sHours2 = models.IntegerField(verbose_name='Ночные (Н)')
    sHours3 = models.IntegerField(verbose_name='Работа в выходные и празд. (РВ)')
    sHours4 = models.IntegerField(verbose_name='Сверхурочные (С)')
    sHours5 = models.IntegerField(verbose_name='Вахтовый метод (ВМ)')
    sHours6 = models.IntegerField(verbose_name='Служебная командировка (К)')
    sHours7 = models.IntegerField(verbose_name='Повыш. квалификации с отрывом от работы (ПК)')
    sHours8 = models.IntegerField(verbose_name='Повыш. квалификации с отрывом от рб. в другой мес-ти (ПМ)')
    sHours9 = models.IntegerField(verbose_name='Основной оплачиваемый отпуск (ОТ)')
    sHours10 = models.IntegerField(verbose_name='Дополнительный оплачиваемый отпуск (ОД)')
    sHours11 = models.IntegerField(verbose_name='Учебный отпуск (У)')
    sHours12 = models.IntegerField(verbose_name='Сокращенная продолжительность для обучающихся без отрыва (УВ)')
    sHours13 = models.IntegerField(verbose_name='Неоплачиваемый учебный отпуск (УД)')
    sHours14 = models.IntegerField(verbose_name='Отпуск по беременности и родам (Р)')
    sHours15 = models.IntegerField(verbose_name='Отпуск по уходу за ребенком до 3-х лет (ОЖ)')
    sHours16 = models.IntegerField(verbose_name='Отпуск без сохр. зп по разрешению работодателя (ДО)')
    sHours17 = models.IntegerField(verbose_name='Временная нетрудоспособность (Б)')
    sHours18 = models.IntegerField(verbose_name='Неоплачиваемый больничный (Т)')
    sHours19 = models.IntegerField(verbose_name='Сокращенная продолжительность рабочего времени (ЛЧ)')
    sHours20 = models.IntegerField(verbose_name='Время вынужденного прогула в случае признания увольнения незаконным (ПВ)')
    sHours21 = models.IntegerField(verbose_name='Невыходы на время исполнения гос. ил общ. обязанностей (Г)')
    sHours22 = models.IntegerField(verbose_name='Прогулы (ПР)')
    sHours23 = models.IntegerField(verbose_name='Работа в режиме неполного рабочего времени (НС)')
    sHours24 = models.IntegerField(verbose_name='Выходные (В)')
    sHours25 = models.IntegerField(verbose_name='Дополнительные выходные оплачиваемые (ОВ)')
    sHours26 = models.IntegerField(verbose_name='Дополнительные выходные неоплачиваемые (НВ)')
    sHours27 = models.IntegerField(verbose_name='Забастовка (ЗБ)')
    sHours28 = models.IntegerField(verbose_name='Неявки по невыясненным причинам (НН)')
    sHours29 = models.IntegerField(verbose_name='Время простоя по вине работодателя (РП)')
    sHours30 = models.IntegerField(verbose_name='Время простоя по причинам, не зависищим от работника и работодателя (НП)')
    sHours31 = models.IntegerField(verbose_name='Время простоя по вине работника (ВП)')
    sHours32 = models.IntegerField(verbose_name='Оплачиваемое отстранение от работы (НО)')
    sHours33 = models.IntegerField(verbose_name='Неоплачиваемое отстранение от работы (НБ)')
    sHours34 = models.IntegerField(verbose_name='Остановка работы про причине невыплаты ЗП (НЗ)')
    w_days = models.IntegerField(verbose_name='Дней отработано', default=0)
    w_hours = models.IntegerField(verbose_name='Часов отработано', default=0)
    v_days = models.IntegerField(verbose_name='Дней неявок', default=0)
    v_hours = models.IntegerField(verbose_name='Часов неявок', default=0)

    class Meta:
        ordering = ['-year']
        verbose_name = 'Сотрудник в табеле'
        verbose_name_plural = 'Сотрудники в табелях'

    def __str__(self):
        doc_fullname = str(self.employer) + ' ' + str(self.month) + '  ' + str(self.year)
        return doc_fullname

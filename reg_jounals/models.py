from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class OutBoundDocument(models.Model):


    doc_type = models.CharField(default='Письмо', max_length=100, help_text="Введите вид документа (письмо, справка, и.т.д)", verbose_name='Вид', db_index=True)
    doc_number = models.CharField(default='',max_length=10, help_text="Введите номер документа", verbose_name='Номер документа', db_index=True)
    doc_date = models.DateField(help_text="Введите дату документа", verbose_name='Дата документа', db_index=True)
    doc_dest =  models.CharField(max_length=256, help_text="Введите адресата", verbose_name='Получатель (адресат)')
    doc_additionalData = models.CharField(default='none', max_length=256, help_text="Введите содержание документа", verbose_name='Содержание документа')
    doc_res_officer = models.CharField(blank=True, editable=False,  max_length=256, help_text="Сотрудник, который внес документ в систему ", verbose_name='Ответственный сотрудник')

    class Meta:
        ordering = ["doc_number"]
        verbose_name = 'Исходящий документ'
        verbose_name_plural = 'Исходящие документы'

    def __str__(self):
        doc_fullname = self.doc_type + ' №' + str(self.doc_number) + ' от ' + str(self.doc_date)
        return doc_fullname

class LetterOfResignation(models.Model):

    lor_date = models.DateField(help_text="Введите дату поступления заявления", verbose_name="Дата поступления заявления", db_index=True)
    lor_number = models.CharField(default='',max_length=10, help_text="Введите номер документа", verbose_name='Номер документа', db_index=True)
    lor_employee = models.CharField(max_length=256, help_text="Введите ФИО увольняемого сотрудника", verbose_name="Увольняемый сотрудник")
    lor_position = models.CharField(max_length=256, help_text="Введите должность увольняемого сотрудника", verbose_name="Должность")
    lor_departament = models.ForeignKey('Departments', on_delete=models.CASCADE, verbose_name="Подразделение ", default="1")
    lor_dateOfRes = models.DateField(help_text="Введите дату увольнения", verbose_name="Дата увольнения", db_index=True)
    lor_additionalData = models.CharField(blank=True, default="примечание", max_length=256, help_text="Введите примечание", verbose_name="Примечание")
    lor_res_officer = models.CharField(blank=True, editable=False,  max_length=256, help_text="Сотрудник, который внес документ в систему ", verbose_name='Ответственный сотрудник')

    class Meta:
        ordering = ["lor_number"]
        verbose_name = 'Заявление на увольнение'
        verbose_name_plural = 'Заявления на увольнение'

class LetterOfInvite(models.Model):
    loi_date = models.DateField(help_text="Введите дату поступления заявления", verbose_name="Дата поступления заявления", db_index=True)
    loi_number = models.CharField(default='',max_length=10, help_text="Введите номер документа", verbose_name='Номер документа', db_index=True)
    loi_employee = models.CharField(max_length=256, help_text="Введите ФИО принимаемого сотрудника", verbose_name="Принимаемый сотрудник")
    loi_position = models.CharField(max_length=256, help_text="Введите должность принимаемого сотрудника", verbose_name="Должность")
    loi_department = models.ForeignKey('Departments', on_delete=models.CASCADE, verbose_name="Подразделение ", default="1")
    loi_dateOfInv = models.DateField(blank=True, null=True, help_text="Введите дату начала работы", verbose_name="Дата начала работы", db_index=True)
    loi_additionalData = models.CharField(blank=True, default="примечание", max_length=256, help_text="Введите примечание", verbose_name="Примечание")
    loi_res_officer = models.CharField(blank=True, editable=False,  max_length=256, help_text="Сотрудник, который внес документ в систему ", verbose_name='Ответственный сотрудник')

    class Meta:
        ordering = ["loi_number"]
        verbose_name = 'Заявление на прием'
        verbose_name_plural = 'Заявления на прием'

class OrdersOnOtherMatters(models.Model):
    oom_number = models.CharField(max_length=5, help_text="Введите номер приказа", verbose_name="Номер приказа", db_index=True)
    oom_date = models.DateField(help_text="Введите дату приказа", verbose_name="Дата приказа", db_index=True)
    oom_content = models.CharField(max_length=256, help_text="Введите содержание приказа", verbose_name='Содержание')
    oom_res_officer = models.CharField(blank=True, editable=False,  max_length=256, help_text="Сотрудник, который внес документ в систему ", verbose_name='Ответственный сотрудник')

    class Meta:
        ordering = ["id"]
        verbose_name = 'Приказ по другим вопросам'
        verbose_name_plural = 'Приказы по другим вопросам'

class OrdersOnVacation(models.Model):
    oov_number = models.CharField(blank = True, max_length=10, help_text="Введите номер приказа", verbose_name="Номер приказа", db_index=True)
    oov_date = models.DateField(help_text="Введите дату приказа", verbose_name="Дата приказа", db_index=True)
    oov_empList = models.TextField(help_text="Введите сотрудников в приказ", verbose_name="Список сотрудников в приказе")
    oov_res_officer = models.CharField(blank=True, editable=False,  max_length=256, help_text="Сотрудник, который внес документ в систему ", verbose_name='Ответственный сотрудник')

    class Meta:
        ordering = ["id"]
        verbose_name = 'Приказ на отпуск'
        verbose_name_plural = 'Приказы на отпуск'

class OrdersOfBTrip(models.Model):
    bt_number = models.CharField(max_length=5, help_text="Введите номер приказа", verbose_name="Номер приказа", db_index=True)
    bt_date = models.DateField(help_text="Введите дату приказа", verbose_name="Дата приказа", db_index=True)
    bt_dep = models.ForeignKey('Departments', on_delete=models.CASCADE, verbose_name="Подразделение ", default="1")
    bt_place = models.CharField(max_length=256, help_text="Введите место командировки", verbose_name="Место командировки", db_index=True)
    bt_emloyer = models.CharField(max_length=256, help_text="Введите ФИО сотрудника", verbose_name="ФИО сотрудника", db_index=True)
    bt_dur_from = models.DateField(default='2000-01-01',help_text="Введите дату начала командировки", verbose_name="Дата начала командировки", db_index=True)
    bt_dur_to = models.DateField(default='2000-01-01',help_text="Введите дату завершения командировки", verbose_name="Дата завершения командировки", db_index=True)
    bt_res_officer = models.CharField(blank=True, editable=False,  max_length=256, help_text="Сотрудник, который внес документ в систему ", verbose_name='Ответственный сотрудник')

    class Meta:
        ordering = ["bt_number"]
        verbose_name = 'Приказ о командировке'
        verbose_name_plural = 'Приказы о командировках'

    def __str__(self):
        doc_fullname = "Приказ о командировке" + ' №' + str(self.bt_number) + ' от ' + str(self.bt_date)
        return doc_fullname

class OrdersOnPersonnel(models.Model):
    op_number = models.CharField(max_length=5, help_text="Введите номер приказа", verbose_name="Номер приказа", db_index=True)
    op_date = models.DateField(help_text="Введите дату приказа", verbose_name="Дата приказа", db_index=True)
    op_dep = models.ForeignKey('Departments', on_delete=models.CASCADE,  verbose_name="Подразделение ", default="1")
    op_emloyer = models.CharField(max_length=256, help_text="Введите ФИО сотрудника", verbose_name="ФИО сотрудника", db_index=True)
    op_content = models.TextField(help_text="Введите содержание", verbose_name="Содержание приказа")
    op_res_officer = models.CharField(blank=True, editable=False,  max_length=256, help_text="Сотрудник, который внес документ в систему ", verbose_name='Ответственный сотрудник')

    class Meta:
        ordering = ["op_number"]
        verbose_name = 'Приказ по личному составу'
        verbose_name_plural = 'Приказы по личному составу'

    def __str__(self):
        doc_fullname = "Приказ по личному составу" + ' №' + str(self.op_number) + ' от ' + str(self.op_date)
        return doc_fullname

class LaborContract(models.Model):
    lc_number = models.CharField(max_length=5, help_text="Введите номер договора", verbose_name="Номер договора", db_index=True)
    lc_date = models.DateField(help_text="Введите дату договора", verbose_name="Дата договора", db_index=True)
    lc_emloyer = models.CharField(max_length=256, help_text="Введите ФИО принимаемого сотрудника", verbose_name="ФИО принимаемого сотрудника", db_index=True)
    lc_pos = models.CharField(max_length=256, help_text="Введите должность", verbose_name="Должность", db_index=True, default=' ')
    lc_dep = models.ForeignKey('Departments', related_name="departments", on_delete=models.CASCADE, verbose_name="Подразделение ", default="1")
    lc_dateOfInv = models.DateField(help_text="Введите дату приема на работу", verbose_name="Дата приема на работу", db_index=True)
    lc_workCond = models.TextField(help_text="Введите условие работы", verbose_name="Условие работы", db_index=True)
    lc_res_officer = models.CharField(blank=True, editable=False,  max_length=256, help_text="Сотрудник, который внес документ в систему ", verbose_name='Ответственный сотрудник')

    class Meta:
        ordering = ["lc_number"]
        verbose_name = 'Трудовой договор'
        verbose_name_plural = 'Трудовые договоры'

    def __str__(self):
        doc_fullname = "Трудовой договор" + ' №' + str(self.lc_number) + ' от ' + str(self.lc_date)
        return doc_fullname

class EmploymentHistory(models.Model):
    eh_number = models.CharField(max_length=256, help_text="Введите номер трудовой книжки", verbose_name="Номер\серия", db_index=True)
    eh_dateOfInv = models.DateField(help_text="Введите дату приема на работу", verbose_name="Дата приема на работу", db_index=True)
    eh_employer = models.CharField(max_length=256, help_text="Введите ФИО принимаемого сотрудника", verbose_name="ФИО принимаемого сотрудника", db_index=True)
    eh_pos = models.CharField(max_length=256, help_text="Введите должность", verbose_name="Должность", db_index=True)
    eh_dep = models.ForeignKey('Departments', on_delete=models.CASCADE, verbose_name="Подразделение ", default="79")
    eh_OrderInv = models.CharField(max_length=256, help_text="Введите номер приказа о приеме", verbose_name="Приказ о приеме на работу:", db_index=True)
    eh_OrderResign = models.CharField(null=True, blank=True, max_length=256, help_text="Введите номер приказа об увольнении", verbose_name="Приказ об увольнении:", db_index=True)
    eh_dateOfResign = models.DateField(null=True, blank=True, help_text="Введите дату увольнения", verbose_name="Дата увольнения", db_index=True)
    eh_res_officer = models.CharField(blank=True, editable=False,  max_length=256, help_text="Сотрудник, который внес документ в систему ", verbose_name='Ответственный сотрудник')

class Departments(models.Model):
    dep_name = models.CharField(max_length=256,  help_text="Введите название подразделения", verbose_name="Название подразделения", db_index=True)

    class Meta:
        ordering = ["dep_name"]
        verbose_name = 'Подразделение'
        verbose_name_plural = 'Подразделения'
    def __str__(self):
        doc_fullname = self.dep_name
        return doc_fullname
# ТАБЕЛЬ ------------------------------------------------------------
class Positions (models.Model):
    p_name = models.CharField(max_length=256, help_text="Введите наименование", verbose_name="Наименование ", db_index=True)

    class Meta:
        ordering = ["p_name"]
        verbose_name = 'Должность'
        verbose_name_plural = 'Справочник должностей'

    def __str__(self):
        fullname = self.p_name
        return fullname

class Employers (models.Model):
    e_name = models.CharField(max_length=256, help_text="Введите ФИО", verbose_name="ФИО", db_index=True)
    e_dep = models.ForeignKey('Departments', on_delete=models.CASCADE, verbose_name="Подразделение ")
    e_pos = models.ForeignKey('Positions', on_delete=models.CASCADE, verbose_name="Должность ")
    e_razr = models.CharField(max_length=2, help_text="Введите разряд", verbose_name="Разряд ", db_index=True)
    e_lpay = models.CharField(max_length=2, help_text="Введите ступень оплаты", verbose_name="Ступень оплаты ", db_index=True)

    class Meta:
        ordering = ["e_name"]
        verbose_name = 'Сотрудник'
        verbose_name_plural = 'Справочник сотрудников'

    def __str__(self):
        fullname = self.e_name
        return fullname

class Tabel(models.Model):
    t_year = models.CharField(max_length=4, help_text="Введите год", verbose_name="Год", db_index=True)
    t_month = models.CharField(max_length=4, help_text="Введите месяц", verbose_name="Месяц", db_index=True)
    t_employer =  models.ForeignKey('Employers', on_delete=models.CASCADE, verbose_name="Сотрудник ")
    t_dep = models.ForeignKey('Departments', on_delete=models.CASCADE, verbose_name="Подразделение ", default="1")
    t_TypeTime1 = models.CharField(max_length=4, help_text="", verbose_name="", db_index=True)
    t_TypeTime2 = models.CharField(max_length=4, help_text="", verbose_name="", db_index=True)
    t_TypeTime3 = models.CharField(max_length=4, help_text="", verbose_name="", db_index=True)
    t_TypeTime4 = models.CharField(max_length=4, help_text="", verbose_name="", db_index=True)
    t_TypeTime5 = models.CharField(max_length=4, help_text="", verbose_name="", db_index=True)
    t_TypeTime6 = models.CharField(max_length=4, help_text="", verbose_name="", db_index=True)
    t_TypeTime7 = models.CharField(max_length=4, help_text="", verbose_name="", db_index=True)
    t_TypeTime8 = models.CharField(max_length=4, help_text="", verbose_name="", db_index=True)
    t_TypeTime9 = models.CharField(max_length=4, help_text="", verbose_name="", db_index=True)
    t_TypeTime10 = models.CharField(max_length=4, help_text="", verbose_name="", db_index=True)
    t_TypeTime11 = models.CharField(max_length=4, help_text="", verbose_name="", db_index=True)
    t_TypeTime12 = models.CharField(max_length=4, help_text="", verbose_name="", db_index=True)
    t_TypeTime13 = models.CharField(max_length=4, help_text="", verbose_name="", db_index=True)
    t_TypeTime14 = models.CharField(max_length=4, help_text="", verbose_name="", db_index=True)
    t_TypeTime15 = models.CharField(max_length=4, help_text="", verbose_name="", db_index=True)
    t_TypeTime16 = models.CharField(max_length=4, help_text="", verbose_name="", db_index=True)
    t_TypeTime17 = models.CharField(max_length=4, help_text="", verbose_name="", db_index=True)
    t_TypeTime18 = models.CharField(max_length=4, help_text="", verbose_name="", db_index=True)
    t_TypeTime19 = models.CharField(max_length=4, help_text="", verbose_name="", db_index=True)
    t_TypeTime20 = models.CharField(max_length=4, help_text="", verbose_name="", db_index=True)
    t_TypeTime21 = models.CharField(max_length=4, help_text="", verbose_name="", db_index=True)
    t_TypeTime22 = models.CharField(max_length=4, help_text="", verbose_name="", db_index=True)
    t_TypeTime23 = models.CharField(max_length=4, help_text="", verbose_name="", db_index=True)
    t_TypeTime24 = models.CharField(max_length=4, help_text="", verbose_name="", db_index=True)
    t_TypeTime25 = models.CharField(max_length=4, help_text="", verbose_name="", db_index=True)
    t_TypeTime26 = models.CharField(max_length=4, help_text="", verbose_name="", db_index=True)
    t_TypeTime27 = models.CharField(max_length=4, help_text="", verbose_name="", db_index=True)
    t_TypeTime28 = models.CharField(max_length=4, help_text="", verbose_name="", db_index=True)
    t_TypeTime29 = models.CharField(max_length=4, help_text="", verbose_name="", db_index=True)
    t_TypeTime30 = models.CharField(max_length=4, help_text="", verbose_name="", db_index=True)
    t_TypeTime31 = models.CharField(max_length=4, help_text="", verbose_name="", db_index=True)
    t_time1 = models.IntegerField();
    t_time2 = models.IntegerField();
    t_time3 = models.IntegerField();
    t_time4 = models.IntegerField();
    t_time5 = models.IntegerField();
    t_time6 = models.IntegerField();
    t_time7 = models.IntegerField();
    t_time8 = models.IntegerField();
    t_time9 = models.IntegerField();
    t_time10 = models.IntegerField();
    t_time11 = models.IntegerField();
    t_time12 = models.IntegerField();
    t_time13 = models.IntegerField();
    t_time14 = models.IntegerField();
    t_time15 = models.IntegerField();
    t_time16 = models.IntegerField();
    t_time17 = models.IntegerField();
    t_time18 = models.IntegerField();
    t_time19 = models.IntegerField();
    t_time20 = models.IntegerField();
    t_time21 = models.IntegerField();
    t_time22 = models.IntegerField();
    t_time23 = models.IntegerField();
    t_time24 = models.IntegerField();
    t_time25 = models.IntegerField();
    t_time26 = models.IntegerField();
    t_time27 = models.IntegerField();
    t_time28 = models.IntegerField();
    t_time29 = models.IntegerField();
    t_time30 = models.IntegerField();
    t_time31 = models.IntegerField();
    t_workdays = models.IntegerField(verbose_name='Кол-во явок (часы)', default=0);
    t_weekends = models.IntegerField(verbose_name='Кол-во выходных (часы)', default=0);

    class Meta:
        ordering = ["t_year"]
        verbose_name = 'Табель'
        verbose_name_plural = 'Табели'

    def __str__(self):
        fullname = 'Табель за ' + self.t_month + ' ' + self.t_year + ' ' + self.t_dep.dep_name
        return fullname

from django.shortcuts import render
from django.http import HttpResponse
from .models import *
from .forms import *
from django.shortcuts import redirect
from django.core.paginator import Paginator

def StartSettings(request):
    return render(request, 'TURV\start.html')

def tabels(request):
    if request.user.is_authenticated:
        user_ = request.user
        u_group = user_.groups.all()
        print(u_group)
        granted = 0
        for group in u_group:
            if group.name == 'Сотрудник СУП':
                granted = 1
        if (request.user.is_superuser) or (granted == 1):
            tabels = Tabel.objects.all()
        else:
            print(granted)
            deps = Department.objects.all().filter(user=user_.id)
            allow_departments = []
            for dep in deps:
                allow_departments.append(dep.id)
                print(dep)
            tabels = Tabel.objects.all().filter(department_id__in=allow_departments)
        p_tabels = Paginator(tabels, 15)
        page_number = request.GET.get('page', 1)
        page = p_tabels.get_page(page_number)
        count = len(tabels)
        return render(request, 'TURV/tabels.html', context={'tabels':page, 'count':count})
    else:
        return render(request, 'reg_jounals/no_auth.html')

def tabel_create(request, id):
    if request.user.is_authenticated:
        if request.method == "GET":
            b_tabel = Tabel.objects.get(id=id)
            tabel_form = Tabel_form(instance=b_tabel)
            items = TabelItem.objects.filter(bound_tabel=id)
            count = len(items)
            t_month = b_tabel.month
            t_year = b_tabel.year
            t_dep = b_tabel.department
            return render(request, 'TURV/create_tabel.html', context={'form':tabel_form, 'items':items, 'month':t_month, 'year':t_year, 'count':count, 'b_tabel':b_tabel})
        else:
            b_tabel = Tabel.objects.get(id=id)
            bound_form = Tabel_form(request.POST, instance=b_tabel)
            if bound_form.is_valid():
                print('valid')
                bound_form.save()
                return redirect('/turv/')
            else:
                print('error!!!')
    else:
        return render(request, 'reg_jounals/no_auth.html')

def new_tabel(request):
    if request.user.is_authenticated:
        user_ = request.user
        u_group = user_.groups.all()
        granted = 0
        for group in u_group:
            if group.name == 'Сотрудник СУП':
                granted = 1
        if (request.user.is_superuser) or (granted == 1):
            deps = Department.objects.all()
        else:
            deps = Department.objects.filter(user=user_.id)
        tabel_form = Tabel_form()
        if request.method == "POST":
            tabel_form = Tabel_form(request.POST)
            if tabel_form.is_valid():
                user_ = request.user.first_name
                tabel_form.saveFirst(user_)
                return redirect('..')

        else:

            return render(request, 'TURV/new_tabel.html', context={'form':tabel_form, 'deps':deps})
    else:
        return render(request, 'reg_jounals/no_auth.html')

def tabel_additem(request, id):
    if request.user.is_authenticated:
        b_tabel = Tabel.objects.get(id=id)

        year = b_tabel.year
        month = b_tabel.month
        department = b_tabel.department
        allow_employers = Employers.objects.filter(department_id=department)
        names = []
        for emp in allow_employers:
            names.append(emp.fullname)


        tabelItem_form = TabelItem_form()
        if request.method == "POST":
            tabelItem_form = TabelItem_form(request.POST)
            if tabelItem_form.is_valid():
                user_ = request.user.first_name
                tabelItem_form.saveFirst(id)
                loc = '/turv/create/'+str(id)
                return redirect(loc)
    else:
        return render(request, 'reg_jounals/no_auth.html')
    return render(request, 'TURV/new_tabel_item.html', context={'tabel':tabelItem_form, 'year':year, 'month':month, 'emps':allow_employers})

    def tabel_upditem(request, id, item_id):
        if request.user.is_authenticated:
            if request.method == "GET":
                item = TabelItem.objects.get(id=item_id)
                b_tabel = Tabel.objects.get(id=id)
                bound_form = TabelItem_form(instance=item)
                year = b_tabel.year
                month = b_tabel.month
                department = b_tabel.department
                allow_employers = Employers.objects.filter(department_id=department)
                names = []
                for emp in allow_employers:
                    names.append(emp.fullname)
                return render(request, 'TURV/upd_tabel_item.html', context={'tabel':tabelItem_form, 'year':year, 'month':month, 'emps':allow_employers})

            else:
                item = TabelItem.objects.get(id=item_id)
                tabelItem_form = TabelItem_form(request.POST, instance=item)
                if tabelItem_form.is_valid():
                    tabelItem_form.save()
                    loc = '/turv/create/'+str(id)
                    return redirect(loc)
        else:
            return render(request, 'reg_jounals/no_auth.html')

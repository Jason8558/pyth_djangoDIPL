$(document).ready(function(){


dig_monts = $('.field_month')

for (var i = 0; i < dig_monts.length; i++) {

  switch (dig_monts[i].innerText) {
    case '01':
      dig_monts[i].textContent = 'Январь'
    break;

    case '02':
      dig_monts[i].textContent = 'Февраль'
    break;

    case '03':
      dig_monts[i].textContent = 'Март'
    break;

    case '04':
      dig_monts[i].textContent = 'Апрель'
    break;

    case '05':
      dig_monts[i].textContent = 'Май'
    break;

    case '06':
      dig_monts[i].textContent = 'Июнь'
    break;

    case '07':
      dig_monts[i].textContent = 'Июль'
    break;

    case '08':
      dig_monts[i].textContent = 'Август'
    break;

    case '09':
      dig_monts[i].textContent = 'Сентябрь'
    break;

    case '10':
      dig_monts[i].textContent = 'Октябрь'
    break;

    case '11':
      dig_monts[i].textContent = 'Ноябрь'
    break;

    case '12':
      dig_monts[i].textContent = 'Декабрь'
    break;
}

}

//подставить подразделение

    dep = $('#t_dep option:selected').val()

    $("#id_department option").filter(function() {return this.text == dep;}).prop('selected', true);

    var query = String(document.location.href).split('/');



    if (query[4] != 'create') {
    $('#id_month').val($('#t_month option:selected').val())
    }


//подставить сотрудника в табель

    emp_ = $('#t_emps option:selected').val()

    emp_s = emp_.split(',')

    for (var i = 0; i < emp_s.length; i++) {
      console.log(emp_s[i] + ' ' + i)
        }
    $('#fullname').text(emp_s[0])
    $('#position').text('Должность: ' + emp_s[1])
    $('#payment').text('Ступень оплаты: ' + emp_s[3])
    $('#level').text('Разряд: ' + emp_s[2])
    $('#id_employer').css('display','none')
    $("#id_employer option").filter(function() {return this.text.split(',')[0] == emp_s[0];}).prop('selected', true);





  month_  = $('#id_month').text()
  year_ = $('#id_year').text()
  let rMonth = 0

  switch (month_) {
    case '01':
      rMonth = 0
    break;

    case '02':
      rMonth = 1
    break;

    case '03':
      rMonth = 2
    break;

    case '04':
      rMonth = 3
    break;

    case '05':
      rMonth = 4
    break;

    case '06':
      rMonth = 5
    break;

    case '07':
      rMonth = 6
    break;

    case '08':
      rMonth = 7
    break;

    case '09':
      rMonth = 8
    break;

    case '10':
      rMonth = 9
    break;

    case '11':
      rMonth = 10
    break;

    case '12':
      rMonth = 11
    break;
}


days_count = Date.getDaysInMonth(year_, rMonth)

switch (days_count) {
  case 30:
    $('#id_type_time31').css('visibility','hidden')
    $('#id_hours31').css('visibility','hidden')
    $('#day31').css('visibility','hidden')
    break;
  case 29:
    $('#id_type_time30').css('visibility','hidden')
    $('#id_hours30').css('visibility','hidden')
    $('#day30').css('visibility','hidden')

    $('#id_type_time31').css('visibility','hidden')
    $('#id_hours31').css('visibility','hidden')
    $('#day31').css('visibility','hidden')
    break;

  case 28:
    $('#id_type_time29').css('visibility','hidden')
    $('#id_hours29').css('visibility','hidden')
    $('#day29').css('visibility','hidden')

    $('#id_type_time30').css('visibility','hidden')
    $('#id_hours30').css('visibility','hidden')
    $('#day30').css('visibility','hidden')

    $('#id_type_time31').css('visibility','hidden')
    $('#id_hours31').css('visibility','hidden')
    $('#day31').css('visibility','hidden')
    break;
  default:

}

let fDate = " "

for (var i = 1; i < (days_count+1); i++) {
    fDate = (i.toString() + "." + month_.toString() + "." + year_)
    console.log(fDate)
    pDate = Date.parse(fDate)
    console.log(pDate)
    pDate = pDate.toString().split(" ")

    if (pDate[0] == 'Sat' || pDate[0] == 'Sun') {
    switch (pDate[2]) {
        case '01':
        $('#id_type_time1').val("В")
        $('#id_hours1').val("8")
        $('#id_type_time1').css('background','lightgreen')

        $('#id_hours1').css('background','lightgreen')
        break;

        case '02':
        $('#id_type_time2').val("В")
        $('#id_hours2').val("8")
        $('#id_type_time2').css('background','lightgreen')

        $('#id_hours2').css('background','lightgreen')
        break;

        case '03':
        $('#id_type_time3').val("В")
        $('#id_hours3').val("8")
        $('#id_type_time3').css('background','lightgreen')

        $('#id_hours3').css('background','lightgreen')
        break;

        case '04':
        $('#id_type_time4').val("В")
        $('#id_hours1').val("8")
        $('#id_type_time4').css('background','lightgreen')

        $('#id_hours1').css('background','lightgreen')
        break;

        case '05':
        $('#id_type_time5').val("В")
        $('#id_hours5').val("8")
        $('#id_type_time5').css('background','lightgreen')

        $('#id_hours5').css('background','lightgreen')
        break;

        case '06':
        $('#id_type_time6').val("В")
        $('#id_hours6').val("8")
        $('#id_type_time6').css('background','lightgreen')

        $('#id_hours6').css('background','lightgreen')
        break;

        case '07':
        $('#id_type_time7').val("В")
        $('#id_hours7').val("8")
        $('#id_type_time7').css('background','lightgreen')

        $('#id_hours7').css('background','lightgreen')
        break;

        case '08':
        $('#id_type_time8').val("В")
        $('#id_hours8').val("8")
        $('#id_type_time8').css('background','lightgreen')

        $('#id_hours8').css('background','lightgreen')
        break;

        case '09':
        $('#id_type_time9').val("В")
        $('#id_hours9').val("8")
        $('#id_type_time9').css('background','lightgreen')
        $('#id_hours9').css('background','lightgreen')
        break;

        case '10':
        $('#id_type_time10').val("В")
        $('#id_hours10').val("8")
        $('#id_type_time10').css('background','lightgreen')
        $('#id_hours10').css('background','lightgreen')
        break;

        case '10':
        $('#id_type_time10').val("В")
        $('#id_hours10').val("8")
        $('#id_type_time10').css('background','lightgreen')
        $('#id_hours10').css('background','lightgreen')
        break;

        case '11':
        $('#id_type_time11').val("В")
        $('#id_hours11').val("8")
        $('#id_type_time11').css('background','lightgreen')
        $('#id_hours11').css('background','lightgreen')
        break;

        case '12':
        $('#id_type_time12').val("В")
        $('#id_hours12').val("8")
        $('#id_type_time12').css('background','lightgreen')
        $('#id_hours12').css('background','lightgreen')
        break;

        case '13':
        $('#id_type_time13').val("В")
        $('#id_hours13').val("8")
        $('#id_type_time13').css('background','lightgreen')
        $('#id_hours13').css('background','lightgreen')
        break;

        case '14':
        $('#id_type_time14').val("В")
        $('#id_hours14').val("8")
        $('#id_type_time14').css('background','lightgreen')
        $('#id_hours14').css('background','lightgreen')
        break;

        case '15':
        $('#id_type_time15').val("В")
        $('#id_hours15').val("8")
        $('#id_type_time15').css('background','lightgreen')
        $('#id_hours15').css('background','lightgreen')
        break;

        case '16':
        $('#id_type_time16').val("В")
        $('#id_hours16').val("8")
        $('#id_type_time16').css('background','lightgreen')
        $('#id_hours16').css('background','lightgreen')
        break;

        case '17':
        $('#id_type_time17').val("В")
        $('#id_hours17').val("8")
        $('#id_type_time17').css('background','lightgreen')
        $('#id_hours17').css('background','lightgreen')
        break;

        case '18':
        $('#id_type_time18').val("В")
        $('#id_hours18').val("8")
        $('#id_type_time18').css('background','lightgreen')
        $('#id_hours18').css('background','lightgreen')
        break;

        case '19':
        $('#id_type_time19').val("В")
        $('#id_hours19').val("8")
        $('#id_type_time19').css('background','lightgreen')
        $('#id_hours19').css('background','lightgreen')
        break;

        case '20':
        $('#id_type_time20').val("В")
        $('#id_hours20').val("8")
        $('#id_type_time20').css('background','lightgreen')
        $('#id_hours20').css('background','lightgreen')
        break;

        case '21':
        $('#id_type_time21').val("В")
        $('#id_hours21').val("8")
        $('#id_type_time21').css('background','lightgreen')
        $('#id_hours21').css('background','lightgreen')
        break;

        case '22':
        $('#id_type_time22').val("В")
        $('#id_hours22').val("8")
        $('#id_type_time22').css('background','lightgreen')
        $('#id_hours22').css('background','lightgreen')
        break;

        case '23':
        $('#id_type_time23').val("В")
        $('#id_hours23').val("8")
        $('#id_type_time23').css('background','lightgreen')
        $('#id_hours23').css('background','lightgreen')
        break;

        case '24':
        $('#id_type_time24').val("В")
        $('#id_hours24').val("8")
        $('#id_type_time24').css('background','lightgreen')
        $('#id_hours24').css('background','lightgreen')
        break;

        case '25':
        $('#id_type_time25').val("В")
        $('#id_hours25').val("8")
        $('#id_type_time25').css('background','lightgreen')
        $('#id_hours25').css('background','lightgreen')
        break;

        case '26':
        $('#id_type_time26').val("В")
        $('#id_hours26').val("8")
        $('#id_type_time26').css('background','lightgreen')
        $('#id_hours26').css('background','lightgreen')
        break;

        case '27':
        $('#id_type_time27').val("В")
        $('#id_hours27').val("8")
        $('#id_type_time27').css('background','lightgreen')
        $('#id_hours27').css('background','lightgreen')
        break;

        case '28':
        $('#id_type_time28').val("В")
        $('#id_hours28').val("8")
        $('#id_type_time28').css('background','lightgreen')
        $('#id_hours28').css('background','lightgreen')
        break;

        case '29':
        $('#id_type_time29').val("В")
        $('#id_hours29').val("8")
        $('#id_type_time29').css('background','lightgreen')
        $('#id_hours29').css('background','lightgreen')
        break;

        case '30':
        $('#id_type_time30').val("В")
        $('#id_hours30').val("8")
        $('#id_type_time30').css('background','lightgreen')
        $('#id_hours30').css('background','lightgreen')
        break;

        case '31':
        $('#id_type_time31').val("В")
        $('#id_hours31').val("8")
        $('#id_type_time31').css('background','lightgreen')
        $('#id_hours31').css('background','lightgreen')
        break;

        default:

        }


  }

}

});

function SetMonth() {
  $('#id_month').val($('#t_month option:selected').val())

}

function ReSelect() {

  dep = $('#t_dep option:selected').val()

  // $('#id_department').val(dep.text())
  $("#id_department option").filter(function() {return this.text == dep;}).prop('selected', true);


}

function ReSelectEmp() {
emp_ = $('#t_emps option:selected').val()

emp_s = emp_.split(',')

for (var i = 0; i < emp_s.length; i++) {
  console.log(emp_s[i] + ' ' + i)
}
$('#fullname').text(emp_s[0])
$('#position').text('Должность: ' + emp_s[1])
$('#payment').text('Ступень оплаты: ' + emp_s[3])
if (emp_s[2] != " ") {
  $('#level').text('Разряд: ' + emp_s[2])
} else {
$('#level').text('')
}



  $("#id_employer option").filter(function() {return this.text.split(',')[0] == emp_s[0];}).prop('selected', true);
}

function Tabel() {

// Виды аремени и кол-во часов
  tt1 = $('#id_type_time1').val().toUpperCase()
  $('#id_type_time1').val(tt1)
  h1 = $('#id_hours1').val()

  tt2 = $('#id_type_time2').val().toUpperCase()
  $('#id_type_time2').val(tt2)
  h2 = $('#id_hours2').val()

  tt3 = $('#id_type_time3').val().toUpperCase()
  $('#id_type_time3').val(tt3)
  h3 = $('#id_hours3').val()

  tt4 = $('#id_type_time4').val().toUpperCase()
  $('#id_type_time4').val(tt4)
  h4 = $('#id_hours4').val()

  tt5 = $('#id_type_time5').val().toUpperCase()
  $('#id_type_time5').val(tt5)
  h5 = $('#id_hours5').val()

  tt6 = $('#id_type_time6').val().toUpperCase()
  $('#id_type_time6').val(tt6)
  h6 = $('#id_hours6').val()

  tt7 = $('#id_type_time7').val().toUpperCase()
  $('#id_type_time7').val(tt7)
  h7 = $('#id_hours7').val()

  tt8 = $('#id_type_time8').val().toUpperCase()
  $('#id_type_time8').val(tt8)
  h8 = $('#id_hours8').val()

  tt9 = $('#id_type_time9').val().toUpperCase()
  $('#id_type_time9').val(tt9)
  h9 = $('#id_hours9').val()

  tt10 = $('#id_type_time10').val().toUpperCase()
  $('#id_type_time10').val(tt10)
  h10 = $('#id_hours10').val()

  tt11 = $('#id_type_time11').val().toUpperCase()
  $('#id_type_time11').val(tt11)
  h11 = $('#id_hours1').val()

  tt12 = $('#id_type_time12').val().toUpperCase()
  $('#id_type_time12').val(tt12)
  h12 = $('#id_hours12').val()

  tt13 = $('#id_type_time13').val().toUpperCase()
  $('#id_type_time13').val(tt13)
  h13 = $('#id_hours13').val()

  tt14 = $('#id_type_time14').val().toUpperCase()
  $('#id_type_time14').val(tt14)
  h14 = $('#id_hours14').val()

  tt15 = $('#id_type_time15').val().toUpperCase()
  $('#id_type_time15').val(tt15)
  h15 = $('#id_hours15').val()

  tt16 = $('#id_type_time16').val().toUpperCase()
  $('#id_type_time16').val(tt16)
  h16 = $('#id_hours16').val()

  tt17 = $('#id_type_time17').val().toUpperCase()
  $('#id_type_time17').val(tt17)
  h17 = $('#id_hours17').val()

  tt18 = $('#id_type_time18').val().toUpperCase()
  $('#id_type_time18').val(tt18)
  h18 = $('#id_hours18').val()

  tt19 = $('#id_type_time19').val().toUpperCase()
  $('#id_type_time19').val(tt19)
  h19 = $('#id_hours19').val()

  tt20 = $('#id_type_time20').val().toUpperCase()
  $('#id_type_time20').val(tt20)
  h20 = $('#id_hours20').val()

  tt21 = $('#id_type_time21').val().toUpperCase()
  $('#id_type_time21').val(tt21)
  h21 = $('#id_hours21').val()

  tt22 = $('#id_type_time22').val().toUpperCase()
  $('#id_type_time22').val(tt22)
  h22 = $('#id_hours22').val()

  tt23 = $('#id_type_time23').val().toUpperCase()
  $('#id_type_time23').val(tt23)
  h23 = $('#id_hours23').val()

  tt24 = $('#id_type_time24').val().toUpperCase()
  $('#id_type_time24').val(tt24)
  h24 = $('#id_hours24').val()

  tt25 = $('#id_type_time25').val().toUpperCase()
  $('#id_type_time25').val(tt25)
  h25 = $('#id_hours25').val()

  tt26 = $('#id_type_time26').val().toUpperCase()
  $('#id_type_time26').val(tt26)
  h26 = $('#id_hours26').val()

  tt27 = $('#id_type_time27').val().toUpperCase()
  $('#id_type_time27').val(tt27)
  h27 = $('#id_hours27').val()

  tt28 = $('#id_type_time28').val().toUpperCase()
  $('#id_type_time28').val(tt28)
  h28 = $('#id_hours28').val()

  tt29 = $('#id_type_time29').val().toUpperCase()
  $('#id_type_time29').val(tt29)
  h29 = $('#id_hours29').val()

  tt30 = $('#id_type_time30').val().toUpperCase()
  $('#id_type_time30').val(tt30)
  h30 = $('#id_hours30').val()

  tt31 = $('#id_type_time31').val().toUpperCase()
  $('#id_type_time31').val(tt31)
  h31 = $('#id_hours31').val()

//Суммирование часов
  let s1 = 0 //явки
  let s2 = 0 //ночные
  let s3 = 0 //РВ
  let s4 = 0 //сверхурочка
  let s5 = 0 //Вахтовый метод
  let s6 = 0 //командировка
  let s7 = 0 //ПК
  let s8 = 0 //ПМ
  let s9 = 0 //ОТ
  let s10 = 0 //ОД
  let s11 = 0 //Учебный
  let s12 = 0 //УВ
  let s13 = 0 //УД
  let s14 = 0 //Роды
  let s15 = 0 //Декрет
  let s16 = 0 //ДО
  let s17 = 0 //Б
  let s18 = 0 //Неоплачиваемый больничный Т
  let s19 = 0 //ЛЧ
  let s20 = 0 //ПВ
  let s21 = 0 //Г
  let s22 = 0 //Прогулы
  let s23 = 0 //НС
  let s24 = 0 //выходные
  let s25 = 0 //ОВ
  let s26 = 0 //Доп вых неоплач.  НВ
  let s27 = 0 //Забастовка ЗБ
  let s28 = 0 //Неявки невыясненные НН
  let s29 = 0 //Простой по вине ра-ля РП
  let s30 = 0 //Простой не по вине ра-ля НП
  let s31 = 0 //Простой  по вине раб-ка ВП
  let s32 = 0 //НБ
  let s33 = 0 //Опл. отр. от р. НО
  let s34 = 0 //Нет ЗП НЗ

//Суммирование дней
  let work = 0 //дни явок
  let vac = 0 //дни неявок
  let h_work = 0 //часы явок
  let h_vac = 0 //часы неявок


switch (tt1) {
  case 'Я':
    s1 += parseInt(h1, 10)
    work += 1
  break;

  case 'Н':
    s2 += parseInt(h1, 10)
    work += 1
  break;

  case 'РВ':
    s3 += parseInt(h1, 10)
    work += 1
  break;

  case 'ВМ':
    s5 += parseInt(h1, 10)
    work += 1
  break;

  case 'К':
    s6 += parseInt(h1, 10)
    work += 1
  break;

  case 'ПК':
    s7 += parseInt(h1, 10)
    work += 1
  break;

  case 'ПМ':
    s8 += parseInt(h1, 10)
    work += 1
  break;

  case 'ОТ':
    s9 += parseInt(h1, 10)
    vac += 1
  break;

  case 'ОД':
    s10 += parseInt(h1, 10)
    vac += 1
  break;

  case 'У':
    s11 += parseInt(h1, 10)
    vac += 1
  break;

  case 'УВ':
    s12 += parseInt(h1, 10)
    work += 1
  break;

  case 'УД':
    s13 += parseInt(h1, 10)
    vac += 1
  break;

  case 'Р':
    s14 += parseInt(h1, 10)
    vac += 1
  break;

  case 'ОЖ':
    s15 += parseInt(h1, 10)
    vac += 1
  break;

  case 'ДО':
    s16 += parseInt(h1, 10)
    vac += 1
  break;

  case 'Б':
    s17 += parseInt(h1, 10)
    vac += 1
  break;

  case 'Т':
    s18 += parseInt(h1, 10)
    vac += 1
  break;

  case 'ЛЧ':
    s19 += parseInt(h1, 10)
    work += 1
  break;

  case 'ПВ':
    s20 += parseInt(h1, 10)
    vac += 1
  break;

  case 'Г':
    s21 += parseInt(h1, 10)
    vac += 1
  break;

  case 'ПР':
    s22 += parseInt(h1, 10)
    vac += 1
  break;

  case 'НС':
    s23 += parseInt(h1, 10)
    work += 1
  break;

  case 'В':
    s24 += parseInt(h1, 10)
    vac += 1

  break;

  case 'ОВ':
    s25 += parseInt(h1, 10)
    vac += 1
  break;

  case 'НВ':
    s26 += parseInt(h1, 10)
    vac += 1
  break;

  case 'ЗБ':
    s27 += parseInt(h1, 10)
    vac += 1
  break;

  case 'НН':
    s28 += parseInt(h1, 10)
    vac += 1
  break;

  case 'РП':
    s29 += parseInt(h1, 10)
    vac += 1
  break;

  case 'НП':
    s30 += parseInt(h1, 10)
    vac += 1
  break;

  case 'ВП':
    s31 += parseInt(h1, 10)
    vac += 1
  break;

  case 'НО':
    s32 += parseInt(h1, 10)
    vac += 1
  break;

  case 'НБ':
    s33 += parseInt(h1, 10)
    vac += 1
  break;

  case 'НЗ':
    s34 += parseInt(h1, 10)
    vac += 1
  break;

  case 'Я/ЛЧ':
    h1_ = h1.split('/')

    s1 += parseInt(h1_[0], 10)
    s19 += parseInt(h1_[1], 10)
    work += 1
  break;

  case 'Я/Н':
    h1_ = h1.split('/')

    s1 += parseInt(h1_[0], 10)
    s2 += parseInt(h1_[1], 10)
    work += 1
  break;

  case 'РВ/Н':
    h1_ = h1.split('/')

    s3 += parseInt(h1_[0], 10)
    s2 += parseInt(h1_[1], 10)
    work += 1
  break;
}

switch (tt2) {
  case 'Я':
    s1 += parseInt(h2, 10)
    work += 1
  break;

  case 'Н':
    s2 += parseInt(h2, 10)
    work += 1
  break;

  case 'РВ':
    s3 += parseInt(h2, 10)
    work += 1
  break;

  case 'ВМ':
    s5 += parseInt(h2, 10)
    work += 1
  break;

  case 'К':
    s6 += parseInt(h2, 10)
    work += 1
  break;

  case 'ПК':
    s7 += parseInt(h2, 10)
    work += 1
  break;

  case 'ПМ':
    s8 += parseInt(h2, 10)
    work += 1
  break;

  case 'ОТ':
    s9 += parseInt(h2, 10)
    vac += 1
  break;

  case 'ОД':
    s10 += parseInt(h2, 10)
    vac += 1
  break;

  case 'У':
    s11 += parseInt(h2, 10)
    vac += 1
  break;

  case 'УВ':
    s12 += parseInt(h2, 10)
    work += 1
  break;

  case 'УД':
    s13 += parseInt(h2, 10)
    vac += 1
  break;

  case 'Р':
    s14 += parseInt(h2, 10)
    vac += 1
  break;

  case 'ОЖ':
    s15 += parseInt(h2, 10)
    vac += 1
  break;

  case 'ДО':
    s16 += parseInt(h2, 10)
    vac += 1
  break;

  case 'Б':
    s17 += parseInt(h2, 10)
    vac += 1
  break;

  case 'Т':
    s18 += parseInt(h2, 10)
    vac += 1
  break;

  case 'ЛЧ':
    s19 += parseInt(h2, 10)
    vac += 1
  break;

  case 'ПВ':
    s20 += parseInt(h2, 10)
    vac += 1
  break;

  case 'Г':
    s21 += parseInt(h2, 10)
    vac += 1
  break;

  case 'ПР':
    s22 += parseInt(h2, 10)
    vac += 1
  break;

  case 'НС':
    s23 += parseInt(h2, 10)
    work += 1
  break;

  case 'В':
    s24 += parseInt(h2, 10)
    vac += 1

  break;

  case 'ОВ':
    s25 += parseInt(h2, 10)
    vac += 1
  break;

  case 'НВ':
    s26 += parseInt(h2, 10)
    vac += 1
  break;

  case 'ЗБ':
    s27 += parseInt(h2, 10)
    vac += 1
  break;

  case 'НН':
    s28 += parseInt(h2, 10)
    vac += 1
  break;

  case 'РП':
    s29 += parseInt(h2, 10)
    vac += 1
  break;

  case 'НП':
    s30 += parseInt(h2, 10)
    vac += 1
  break;

  case 'ВП':
    s34 += parseInt(h2, 10)
    vac += 1
  break;

  case 'НО':
    s32 += parseInt(h2, 10)
    vac += 1
  break;

  case 'НБ':
    s33 += parseInt(h2, 10)
    vac += 1
  break;

  case 'НЗ':
    s34 += parseInt(h2, 10)
    vac += 1
  break;

  case 'Я/ЛЧ':
    h2_ = h2.split('/')
    s1 += parseInt(h2_[0], 10)
    s19 += parseInt(h2_[1], 10)
    work += 1
  break;

  case 'Я/Н':
    h2_ = h2.split('/')
    s1 += parseInt(h2_[0], 10)
    s2 += parseInt(h2_[1], 10)
    work += 1
  break;

  case 'РВ/Н':
    h2_ = h2.split('/')
    s3 += parseInt(h2_[0], 10)
    s2 += parseInt(h2_[1], 10)
    work += 1
  break;
}

switch (tt3) {
  case 'Я':
    s1 += parseInt(h3, 10)
    work += 1
  break;

  case 'Н':
    s2 += parseInt(h3, 10)
    work += 1
  break;

  case 'РВ':
    s3 += parseInt(h3, 10)
    work += 1
  break;

  case 'ВМ':
    s5 += parseInt(h3, 10)
    work += 1
  break;

  case 'К':
    s6 += parseInt(h3, 10)
    work += 1
  break;

  case 'ПК':
    s7 += parseInt(h3, 10)
    work += 1
  break;

  case 'ПМ':
    s8 += parseInt(h3, 10)
    work += 1
  break;

  case 'ОТ':
    s9 += parseInt(h3, 10)
    vac += 1
  break;

  case 'ОД':
    s10 += parseInt(h3, 10)
    vac += 1
  break;

  case 'У':
    s11 += parseInt(h3, 10)
    vac += 1
  break;

  case 'УВ':
    s12 += parseInt(h3, 10)
    work += 1
  break;

  case 'УД':
    s13 += parseInt(h3, 10)
    vac += 1
  break;

  case 'Р':
    s14 += parseInt(h3, 10)
    vac += 1
  break;

  case 'ОЖ':
    s15 += parseInt(h3, 10)
    vac += 1
  break;

  case 'ДО':
    s16 += parseInt(h3, 10)
    vac += 1
  break;

  case 'Б':
    s17 += parseInt(h3, 10)
    vac += 1
  break;

  case 'Т':
    s18 += parseInt(h3, 10)
    vac += 1
  break;

  case 'ЛЧ':
    s19 += parseInt(h3, 10)
    vac += 1
  break;

  case 'ПВ':
    s20 += parseInt(h3, 10)
    vac += 1
  break;

  case 'Г':
    s21 += parseInt(h3, 10)
    vac += 1
  break;

  case 'ПР':
    s22 += parseInt(h3, 10)
    vac += 1
  break;

  case 'НС':
    s23 += parseInt(h3, 10)
    work += 1
  break;

  case 'В':
    s24 += parseInt(h3, 10)
    vac += 1

  break;

  case 'ОВ':
    s25 += parseInt(h3, 10)
    vac += 1
  break;

  case 'НВ':
    s26 += parseInt(h3, 10)
    vac += 1
  break;

  case 'ЗБ':
    s27 += parseInt(h3, 10)
    vac += 1
  break;

  case 'НН':
    s28 += parseInt(h3, 10)
    vac += 1
  break;

  case 'РП':
    s29 += parseInt(h3, 10)
    vac += 1
  break;

  case 'НП':
    s30 += parseInt(h3, 10)
    vac += 1
  break;

  case 'ВП':
    s34 += parseInt(h3, 10)
    vac += 1
  break;

  case 'НО':
    s32 += parseInt(h3, 10)
    vac += 1
  break;

  case 'НБ':
    s33 += parseInt(h3, 10)
    vac += 1
  break;

  case 'НЗ':
    s34 += parseInt(h3, 10)
    vac += 1
  break;

  case 'Я/ЛЧ':
    h3_ = h3.split('/')

    s1 += parseInt(h3_[0], 10)
    s19 += parseInt(h3_[1], 10)
    work += 1
  break;

  case 'Я/Н':
    h3_ = h3.split('/')

    s1 += parseInt(h3_[0], 10)
    s2 += parseInt(h3_[1], 10)
    work += 1
  break;

  case 'РВ/Н':
    h3_ = h3.split('/')

    s3 += parseInt(h3_[0], 10)
    s2 += parseInt(h3_[1], 10)
    work += 1
  break;
}

switch (tt4) {
  case 'Я':
    s1 += parseInt(h4, 10)
    work += 1
  break;

  case 'Н':
    s2 += parseInt(h4, 10)
    work += 1
  break;

  case 'РВ':
    s3 += parseInt(h4, 10)
    work += 1
  break;

  case 'ВМ':
    s5 += parseInt(h4, 10)
    work += 1
  break;

  case 'К':
    s6 += parseInt(h4, 10)
    work += 1
  break;

  case 'ПК':
    s7 += parseInt(h4, 10)
    work += 1
  break;

  case 'ПМ':
    s8 += parseInt(h4, 10)
    work += 1
  break;

  case 'ОТ':
    s9 += parseInt(h4, 10)
    vac += 1
  break;

  case 'ОД':
    s10 += parseInt(h4, 10)
    vac += 1
  break;

  case 'У':
    s11 += parseInt(h4, 10)
    vac += 1
  break;

  case 'УВ':
    s12 += parseInt(h4, 10)
    work += 1
  break;

  case 'УД':
    s13 += parseInt(h4, 10)
    vac += 1
  break;

  case 'Р':
    s14 += parseInt(h4, 10)
    vac += 1
  break;

  case 'ОЖ':
    s15 += parseInt(h4, 10)
    vac += 1
  break;

  case 'ДО':
    s16 += parseInt(h4, 10)
    vac += 1
  break;

  case 'Б':
    s17 += parseInt(h4, 10)
    vac += 1
  break;

  case 'Т':
    s18 += parseInt(h4, 10)
    vac += 1
  break;

  case 'ЛЧ':
    s19 += parseInt(h4, 10)
    vac += 1
  break;

  case 'ПВ':
    s20 += parseInt(h4, 10)
    vac += 1
  break;

  case 'Г':
    s21 += parseInt(h4, 10)
    vac += 1
  break;

  case 'ПР':
    s22 += parseInt(h4, 10)
    vac += 1
  break;

  case 'НС':
    s23 += parseInt(h4, 10)
    work += 1
  break;

  case 'В':
    s24 += parseInt(h4, 10)
    vac += 1

  break;

  case 'ОВ':
    s25 += parseInt(h4, 10)
    vac += 1
  break;

  case 'НВ':
    s26 += parseInt(h4, 10)
    vac += 1
  break;

  case 'ЗБ':
    s27 += parseInt(h4, 10)
    vac += 1
  break;

  case 'НН':
    s28 += parseInt(h4, 10)
    vac += 1
  break;

  case 'РП':
    s29 += parseInt(h4, 10)
    vac += 1
  break;

  case 'НП':
    s30 += parseInt(h4, 10)
    vac += 1
  break;

  case 'ВП':
    s34 += parseInt(h4, 10)
    vac += 1
  break;

  case 'НО':
    s32 += parseInt(h4, 10)
    vac += 1
  break;

  case 'НБ':
    s33 += parseInt(h4, 10)
    vac += 1
  break;

  case 'НЗ':
    s34 += parseInt(h4, 10)
    vac += 1
  break;

  case 'Я/ЛЧ':
    h4_ = h4.split('/')

    s1 += parseInt(h4_[0], 10)
    s19 += parseInt(h4_[1], 10)
    work += 1
  break;

  case 'Я/Н':
    h4_ = h4.split('/')

    s1 += parseInt(h4_[0], 10)
    s2 += parseInt(h4_[1], 10)
    work += 1
  break;

  case 'РВ/Н':
    h4_ = h4.split('/')

    s3 += parseInt(h4_[0], 10)
    s2 += parseInt(h4_[1], 10)
    work += 1
  break;
}

switch (tt5) {
  case 'Я':
    s1 += parseInt(h5, 10)
    work += 1
  break;

  case 'Н':
    s2 += parseInt(h5, 10)
    work += 1
  break;

  case 'РВ':
    s3 += parseInt(h5, 10)
    work += 1
  break;

  case 'ВМ':
    s5 += parseInt(h5, 10)
    work += 1
  break;

  case 'К':
    s6 += parseInt(h5, 10)
    work += 1
  break;

  case 'ПК':
    s7 += parseInt(h5, 10)
    work += 1
  break;

  case 'ПМ':
    s8 += parseInt(h5, 10)
    work += 1
  break;

  case 'ОТ':
    s9 += parseInt(h5, 10)
    vac += 1

  break;

  case 'ОД':
    s10 += parseInt(h5, 10)
    vac += 1

  break;

  case 'У':
    s11 += parseInt(h5, 10)
    vac += 1

  break;

  case 'УВ':
    s12 += parseInt(h5, 10)
    work += 1
  break;

  case 'УД':
    s13 += parseInt(h5, 10)
    vac += 1

  break;

  case 'Р':
    s14 += parseInt(h5, 10)
    vac += 1

  break;

  case 'ОЖ':
    s15 += parseInt(h5, 10)
    vac += 1

  break;

  case 'ДО':
    s16 += parseInt(h5, 10)
    vac += 1

  break;

  case 'Б':
    s17 += parseInt(h5, 10)
    vac += 1

  break;

  case 'Т':
    s18 += parseInt(h5, 10)
    vac += 1

  break;

  case 'ЛЧ':
    s19 += parseInt(h5, 10)
    vac += 1

  break;

  case 'ПВ':
    s20 += parseInt(h5, 10)
    vac += 1

  break;

  case 'Г':
    s21 += parseInt(h5, 10)
    vac += 1

  break;

  case 'ПР':
    s22 += parseInt(h5, 10)
    vac += 1

  break;

  case 'НС':
    s23 += parseInt(h5, 10)
    work += 1
  break;

  case 'В':
    s24 += parseInt(h5, 10)
    vac += 1

  break;

  case 'ОВ':
    s25 += parseInt(h5, 10)
    vac += 1

  break;

  case 'НВ':
    s26 += parseInt(h5, 10)
    vac += 1

  break;

  case 'ЗБ':
    s27 += parseInt(h5, 10)
    vac += 1

  break;

  case 'НН':
    s28 += parseInt(h5, 10)
    vac += 1

  break;

  case 'РП':
    s29 += parseInt(h5, 10)
    vac += 1

  break;

  case 'НП':
    s30 += parseInt(h5, 10)
    vac += 1

  break;

  case 'ВП':
    s34 += parseInt(h5, 10)
    vac += 1

  break;

  case 'НО':
    s32 += parseInt(h5, 10)
    vac += 1

  break;

  case 'НБ':
    s33 += parseInt(h5, 10)
    vac += 1

  break;

  case 'НЗ':
    s34 += parseInt(h5, 10)
    vac += 1

  break;

  case 'Я/ЛЧ':
    h5_ = h5.split('/')

    s1 += parseInt(h5_[0], 10)
    s19 += parseInt(h5_[1], 10)
    work += 1
  break;

  case 'Я/Н':
    h5_ = h5.split('/')

    s1 += parseInt(h5_[0], 10)
    s2 += parseInt(h5_[1], 10)
    work += 1
  break;

  case 'РВ/Н':
    h5_ = h5.split('/')

    s3 += parseInt(h5_[0], 10)
    s2 += parseInt(h5_[1], 10)
    work += 1
  break;
}

switch (tt6) {
  case 'Я':
    s1 += parseInt(h6, 10)
    work += 1
  break;

  case 'Н':
    s2 += parseInt(h6, 10)
    work += 1
  break;

  case 'РВ':
    s3 += parseInt(h6, 10)
    work += 1
  break;

  case 'ВМ':
    s5 += parseInt(h6, 10)
    work += 1
  break;

  case 'К':
    s6 += parseInt(h6, 10)
    work += 1
  break;

  case 'ПК':
    s7 += parseInt(h6, 10)
    work += 1
  break;

  case 'ПМ':
    s8 += parseInt(h6, 10)
    work += 1
  break;

  case 'ОТ':
    s9 += parseInt(h6, 10)
    vac += 1
  break;

  case 'ОД':
    s10 += parseInt(h6, 10)
    vac += 1
  break;

  case 'У':
    s11 += parseInt(h6, 10)
    vac += 1
  break;

  case 'УВ':
    s12 += parseInt(h6, 10)
    work += 1
  break;

  case 'УД':
    s13 += parseInt(h6, 10)
    vac += 1
  break;

  case 'Р':
    s14 += parseInt(h6, 10)
    vac += 1
  break;

  case 'ОЖ':
    s15 += parseInt(h6, 10)
    vac += 1
  break;

  case 'ДО':
    s16 += parseInt(h6, 10)
    vac += 1
  break;

  case 'Б':
    s17 += parseInt(h6, 10)
    vac += 1
  break;

  case 'Т':
    s18 += parseInt(h6, 10)
    vac += 1
  break;

  case 'ЛЧ':
    s19 += parseInt(h6, 10)
    vac += 1
  break;

  case 'ПВ':
    s20 += parseInt(h6, 10)
    vac += 1
  break;

  case 'Г':
    s21 += parseInt(h6, 10)
    vac += 1
  break;

  case 'ПР':
    s22 += parseInt(h6, 10)
    vac += 1
  break;

  case 'НС':
    s23 += parseInt(h6, 10)
    work += 1
  break;

  case 'В':
    s24 += parseInt(h6, 10)
    vac += 1

  break;

  case 'ОВ':
    s25 += parseInt(h6, 10)
    vac += 1
  break;

  case 'НВ':
    s26 += parseInt(h6, 10)
    vac += 1
  break;

  case 'ЗБ':
    s27 += parseInt(h6, 10)
    vac += 1
  break;

  case 'НН':
    s28 += parseInt(h6, 10)
    vac += 1
  break;

  case 'РП':
    s29 += parseInt(h6, 10)
    vac += 1
  break;

  case 'НП':
    s30 += parseInt(h6, 10)
    vac += 1
  break;

  case 'ВП':
    s34 += parseInt(h6, 10)
    vac += 1
  break;

  case 'НО':
    s32 += parseInt(h6, 10)
    vac += 1
  break;

  case 'НБ':
    s33 += parseInt(h6, 10)
    vac += 1
  break;

  case 'НЗ':
    s34 += parseInt(h6, 10)
    vac += 1
  break;

  case 'Я/ЛЧ':
    h6_ = h6.split('/')

    s1 += parseInt(h6_[0], 10)
    s19 += parseInt(h6_[1], 10)
    work += 1
  break;

  case 'Я/Н':
    h6_ = h6.split('/')

    s1 += parseInt(h6_[0], 10)
    s2 += parseInt(h6_[1], 10)
    work += 1
  break;

  case 'РВ/Н':
    h6_ = h6.split('/')

    s3 += parseInt(h6_[0], 10)
    s2 += parseInt(h6_[1], 10)
    work += 1
  break;
}

switch (tt7) {
  case 'Я':
    s1 += parseInt(h7, 10)
    work += 1
  break;

  case 'Н':
    s2 += parseInt(h7, 10)
    work += 1
  break;

  case 'РВ':
    s3 += parseInt(h7, 10)
    work += 1
  break;

  case 'ВМ':
    s5 += parseInt(h7, 10)
    work += 1
  break;

  case 'К':
    s6 += parseInt(h7, 10)
    work += 1
  break;

  case 'ПК':
    s7 += parseInt(h7, 10)
    work += 1
  break;

  case 'ПМ':
    s8 += parseInt(h7, 10)
    work += 1
  break;

  case 'ОТ':
    s9 += parseInt(h7, 10)
    vac += 1
  break;

  case 'ОД':
    s10 += parseInt(h7, 10)
    vac += 1
  break;

  case 'У':
    s11 += parseInt(h7, 10)
    vac += 1
  break;

  case 'УВ':
    s12 += parseInt(h7, 10)
    work += 1
  break;

  case 'УД':
    s13 += parseInt(h7, 10)
    vac += 1
  break;

  case 'Р':
    s14 += parseInt(h7, 10)
    vac += 1
  break;

  case 'ОЖ':
    s15 += parseInt(h7, 10)
    vac += 1
  break;

  case 'ДО':
    s16 += parseInt(h7, 10)
    vac += 1
  break;

  case 'Б':
    s17 += parseInt(h7, 10)
    vac += 1
  break;

  case 'Т':
    s18 += parseInt(h7, 10)
    vac += 1
  break;

  case 'ЛЧ':
    s19 += parseInt(h7, 10)
    vac += 1
  break;

  case 'ПВ':
    s20 += parseInt(h7, 10)
    vac += 1
  break;

  case 'Г':
    s21 += parseInt(h7, 10)
    vac += 1
  break;

  case 'ПР':
    s22 += parseInt(h7, 10)
    vac += 1
  break;

  case 'НС':
    s23 += parseInt(h7, 10)
    work += 1
  break;

  case 'В':
    s24 += parseInt(h7, 10)
    vac += 1

  break;

  case 'ОВ':
    s25 += parseInt(h7, 10)
    vac += 1
  break;

  case 'НВ':
    s26 += parseInt(h7, 10)
    vac += 1
  break;

  case 'ЗБ':
    s27 += parseInt(h7, 10)
    vac += 1
  break;

  case 'НН':
    s28 += parseInt(h7, 10)
    vac += 1
  break;

  case 'РП':
    s29 += parseInt(h7, 10)
    vac += 1
  break;

  case 'НП':
    s30 += parseInt(h7, 10)
    vac += 1
  break;

  case 'ВП':
    s34 += parseInt(h7, 10)
    vac += 1
  break;

  case 'НО':
    s32 += parseInt(h7, 10)
    vac += 1
  break;

  case 'НБ':
    s33 += parseInt(h7, 10)
    vac += 1
  break;


  case 'НЗ':
    s34 += parseInt(h7, 10)
    vac += 1
  break;

  case 'Я/ЛЧ':
    h7_ = h7.split('/')
    s1 += parseInt(h7_[0], 10)
    s19 += parseInt(h7_[1], 10)
    work += 1
    work += 1
  break;

  case 'Я/Н':
    h7_ = h7.split('/')
    s1 += parseInt(h7_[0], 10)
    s2 += parseInt(h7_[1], 10)
    work += 1
    work += 1
  break;

  case 'РВ/Н':
    h7_ = h7.split('/')
    s3 += parseInt(h7_[0], 10)
    s2 += parseInt(h7_[1], 10)
    work += 1
    work += 1
  break;
}

switch (tt8) {
  case 'Я':
    s1 += parseInt(h8, 10)
    work += 1
  break;

  case 'Н':
    s2 += parseInt(h8, 10)
    work += 1
  break;

  case 'РВ':
    s3 += parseInt(h8, 10)
    work += 1
  break;

  case 'ВМ':
    s5 += parseInt(h8, 10)
    work += 1
  break;

  case 'К':
    s6 += parseInt(h8, 10)
    work += 1
  break;

  case 'ПК':
    s7 += parseInt(h8, 10)
    work += 1
  break;

  case 'ПМ':
    s8 += parseInt(h8, 10)
    work += 1
  break;

  case 'ОТ':
    s9 += parseInt(h8, 10)
    vac += 1

  break;

  case 'ОД':
    s10 += parseInt(h8, 10)
    vac += 1

  break;

  case 'У':
    s11 += parseInt(h8, 10)
    vac += 1

  break;

  case 'УВ':
    s12 += parseInt(h8, 10)
    work += 1
  break;

  case 'УД':
    s13 += parseInt(h8, 10)
    vac += 1

  break;

  case 'Р':
    s14 += parseInt(h8, 10)
    vac += 1

  break;

  case 'ОЖ':
    s15 += parseInt(h8, 10)

    vac += 1
  break;

  case 'ДО':
    s16 += parseInt(h8, 10)
    vac += 1

  break;

  case 'Б':
    s17 += parseInt(h8, 10)
    vac += 1

  break;

  case 'Т':
    s18 += parseInt(h8, 10)
    vac += 1

  break;

  case 'ЛЧ':
    s19 += parseInt(h8, 10)
    vac += 1

  break;

  case 'ПВ':
    s20 += parseInt(h8, 10)
    vac += 1

  break;

  case 'Г':
    s21 += parseInt(h8, 10)
    vac += 1

  break;

  case 'ПР':
    s22 += parseInt(h8, 10)
    vac += 1

  break;

  case 'НС':
    s23 += parseInt(h8, 10)
    work += 1
  break;

  case 'В':
    s24 += parseInt(h8, 10)
    vac += 1

  break;

  case 'ОВ':
    s25 += parseInt(h8, 10)
    vac += 1

  break;

  case 'НВ':
    s26 += parseInt(h8, 10)
    vac += 1

  break;

  case 'ЗБ':
    s27 += parseInt(h8, 10)
    vac += 1

  break;

  case 'НН':
    s28 += parseInt(h8, 10)
    vac += 1

  break;

  case 'РП':
    s29 += parseInt(h8, 10)
    vac += 1

  break;

  case 'НП':
    s30 += parseInt(h8, 10)
    vac += 1

  break;

  case 'ВП':
    s34 += parseInt(h8, 10)
    vac += 1

  break;

  case 'НО':
    s32 += parseInt(h8, 10)
    vac += 1

  break;

  case 'НБ':
    s33 += parseInt(h8, 10)
    vac += 1
    break;

  case 'НЗ':
    s34 += parseInt(h8, 10)
    vac += 1
  break;

  case 'Я/ЛЧ':
    h8_ = h8.split('/')
    s1 += parseInt(h8_[0], 10)
    s19 += parseInt(h8_[1], 10)
    work += 1
  break;

  case 'Я/Н':
    h8_ = h8.split('/')
    s1 += parseInt(h8_[0], 10)
    s2 += parseInt(h8_[1], 10)
    work += 1
  break;

  case 'РВ/Н':
    h8_ = h8.split('/')
    s3 += parseInt(h8_[0], 10)
    s2 += parseInt(h8_[1], 10)
    work += 1
  break;
}

switch (tt9) {
  case 'Я':
    s1 += parseInt(h9, 10)
    work += 1
  break;

  case 'Н':
    s2 += parseInt(h9, 10)
    work += 1
  break;

  case 'РВ':
    s3 += parseInt(h9, 10)
    work += 1
  break;

  case 'ВМ':
    s5 += parseInt(h9, 10)
    work += 1
  break;

  case 'К':
    s6 += parseInt(h9, 10)
    work += 1
  break;

  case 'ПК':
    s7 += parseInt(h9, 10)
    work += 1
  break;

  case 'ПМ':
    s8 += parseInt(h9, 10)
    work += 1
  break;

  case 'ОТ':
    s9 += parseInt(h9, 10)
    vac += 1
  break;

  case 'ОД':
    s10 += parseInt(h9, 10)
    vac += 1
  break;

  case 'У':
    s11 += parseInt(h9, 10)
    vac += 1
  break;

  case 'УВ':
    s12 += parseInt(h9, 10)
    work += 1
  break;

  case 'УД':
    s13 += parseInt(h9, 10)
    vac += 1
  break;

  case 'Р':
    s14 += parseInt(h9, 10)
    vac += 1
  break;

  case 'ОЖ':
    s15 += parseInt(h9, 10)
    vac += 1
  break;

  case 'ДО':
    s16 += parseInt(h9, 10)
    vac += 1
  break;

  case 'Б':
    s17 += parseInt(h9, 10)
    vac += 1
  break;

  case 'Т':
    s18 += parseInt(h9, 10)
    vac += 1
  break;

  case 'ЛЧ':
    s19 += parseInt(h9, 10)
    vac += 1
  break;

  case 'ПВ':
    s20 += parseInt(h9, 10)
    vac += 1
  break;

  case 'Г':
    s21 += parseInt(h9, 10)
    vac += 1
  break;

  case 'ПР':
    s22 += parseInt(h9, 10)
    vac += 1
  break;

  case 'НС':
    s23 += parseInt(h9, 10)
    work += 1
  break;

  case 'В':
    s24 += parseInt(h9, 10)
    vac += 1

  break;

  case 'ОВ':
    s25 += parseInt(h9, 10)
    vac += 1
  break;

  case 'НВ':
    s26 += parseInt(h9, 10)
    vac += 1
  break;

  case 'ЗБ':
    s27 += parseInt(h9, 10)
    vac += 1
  break;

  case 'НН':
    s28 += parseInt(h9, 10)
    vac += 1
  break;

  case 'РП':
    s29 += parseInt(h9, 10)
    vac += 1
  break;

  case 'НП':
    s30 += parseInt(h9, 10)
    vac += 1
  break;

  case 'ВП':
    s34 += parseInt(h9, 10)
    vac += 1
  break;

  case 'НО':
    s32 += parseInt(h9, 10)
    vac += 1
  break;

  case 'НБ':
    s33 += parseInt(h9, 10)
    vac += 1
  break;

  case 'НЗ':
    s34 += parseInt(h9, 10)
    vac += 1
  break;

  case 'Я/ЛЧ':
    h9_ = h9.split('/')
    s1 += parseInt(h9_[0], 10)
    s19 += parseInt(h9_[1], 10)
    work += 1
  break;

  case 'Я/Н':
    h9_ = h9.split('/')
    s1 += parseInt(h9_[0], 10)
    s2 += parseInt(h9_[1], 10)
    work += 1
  break;

  case 'РВ/Н':
    h9_ = h9.split('/')
    s3 += parseInt(h9_[0], 10)
    s2 += parseInt(h9_[1], 10)
    work += 1
  break;
}

switch (tt10) {
  case 'Я':
    s1 += parseInt(h10, 10)
    work += 1
  break;

  case 'Н':
    s2 += parseInt(h10, 10)
    work += 1
  break;

  case 'РВ':
    s3 += parseInt(h10, 10)
    work += 1
  break;

  case 'ВМ':
    s5 += parseInt(h10, 10)
    work += 1
  break;

  case 'К':
    s6 += parseInt(h10, 10)
    work += 1
  break;

  case 'ПК':
    s7 += parseInt(h10, 10)
    work += 1
  break;

  case 'ПМ':
    s8 += parseInt(h10, 10)
    work += 1
  break;

  case 'ОТ':
    s9 += parseInt(h10, 10)
    vac += 1
  break;

  case 'ОД':
    s10 += parseInt(h10, 10)
    vac += 1
  break;

  case 'У':
    s11 += parseInt(h10, 10)
    vac += 1
  break;

  case 'УВ':
    s12 += parseInt(h10, 10)
    work += 1
  break;

  case 'УД':
    s13 += parseInt(h10, 10)
    vac += 1
  break;

  case 'Р':
    s14 += parseInt(h10, 10)
    vac += 1
  break;

  case 'ОЖ':
    s15 += parseInt(h10, 10)
    vac += 1
  break;

  case 'ДО':
    s16 += parseInt(h10, 10)
    vac += 1
  break;

  case 'Б':
    s17 += parseInt(h10, 10)
    vac += 1
  break;

  case 'Т':
    s18 += parseInt(h10, 10)
    vac += 1
  break;

  case 'ЛЧ':
    s19 += parseInt(h10, 10)
    vac += 1
  break;

  case 'ПВ':
    s20 += parseInt(h10, 10)
    vac += 1
  break;

  case 'Г':
    s21 += parseInt(h10, 10)
    vac += 1
  break;

  case 'ПР':
    s22 += parseInt(h10, 10)
    vac += 1
  break;

  case 'НС':
    s23 += parseInt(h10, 10)
    work += 1
  break;

  case 'В':
    s24 += parseInt(h10, 10)
    vac += 1

  break;

  case 'ОВ':
    s25 += parseInt(h10, 10)
    vac += 1
  break;

  case 'НВ':
    s26 += parseInt(h10, 10)
    vac += 1
  break;

  case 'ЗБ':
    s27 += parseInt(h10, 10)
    vac += 1
  break;

  case 'НН':
    s28 += parseInt(h10, 10)
    vac += 1
  break;

  case 'РП':
    s29 += parseInt(h10, 10)
    vac += 1
  break;

  case 'НП':
    s30 += parseInt(h10, 10)
    vac += 1
  break;

  case 'ВП':
    s31 += parseInt(h10, 10)
    vac += 1
  break;

  case 'НО':
    s32 += parseInt(h10, 10)
    vac += 1
  break;

  case 'НБ':
    s33 += parseInt(h10, 10)
    vac += 1
  break;

  case 'НЗ':
    s34 += parseInt(h10, 10)
    vac += 1
  break;

  case 'Я/ЛЧ':
    h10_ = h10.split('/')
    s1 += parseInt(h10_[0], 10)
    s19 += parseInt(h10_[1], 10)
    work += 1
  break;

  case 'Я/Н':
    h10_ = h10.split('/')
    s1 += parseInt(h10_[0], 10)
    s2 += parseInt(h10_[1], 10)
    work += 1
  break;

  case 'РВ/Н':
    h10_ = h10.split('/')
    s3 += parseInt(h10_[0], 10)
    s2 += parseInt(h10_[1], 10)
    work += 1
  break;
}

switch (tt11) {
  case 'Я':
    s1 += parseInt(h11, 10)
    work += 1
  break;

  case 'Н':
    s2 += parseInt(h11, 10)
    work += 1
  break;

  case 'РВ':
    s3 += parseInt(h11, 10)
    work += 1
  break;

  case 'ВМ':
    s5 += parseInt(h11, 10)
    work += 1
  break;

  case 'К':
    s6 += parseInt(h11, 10)
    work += 1
  break;

  case 'ПК':
    s7 += parseInt(h11, 10)
    work += 1
  break;

  case 'ПМ':
    s8 += parseInt(h11, 10)
    work += 1
  break;

  case 'ОТ':
    s9 += parseInt(h11, 10)
    vac += 1
  break;

  case 'ОД':
    s10 += parseInt(h11, 10)
    vac += 1
  break;

  case 'У':
    s11 += parseInt(h11, 10)
    vac += 1
  break;

  case 'УВ':
    s12 += parseInt(h11, 10)
    work += 1
  break;

  case 'УД':
    s13 += parseInt(h11, 10)
    vac += 1
  break;

  case 'Р':
    s14 += parseInt(h11, 10)
    vac += 1
  break;

  case 'ОЖ':
    s15 += parseInt(h11, 10)
    vac += 1
  break;

  case 'ДО':
    s16 += parseInt(h11, 10)
    vac += 1
  break;

  case 'Б':
    s17 += parseInt(h11, 10)
    vac += 1
  break;

  case 'Т':
    s18 += parseInt(h11, 10)
    vac += 1
  break;

  case 'ЛЧ':
    s19 += parseInt(h11, 10)
    vac += 1
  break;

  case 'ПВ':
    s20 += parseInt(h11, 10)
    vac += 1
  break;

  case 'Г':
    s21 += parseInt(h11, 10)
    vac += 1
  break;

  case 'ПР':
    s22 += parseInt(h11, 10)
    vac += 1
  break;

  case 'НС':
    s23 += parseInt(h11, 10)
    work += 1
  break;

  case 'В':
    s24 += parseInt(h11, 10)
    vac += 1

  break;

  case 'ОВ':
    s25 += parseInt(h11, 10)
    vac += 1
  break;

  case 'НВ':
    s26 += parseInt(h11, 10)
    vac += 1
  break;

  case 'ЗБ':
    s27 += parseInt(h11, 10)
    vac += 1
  break;

  case 'НН':
    s28 += parseInt(h11, 10)
    vac += 1
  break;

  case 'РП':
    s29 += parseInt(h11, 10)
    vac += 1
  break;

  case 'НП':
    s30 += parseInt(h11, 10)
    vac += 1
  break;

  case 'ВП':
    s31 += parseInt(h11, 10)
    vac += 1
  break;

  case 'НО':
    s32 += parseInt(h11, 10)
    vac += 1
  break;

  case 'НБ':
    s33 += parseInt(h11, 10)
    vac += 1
  break;

  case 'НЗ':
    s34 += parseInt(h11, 10)
    vac += 1
  break;

  case 'Я/ЛЧ':
    h11_ = h11.split('/')
    s1 += parseInt(h11_[0], 10)
    s19 += parseInt(h11_[1], 10)
    work += 1
  break;

  case 'Я/Н':
    h11_ = h11.split('/')
    s1 += parseInt(h11_[0], 10)
    s2 += parseInt(h11_[1], 10)
    work += 1
  break;

  case 'РВ/Н':
    h11_ = h11.split('/')
    s3 += parseInt(h11_[0], 10)
    s2 += parseInt(h11_[1], 10)
    work += 1
  break;
}

switch (tt12) {
  case 'Я':
    s1 += parseInt(h12, 10)
    work += 1
  break;

  case 'Н':
    s2 += parseInt(h12, 10)
    work += 1
  break;

  case 'РВ':
    s3 += parseInt(h12, 10)
    work += 1
  break;

  case 'ВМ':
    s5 += parseInt(h12, 10)
    work += 1
  break;

  case 'К':
    s6 += parseInt(h12, 10)
    work += 1
  break;

  case 'ПК':
    s7 += parseInt(h12, 10)
    work += 1
  break;

  case 'ПМ':
    s8 += parseInt(h12, 10)
    work += 1
  break;

  case 'ОТ':
    s9 += parseInt(h12, 10)
    vac += 1
  break;

  case 'ОД':
    s10 += parseInt(h12, 10)
    vac += 1
  break;

  case 'У':
    s11 += parseInt(h12, 10)
    vac += 1
  break;

  case 'УВ':
    s12 += parseInt(h12, 10)
    work += 1
  break;

  case 'УД':
    s13 += parseInt(h12, 10)
    vac += 1
  break;

  case 'Р':
    s14 += parseInt(h12, 10)
    vac += 1
  break;

  case 'ОЖ':
    s15 += parseInt(h12, 10)
    vac += 1
  break;

  case 'ДО':
    s16 += parseInt(h12, 10)
    vac += 1
  break;

  case 'Б':
    s17 += parseInt(h12, 10)
    vac += 1
  break;

  case 'Т':
    s18 += parseInt(h12, 10)
    vac += 1
  break;

  case 'ЛЧ':
    s19 += parseInt(h12, 10)
    vac += 1
  break;

  case 'ПВ':
    s20 += parseInt(h12, 10)
    vac += 1
  break;

  case 'Г':
    s21 += parseInt(h12, 10)
    vac += 1
  break;

  case 'ПР':
    s22 += parseInt(h12, 10)
    vac += 1
  break;

  case 'НС':
    s23 += parseInt(h12, 10)
    work += 1
  break;

  case 'В':
    s24 += parseInt(h12, 10)
    vac += 1

  break;

  case 'ОВ':
    s25 += parseInt(h12, 10)
    vac += 1
  break;

  case 'НВ':
    s26 += parseInt(h12, 10)
    vac += 1
  break;

  case 'ЗБ':
    s27 += parseInt(h12, 10)
    vac += 1
  break;

  case 'НН':
    s28 += parseInt(h12, 10)
    vac += 1
  break;

  case 'РП':
    s29 += parseInt(h12, 10)
    vac += 1
  break;

  case 'НП':
    s30 += parseInt(h12, 10)
    vac += 1
  break;

  case 'ВП':
    s31 += parseInt(h12, 10)
    vac += 1
  break;

  case 'НО':
    s32 += parseInt(h12, 10)
    vac += 1
  break;

  case 'НБ':
    s33 += parseInt(h12, 10)
    vac += 1
  break;

  case 'НЗ':
    s34 += parseInt(h12, 10)
    vac += 1
  break;

  case 'Я/ЛЧ':
    h12_ = h12.split('/')
    s1 += parseInt(h12_[0], 10)
    s19 += parseInt(h12_[1], 10)
    work += 1
  break;

  case 'Я/Н':
    h12_ = h12.split('/')
    s1 += parseInt(h12_[0], 10)
    s2 += parseInt(h12_[1], 10)
    work += 1
  break;

  case 'РВ/Н':
    h12_ = h12.split('/')
    s3 += parseInt(h12_[0], 10)
    s2 += parseInt(h12_[1], 10)
    work += 1
  break;
}

switch (tt13) {
  case 'Я':
    s1 += parseInt(h13, 10)
    work += 1
  break;

  case 'Н':
    s2 += parseInt(h13, 10)
    work += 1
  break;

  case 'РВ':
    s3 += parseInt(h13, 10)
    work += 1
  break;

  case 'ВМ':
    s5 += parseInt(h13, 10)
    work += 1
  break;

  case 'К':
    s6 += parseInt(h13, 10)
    work += 1
  break;

  case 'ПК':
    s7 += parseInt(h13, 10)
    work += 1
  break;

  case 'ПМ':
    s8 += parseInt(h13, 10)
    work += 1
  break;

  case 'ОТ':
    s9 += parseInt(h13, 10)
    vac += 1
  break;

  case 'ОД':
    s10 += parseInt(h13, 10)
    vac += 1
  break;

  case 'У':
    s11 += parseInt(h13, 10)
    vac += 1
  break;

  case 'УВ':
    s12 += parseInt(h13, 10)
    work += 1
  break;

  case 'УД':
    s13 += parseInt(h13, 10)
    vac += 1
  break;

  case 'Р':
    s14 += parseInt(h13, 10)
    vac += 1
  break;

  case 'ОЖ':
    s15 += parseInt(h13, 10)
    vac += 1
  break;

  case 'ДО':
    s16 += parseInt(h13, 10)
    vac += 1
  break;

  case 'Б':
    s17 += parseInt(h13, 10)
    vac += 1
  break;

  case 'Т':
    s18 += parseInt(h13, 10)
    vac += 1
  break;

  case 'ЛЧ':
    s19 += parseInt(h13, 10)
    vac += 1
  break;

  case 'ПВ':
    s20 += parseInt(h13, 10)
    vac += 1
  break;

  case 'Г':
    s21 += parseInt(h13, 10)
    vac += 1
  break;

  case 'ПР':
    s22 += parseInt(h13, 10)
    vac += 1
  break;

  case 'НС':
    s23 += parseInt(h13, 10)
    work += 1
  break;

  case 'В':
    s24 += parseInt(h13, 10)
    vac += 1

  break;

  case 'ОВ':
    s25 += parseInt(h13, 10)
    vac += 1
  break;

  case 'НВ':
    s26 += parseInt(h13, 10)
    vac += 1
  break;

  case 'ЗБ':
    s27 += parseInt(h13, 10)
    vac += 1
  break;

  case 'НН':
    s28 += parseInt(h13, 10)
    vac += 1
  break;

  case 'РП':
    s29 += parseInt(h13, 10)
    vac += 1
  break;

  case 'НП':
    s30 += parseInt(h13, 10)
    vac += 1
  break;

  case 'ВП':
    s31 += parseInt(h13, 10)
    vac += 1
  break;

  case 'НО':
    s32 += parseInt(h13, 10)
    vac += 1
  break;

  case 'НБ':
    s33 += parseInt(h13, 10)
    vac += 1
  break;

  case 'НЗ':
    s34 += parseInt(h13, 10)
    vac += 1
  break;

  case 'Я/ЛЧ':
    h13_ = h13.split('/')
    s1 += parseInt(h13_[0], 10)
    s19 += parseInt(h13_[1], 10)
    work += 1
  break;

  case 'Я/Н':
    h13_ = h13.split('/')
    s1 += parseInt(h13_[0], 10)
    s2 += parseInt(h13_[1], 10)
    work += 1
  break;

  case 'РВ/Н':
    h13_ = h13.split('/')
    s3 += parseInt(h13_[0], 10)
    s2 += parseInt(h13_[1], 10)
    work += 1
  break;
}

switch (tt14) {
  case 'Я':
    s1 += parseInt(h14, 10)
    work += 1
  break;

  case 'Н':
    s2 += parseInt(h14, 10)
    work += 1
  break;

  case 'РВ':
    s3 += parseInt(h14, 10)
    work += 1
  break;

  case 'ВМ':
    s5 += parseInt(h14, 10)
    work += 1
  break;

  case 'К':
    s6 += parseInt(h14, 10)
    work += 1
  break;

  case 'ПК':
    s7 += parseInt(h14, 10)
    work += 1
  break;

  case 'ПМ':
    s8 += parseInt(h14, 10)
    work += 1
  break;

  case 'ОТ':
    s9 += parseInt(h14, 10)
    vac += 1
  break;

  case 'ОД':
    s10 += parseInt(h14, 10)
    vac += 1
  break;

  case 'У':
    s11 += parseInt(h14, 10)
    vac += 1
  break;

  case 'УВ':
    s12 += parseInt(h14, 10)
    work += 1
  break;

  case 'УД':
    s13 += parseInt(h14, 10)
    vac += 1
  break;

  case 'Р':
    s14 += parseInt(h14, 10)
    vac += 1
  break;

  case 'ОЖ':
    s15 += parseInt(h14, 10)
    vac += 1
  break;

  case 'ДО':
    s16 += parseInt(h14, 10)
    vac += 1
  break;

  case 'Б':
    s17 += parseInt(h14, 10)
    vac += 1
  break;

  case 'Т':
    s18 += parseInt(h14, 10)
    vac += 1
  break;

  case 'ЛЧ':
    s19 += parseInt(h14, 10)
    vac += 1
  break;

  case 'ПВ':
    s20 += parseInt(h14, 10)
    vac += 1
  break;

  case 'Г':
    s21 += parseInt(h14, 10)
    vac += 1
  break;

  case 'ПР':
    s22 += parseInt(h14, 10)
    vac += 1
  break;

  case 'НС':
    s23 += parseInt(h14, 10)
    work += 1
  break;

  case 'В':
    s24 += parseInt(h14, 10)
    vac += 1

  break;

  case 'ОВ':
    s25 += parseInt(h14, 10)
    vac += 1
  break;

  case 'НВ':
    s26 += parseInt(h14, 10)
    vac += 1
  break;

  case 'ЗБ':
    s27 += parseInt(h14, 10)
    vac += 1
  break;

  case 'НН':
    s28 += parseInt(h14, 10)
    vac += 1
  break;

  case 'РП':
    s29 += parseInt(h14, 10)
    vac += 1
  break;

  case 'НП':
    s30 += parseInt(h14, 10)
    vac += 1
  break;

  case 'ВП':
    s31 += parseInt(h14, 10)
    vac += 1
  break;

  case 'НО':
    s32 += parseInt(h14, 10)
    vac += 1
  break;

  case 'НБ':
    s33 += parseInt(h14, 10)
    vac += 1
  break;

  case 'НЗ':
    s34 += parseInt(h14, 10)
    vac += 1
  break;

  case 'Я/ЛЧ':
    h14_ = h14.split('/')
    s1 += parseInt(h14_[0], 10)
    s19 += parseInt(h14_[1], 10)
    work += 1
  break;

  case 'Я/Н':
    h14_ = h14.split('/')
    s1 += parseInt(h14_[0], 10)
    s2 += parseInt(h14_[1], 10)
    work += 1
  break;

  case 'РВ/Н':
    h14_ = h14.split('/')
    s3 += parseInt(h14_[0], 10)
    s2 += parseInt(h14_[1], 10)
    work += 1
  break;
}

switch (tt15) {
  case 'Я':
    s1 += parseInt(h15, 10)
    work += 1
  break;

  case 'Н':
    s2 += parseInt(h15, 10)
    work += 1
  break;

  case 'РВ':
    s3 += parseInt(h15, 10)
    work += 1
  break;

  case 'ВМ':
    s5 += parseInt(h15, 10)
    work += 1
  break;

  case 'К':
    s6 += parseInt(h15, 10)
    work += 1
  break;

  case 'ПК':
    s7 += parseInt(h15, 10)
    work += 1
  break;

  case 'ПМ':
    s8 += parseInt(h15, 10)
    work += 1
  break;

  case 'ОТ':
    s9 += parseInt(h15, 10)
    vac += 1
  break;

  case 'ОД':
    s10 += parseInt(h15, 10)
    vac += 1
  break;

  case 'У':
    s11 += parseInt(h15, 10)
    vac += 1
  break;

  case 'УВ':
    s12 += parseInt(h15, 10)
    work += 1
  break;

  case 'УД':
    s13 += parseInt(h15, 10)
    vac += 1
  break;

  case 'Р':
    s14 += parseInt(h15, 10)
    vac += 1
  break;

  case 'ОЖ':
    s15 += parseInt(h15, 10)
    vac += 1
  break;

  case 'ДО':
    s16 += parseInt(h15, 10)
    vac += 1
  break;

  case 'Б':
    s17 += parseInt(h15, 10)
    vac += 1
  break;

  case 'Т':
    s18 += parseInt(h15, 10)
    vac += 1
  break;

  case 'ЛЧ':
    s19 += parseInt(h15, 10)
    vac += 1
  break;

  case 'ПВ':
    s20 += parseInt(h15, 10)
    vac += 1
  break;

  case 'Г':
    s21 += parseInt(h15, 10)
    vac += 1
  break;

  case 'ПР':
    s22 += parseInt(h15, 10)
    vac += 1
  break;

  case 'НС':
    s23 += parseInt(h15, 10)
    work += 1
  break;

  case 'В':
    s24 += parseInt(h15, 10)
    vac += 1

  break;

  case 'ОВ':
    s25 += parseInt(h15, 10)
    vac += 1
  break;

  case 'НВ':
    s26 += parseInt(h15, 10)
    vac += 1
  break;

  case 'ЗБ':
    s27 += parseInt(h15, 10)
    vac += 1
  break;

  case 'НН':
    s28 += parseInt(h15, 10)
    vac += 1
  break;

  case 'РП':
    s29 += parseInt(h15, 10)
    vac += 1
  break;

  case 'НП':
    s30 += parseInt(h15, 10)
    vac += 1
  break;

  case 'ВП':
    s31 += parseInt(h15, 10)
    vac += 1
  break;

  case 'НО':
    s32 += parseInt(h15, 10)
    vac += 1
  break;

  case 'НБ':
    s33 += parseInt(h15, 10)
    vac += 1
  break;

  case 'НЗ':
    s34 += parseInt(h15, 10)
    vac += 1
  break;

  case 'Я/ЛЧ':
    h15_ = h15.split('/')
    s1 += parseInt(h15_[0], 10)
    s19 += parseInt(h15_[1], 10)
    console.log(h15_[2])
    work += 1
  break;

  case 'Я/Н':
    h15_ = h15.split('/')
    s1 += parseInt(h15_[0], 10)
    s2 += parseInt(h15_[1], 10)
    work += 1
  break;

  case 'РВ/Н':
    h15_ = h15.split('/')
    s3 += parseInt(h15_[0], 10)
    s2 += parseInt(h15_[1], 10)
    work += 1
  break;
}

switch (tt16) {
  case 'Я':
    s1 += parseInt(h16, 10)
    work += 1
  break;

  case 'Н':
    s2 += parseInt(h16, 10)
    work += 1
  break;

  case 'РВ':
    s3 += parseInt(h16, 10)
    work += 1
  break;

  case 'ВМ':
    s5 += parseInt(h16, 10)
    work += 1
  break;

  case 'К':
    s6 += parseInt(h16, 10)
    work += 1
  break;

  case 'ПК':
    s7 += parseInt(h16, 10)
    work += 1
  break;

  case 'ПМ':
    s8 += parseInt(h16, 10)
    work += 1
  break;

  case 'ОТ':
    s9 += parseInt(h16, 10)
    vac += 1
  break;

  case 'ОД':
    s10 += parseInt(h16, 10)
    vac += 1
  break;

  case 'У':
    s11 += parseInt(h16, 10)
    vac += 1
  break;

  case 'УВ':
    s12 += parseInt(h16, 10)
    work += 1
  break;

  case 'УД':
    s13 += parseInt(h16, 10)
    vac += 1
  break;

  case 'Р':
    s14 += parseInt(h16, 10)
    vac += 1
  break;

  case 'ОЖ':
    s15 += parseInt(h16, 10)
    vac += 1
  break;

  case 'ДО':
    s16 += parseInt(h16, 10)
    vac += 1
  break;

  case 'Б':
    s17 += parseInt(h16, 10)
    vac += 1
  break;

  case 'Т':
    s18 += parseInt(h16, 10)
    vac += 1
  break;

  case 'ЛЧ':
    s19 += parseInt(h16, 10)
    vac += 1
  break;

  case 'ПВ':
    s20 += parseInt(h16, 10)
    vac += 1
  break;

  case 'Г':
    s21 += parseInt(h16, 10)
    vac += 1
  break;

  case 'ПР':
    s22 += parseInt(h16, 10)
    vac += 1
  break;

  case 'НС':
    s23 += parseInt(h16, 10)
    work += 1
  break;

  case 'В':
    s24 += parseInt(h16, 10)
    vac += 1

  break;

  case 'ОВ':
    s25 += parseInt(h16, 10)
    vac += 1
  break;

  case 'НВ':
    s26 += parseInt(h16, 10)
    vac += 1
  break;

  case 'ЗБ':
    s27 += parseInt(h16, 10)
    vac += 1
  break;

  case 'НН':
    s28 += parseInt(h16, 10)
    vac += 1
  break;

  case 'РП':
    s29 += parseInt(h16, 10)
    vac += 1
  break;

  case 'НП':
    s30 += parseInt(h16, 10)
    vac += 1
  break;

  case 'ВП':
    s31 += parseInt(h16, 10)
    vac += 1
  break;

  case 'НО':
    s32 += parseInt(h16, 10)
    vac += 1
  break;

  case 'НБ':
    s33 += parseInt(h16, 10)
    vac += 1
  break;

  case 'НЗ':
    s34 += parseInt(h16, 10)
    vac += 1
  break;

  case 'Я/ЛЧ':
    h16_ = h16.split('/')
    s1 += parseInt(h16_[0], 10)
    s19 += parseInt(h16_[1], 10)
    work += 1
  break;

  case 'Я/Н':
    h16_ = h16.split('/')
    s1 += parseInt(h16_[0], 10)
    s2 += parseInt(h16_[1], 10)
    work += 1
  break;

  case 'РВ/Н':
    h16_ = h16.split('/')
    s3 += parseInt(h16_[0], 10)
    s2 += parseInt(h16_[1], 10)
    work += 1
  break;
}

switch (tt17) {
  case 'Я':
    s1 += parseInt(h17, 10)
    work += 1
  break;

  case 'Н':
    s2 += parseInt(h17, 10)
    work += 1
  break;

  case 'РВ':
    s3 += parseInt(h17, 10)
    work += 1
  break;

  case 'ВМ':
    s5 += parseInt(h17, 10)
    work += 1
  break;

  case 'К':
    s6 += parseInt(h17, 10)
    work += 1
  break;

  case 'ПК':
    s7 += parseInt(h17, 10)
    work += 1
  break;

  case 'ПМ':
    s8 += parseInt(h17, 10)
    work += 1
  break;

  case 'ОТ':
    s9 += parseInt(h17, 10)
    vac += 1
  break;

  case 'ОД':
    s10 += parseInt(h17, 10)
    vac += 1
  break;

  case 'У':
    s11 += parseInt(h17, 10)
    vac += 1
  break;

  case 'УВ':
    s12 += parseInt(h17, 10)
    work += 1
  break;

  case 'УД':
    s13 += parseInt(h17, 10)
    vac += 1
  break;

  case 'Р':
    s14 += parseInt(h17, 10)
    vac += 1
  break;

  case 'ОЖ':
    s15 += parseInt(h17, 10)
    vac += 1
  break;

  case 'ДО':
    s16 += parseInt(h17, 10)
    vac += 1
  break;

  case 'Б':
    s17 += parseInt(h17, 10)
    vac += 1
  break;

  case 'Т':
    s18 += parseInt(h17, 10)
    vac += 1
  break;

  case 'ЛЧ':
    s19 += parseInt(h17, 10)
    vac += 1
  break;

  case 'ПВ':
    s20 += parseInt(h17, 10)
    vac += 1
  break;

  case 'Г':
    s21 += parseInt(h17, 10)
    vac += 1
  break;

  case 'ПР':
    s22 += parseInt(h17, 10)
    vac += 1
  break;

  case 'НС':
    s23 += parseInt(h17, 10)
    work += 1
  break;

  case 'В':
    s24 += parseInt(h17, 10)
    vac += 1

  break;

  case 'ОВ':
    s25 += parseInt(h17, 10)
    vac += 1
  break;

  case 'НВ':
    s26 += parseInt(h17, 10)
    vac += 1
  break;

  case 'ЗБ':
    s27 += parseInt(h17, 10)
    vac += 1
  break;

  case 'НН':
    s28 += parseInt(h17, 10)
    vac += 1
  break;

  case 'РП':
    s29 += parseInt(h17, 10)
    vac += 1
  break;

  case 'НП':
    s30 += parseInt(h17, 10)
    vac += 1
  break;

  case 'ВП':
    s31 += parseInt(h17, 10)
    vac += 1
  break;

  case 'НО':
    s32 += parseInt(h17, 10)
    vac += 1
  break;

  case 'НБ':
    s33 += parseInt(h17, 10)
    vac += 1
  break;

  case 'НЗ':
    s34 += parseInt(h17, 10)
    vac += 1
  break;

  case 'Я/ЛЧ':
    h17_ = h17.split('/')
    s1 += parseInt(h17_[0], 10)
    s19 += parseInt(h17_[1], 10)
    work += 1
  break;

  case 'Я/Н':
    h17_ = h17.split('/')
    s1 += parseInt(h17_[0], 10)
    s2 += parseInt(h17_[1], 10)
    work += 1
  break;

  case 'РВ/Н':
    h17_ = h17.split('/')
    s3 += parseInt(h17_[0], 10)
    s2 += parseInt(h17_[1], 10)
    work += 1
  break;
}

switch (tt18) {
  case 'Я':
    s1 += parseInt(h18, 10)
    work += 1
  break;

  case 'Н':
    s2 += parseInt(h18, 10)
    work += 1
  break;

  case 'РВ':
    s3 += parseInt(h18, 10)
    work += 1
  break;

  case 'ВМ':
    s5 += parseInt(h18, 10)
    work += 1
  break;

  case 'К':
    s6 += parseInt(h18, 10)
    work += 1
  break;

  case 'ПК':
    s7 += parseInt(h18, 10)
    work += 1
  break;

  case 'ПМ':
    s8 += parseInt(h18, 10)
    work += 1
  break;

  case 'ОТ':
    s9 += parseInt(h18, 10)
    vac += 1
  break;

  case 'ОД':
    s10 += parseInt(h18, 10)
    vac += 1
  break;

  case 'У':
    s11 += parseInt(h18, 10)
    vac += 1
  break;

  case 'УВ':
    s12 += parseInt(h18, 10)
    work += 1
  break;

  case 'УД':
    s13 += parseInt(h18, 10)
    vac += 1
  break;

  case 'Р':
    s14 += parseInt(h18, 10)
    vac += 1
  break;

  case 'ОЖ':
    s15 += parseInt(h18, 10)
    vac += 1
  break;

  case 'ДО':
    s16 += parseInt(h18, 10)
    vac += 1
  break;

  case 'Б':
    s17 += parseInt(h18, 10)
    vac += 1
  break;

  case 'Т':
    s18 += parseInt(h18, 10)
    vac += 1
  break;

  case 'ЛЧ':
    s19 += parseInt(h18, 10)
    vac += 1
  break;

  case 'ПВ':
    s20 += parseInt(h18, 10)
    vac += 1
  break;

  case 'Г':
    s21 += parseInt(h18, 10)
    vac += 1
  break;

  case 'ПР':
    s22 += parseInt(h18, 10)
    vac += 1
  break;

  case 'НС':
    s23 += parseInt(h18, 10)
    work += 1
  break;

  case 'В':
    s24 += parseInt(h18, 10)
    vac += 1

  break;

  case 'ОВ':
    s25 += parseInt(h18, 10)
    vac += 1
  break;

  case 'НВ':
    s26 += parseInt(h18, 10)
    vac += 1
  break;

  case 'ЗБ':
    s27 += parseInt(h18, 10)
    vac += 1
  break;

  case 'НН':
    s28 += parseInt(h18, 10)
    vac += 1
  break;

  case 'РП':
    s29 += parseInt(h18, 10)
    vac += 1
  break;

  case 'НП':
    s30 += parseInt(h18, 10)
    vac += 1
  break;

  case 'ВП':
    s31 += parseInt(h18, 10)
    vac += 1
  break;

  case 'НО':
    s32 += parseInt(h18, 10)
    vac += 1
  break;

  case 'НБ':
    s33 += parseInt(h18, 10)
    vac += 1
  break;

  case 'НЗ':
    s34 += parseInt(h18, 10)
    vac += 1
  break;

  case 'Я/ЛЧ':
    h18_ = h18.split('/')
    s1 += parseInt(h18_[0], 10)
    s19 += parseInt(h18_[1], 10)
    work += 1
  break;

  case 'Я/Н':
    h18_ = h18.split('/')
    s1 += parseInt(h18_[0], 10)
    s2 += parseInt(h18_[1], 10)
    work += 1
  break;

  case 'РВ/Н':
    h18_ = h18.split('/')
    s3 += parseInt(h18_[0], 10)
    s2 += parseInt(h18_[1], 10)
    work += 1
  break;
}

switch (tt19) {
  case 'Я':
    s1 += parseInt(h19, 10)
    work += 1
  break;

  case 'Н':
    s2 += parseInt(h19, 10)
    work += 1
  break;

  case 'РВ':
    s3 += parseInt(h19, 10)
    work += 1
  break;

  case 'ВМ':
    s5 += parseInt(h19, 10)
    work += 1
  break;

  case 'К':
    s6 += parseInt(h19, 10)
    work += 1
  break;

  case 'ПК':
    s7 += parseInt(h19, 10)
    work += 1
  break;

  case 'ПМ':
    s8 += parseInt(h19, 10)
    work += 1
  break;

  case 'ОТ':
    s9 += parseInt(h19, 10)
    vac += 1
  break;

  case 'ОД':
    s10 += parseInt(h19, 10)
    vac += 1
  break;

  case 'У':
    s11 += parseInt(h19, 10)
    vac += 1
  break;

  case 'УВ':
    s12 += parseInt(h19, 10)
    work += 1
  break;

  case 'УД':
    s13 += parseInt(h19, 10)
    vac += 1
  break;

  case 'Р':
    s14 += parseInt(h19, 10)
    vac += 1
  break;

  case 'ОЖ':
    s15 += parseInt(h19, 10)
    vac += 1
  break;

  case 'ДО':
    s16 += parseInt(h19, 10)
    vac += 1
  break;

  case 'Б':
    s17 += parseInt(h19, 10)
    vac += 1
  break;

  case 'Т':
    s18 += parseInt(h19, 10)
    vac += 1
  break;

  case 'ЛЧ':
    s19 += parseInt(h19, 10)
    vac += 1
  break;

  case 'ПВ':
    s20 += parseInt(h19, 10)
    vac += 1
  break;

  case 'Г':
    s21 += parseInt(h19, 10)
    vac += 1
  break;

  case 'ПР':
    s22 += parseInt(h19, 10)
    vac += 1
  break;

  case 'НС':
    s23 += parseInt(h19, 10)
    work += 1
  break;

  case 'В':
    s24 += parseInt(h19, 10)
    vac += 1

  break;

  case 'ОВ':
    s25 += parseInt(h19, 10)
    vac += 1
  break;

  case 'НВ':
    s26 += parseInt(h19, 10)
    vac += 1
  break;

  case 'ЗБ':
    s27 += parseInt(h19, 10)
    vac += 1
  break;

  case 'НН':
    s28 += parseInt(h19, 10)
    vac += 1
  break;

  case 'РП':
    s29 += parseInt(h19, 10)
    vac += 1
  break;

  case 'НП':
    s30 += parseInt(h19, 10)
    vac += 1
  break;

  case 'ВП':
    s31 += parseInt(h19, 10)
    vac += 1
  break;

  case 'НО':
    s32 += parseInt(h19, 10)
    vac += 1
  break;

  case 'НБ':
    s33 += parseInt(h19, 10)
    vac += 1
  break;

  case 'НЗ':
    s34 += parseInt(h19, 10)
    vac += 1
  break;

  case 'Я/ЛЧ':
    h19_ = h19.split('/')
    s1 += parseInt(h19_[0], 10)
    s19 += parseInt(h19_[1], 10)
    work += 1
  break;

  case 'Я/Н':
    h19_ = h19.split('/')
    s1 += parseInt(h19_[0], 10)
    s2 += parseInt(h19_[1], 10)
    work += 1
  break;

  case 'РВ/Н':
    h19_ = h19.split('/')
    s3 += parseInt(h19_[0], 10)
    s2 += parseInt(h19_[1], 10)
    work += 1
  break;
}

switch (tt20) {
  case 'Я':
    s1 += parseInt(h20, 10)
    work += 1
  break;

  case 'Н':
    s2 += parseInt(h20, 10)
    work += 1
  break;

  case 'РВ':
    s3 += parseInt(h20, 10)
    work += 1
  break;

  case 'ВМ':
    s5 += parseInt(h20, 10)
    work += 1
  break;

  case 'К':
    s6 += parseInt(h20, 10)
    work += 1
  break;

  case 'ПК':
    s7 += parseInt(h20, 10)
    work += 1
  break;

  case 'ПМ':
    s8 += parseInt(h20, 10)
    work += 1
  break;

  case 'ОТ':
    s9 += parseInt(h20, 10)
    vac += 1
  break;

  case 'ОД':
    s10 += parseInt(h20, 10)
    vac += 1
  break;

  case 'У':
    s11 += parseInt(h20, 10)
    vac += 1
  break;

  case 'УВ':
    s12 += parseInt(h20, 10)
    work += 1
  break;

  case 'УД':
    s13 += parseInt(h20, 10)
    vac += 1
  break;

  case 'Р':
    s14 += parseInt(h20, 10)
    vac += 1
  break;

  case 'ОЖ':
    s15 += parseInt(h20, 10)
    vac += 1
  break;

  case 'ДО':
    s16 += parseInt(h20, 10)
    vac += 1
  break;

  case 'Б':
    s17 += parseInt(h20, 10)
    vac += 1
  break;

  case 'Т':
    s18 += parseInt(h20, 10)
    vac += 1
  break;

  case 'ЛЧ':
    s19 += parseInt(h20, 10)
    vac += 1
  break;

  case 'ПВ':
    s20 += parseInt(h20, 10)
    vac += 1
  break;

  case 'Г':
    s21 += parseInt(h20, 10)
    vac += 1
  break;

  case 'ПР':
    s22 += parseInt(h20, 10)
    vac += 1
  break;

  case 'НС':
    s23 += parseInt(h20, 10)
    work += 1
  break;

  case 'В':
    s24 += parseInt(h20, 10)
    vac += 1

  break;

  case 'ОВ':
    s25 += parseInt(h20, 10)
    vac += 1
  break;

  case 'НВ':
    s26 += parseInt(h20, 10)
    vac += 1
  break;

  case 'ЗБ':
    s27 += parseInt(h20, 10)
    vac += 1
  break;

  case 'НН':
    s28 += parseInt(h20, 10)
    vac += 1
  break;

  case 'РП':
    s29 += parseInt(h20, 10)
    vac += 1
  break;

  case 'НП':
    s30 += parseInt(h20, 10)
    vac += 1
  break;

  case 'ВП':
    s31 += parseInt(h20, 10)
    vac += 1
  break;

  case 'НО':
    s32 += parseInt(h20, 10)
    vac += 1
  break;

  case 'НБ':
    s33 += parseInt(h20, 10)
    vac += 1
  break;

  case 'НЗ':
    s34 += parseInt(h20, 10)
    vac += 1
  break;

  case 'Я/ЛЧ':
    h20_ = h20.split('/')
    s1 += parseInt(h20_[0], 10)
    s19 += parseInt(h20_[1], 10)
    work += 1
  break;

  case 'Я/Н':
    h20_ = h20.split('/')
    s1 += parseInt(h20_[0], 10)
    s2 += parseInt(h20_[1], 10)
    work += 1
  break;

  case 'РВ/Н':
    h20_ = h20.split('/')
    s3 += parseInt(h20_[0], 10)
    s2 += parseInt(h20_[1], 10)
    work += 1
  break;
}

switch (tt21) {
  case 'Я':
    s1 += parseInt(h21, 10)
    work += 1
  break;

  case 'Н':
    s2 += parseInt(h21, 10)
    work += 1
  break;

  case 'РВ':
    s3 += parseInt(h21, 10)
    work += 1
  break;

  case 'ВМ':
    s5 += parseInt(h21, 10)
    work += 1
  break;

  case 'К':
    s6 += parseInt(h21, 10)
    work += 1
  break;

  case 'ПК':
    s7 += parseInt(h21, 10)
    work += 1
  break;

  case 'ПМ':
    s8 += parseInt(h21, 10)
    work += 1
  break;

  case 'ОТ':
    s9 += parseInt(h21, 10)
    vac += 1
  break;

  case 'ОД':
    s10 += parseInt(h21, 10)
    vac += 1
  break;

  case 'У':
    s11 += parseInt(h21, 10)
    vac += 1
  break;

  case 'УВ':
    s12 += parseInt(h21, 10)
    work += 1
  break;

  case 'УД':
    s13 += parseInt(h21, 10)
    vac += 1
  break;

  case 'Р':
    s14 += parseInt(h21, 10)
    vac += 1
  break;

  case 'ОЖ':
    s15 += parseInt(h21, 10)
    vac += 1
  break;

  case 'ДО':
    s16 += parseInt(h21, 10)
    vac += 1
  break;

  case 'Б':
    s17 += parseInt(h21, 10)
    vac += 1
  break;

  case 'Т':
    s18 += parseInt(h21, 10)
    vac += 1
  break;

  case 'ЛЧ':
    s19 += parseInt(h21, 10)
    vac += 1
  break;

  case 'ПВ':
    s20 += parseInt(h21, 10)
    vac += 1
  break;

  case 'Г':
    s21 += parseInt(h21, 10)
    vac += 1
  break;

  case 'ПР':
    s22 += parseInt(h21, 10)
    vac += 1
  break;

  case 'НС':
    s23 += parseInt(h21, 10)
    work += 1
  break;

  case 'В':
    s24 += parseInt(h21, 10)
    vac += 1

  break;

  case 'ОВ':
    s25 += parseInt(h21, 10)
    vac += 1
  break;

  case 'НВ':
    s26 += parseInt(h21, 10)
    vac += 1
  break;

  case 'ЗБ':
    s27 += parseInt(h21, 10)
    vac += 1
  break;

  case 'НН':
    s28 += parseInt(h21, 10)
    vac += 1
  break;

  case 'РП':
    s29 += parseInt(h21, 10)
    vac += 1
  break;

  case 'НП':
    s30 += parseInt(h21, 10)
    vac += 1
  break;

  case 'ВП':
    s31 += parseInt(h21, 10)
    vac += 1
  break;

  case 'НО':
    s32 += parseInt(h21, 10)
    vac += 1
  break;

  case 'НБ':
    s33 += parseInt(h21, 10)
    vac += 1
  break;

  case 'НЗ':
    s34 += parseInt(h21, 10)
    vac += 1
  break;

  case 'Я/ЛЧ':
    h21_ = h21.split('/')
    s1 += parseInt(h21_[0], 10)
    s19 += parseInt(h21_[1], 10)
    work += 1
  break;

  case 'Я/Н':
    h21_ = h21.split('/')
    s1 += parseInt(h21_[0], 10)
    s2 += parseInt(h21_[1], 10)
    work += 1
  break;

  case 'РВ/Н':
    h21_ = h21.split('/')
    s3 += parseInt(h21_[0], 10)
    s2 += parseInt(h21_[1], 10)
    work += 1
  break;
}

switch (tt22) {
  case 'Я':
    s1 += parseInt(h22, 10)
    work += 1
  break;

  case 'Н':
    s2 += parseInt(h22, 10)
    work += 1
  break;

  case 'РВ':
    s3 += parseInt(h22, 10)
    work += 1
  break;

  case 'ВМ':
    s5 += parseInt(h22, 10)
    work += 1
  break;

  case 'К':
    s6 += parseInt(h22, 10)
    work += 1
  break;

  case 'ПК':
    s7 += parseInt(h22, 10)
    work += 1
  break;

  case 'ПМ':
    s8 += parseInt(h22, 10)
    work += 1
  break;

  case 'ОТ':
    s9 += parseInt(h22, 10)
    vac += 1
  break;

  case 'ОД':
    s10 += parseInt(h22, 10)
    vac += 1
  break;

  case 'У':
    s11 += parseInt(h22, 10)
    vac += 1
  break;

  case 'УВ':
    s12 += parseInt(h22, 10)
    work += 1
  break;

  case 'УД':
    s13 += parseInt(h22, 10)
    vac += 1
  break;

  case 'Р':
    s14 += parseInt(h22, 10)
    vac += 1
  break;

  case 'ОЖ':
    s15 += parseInt(h22, 10)
    vac += 1
  break;

  case 'ДО':
    s16 += parseInt(h22, 10)
    vac += 1
  break;

  case 'Б':
    s17 += parseInt(h22, 10)
    vac += 1
  break;

  case 'Т':
    s18 += parseInt(h22, 10)
    vac += 1
  break;

  case 'ЛЧ':
    s19 += parseInt(h22, 10)
    vac += 1
  break;

  case 'ПВ':
    s20 += parseInt(h22, 10)
    vac += 1
  break;

  case 'Г':
    s21 += parseInt(h22, 10)
    vac += 1
  break;

  case 'ПР':
    s22 += parseInt(h22, 10)
    vac += 1
  break;

  case 'НС':
    s23 += parseInt(h22, 10)
    work += 1
  break;

  case 'В':
    s24 += parseInt(h22, 10)
    vac += 1

  break;

  case 'ОВ':
    s25 += parseInt(h22, 10)
    vac += 1
  break;

  case 'НВ':
    s26 += parseInt(h22, 10)
    vac += 1
  break;

  case 'ЗБ':
    s27 += parseInt(h22, 10)
    vac += 1
  break;

  case 'НН':
    s28 += parseInt(h22, 10)
    vac += 1
  break;

  case 'РП':
    s29 += parseInt(h22, 10)
    vac += 1
  break;

  case 'НП':
    s30 += parseInt(h22, 10)
    vac += 1
  break;

  case 'ВП':
    s31 += parseInt(h22, 10)
    vac += 1
  break;

  case 'НО':
    s32 += parseInt(h22, 10)
    vac += 1
  break;

  case 'НБ':
    s33 += parseInt(h22, 10)
    vac += 1
  break;

  case 'НЗ':
    s34 += parseInt(h22, 10)
    vac += 1
  break;

  case 'Я/ЛЧ':
    h22_ = h22.split('/')
    s1 += parseInt(h22_[0], 10)
    s19 += parseInt(h22_[1], 10)
    console.log(h22_[1])
    work += 1
  break;

  case 'Я/Н':
    h22_ = h22.split('/')
    s1 += parseInt(h22_[0], 10)
    s2 += parseInt(h22_[1], 10)
    work += 1
  break;

  case 'РВ/Н':
    h22_ = h22.split('/')
    s3 += parseInt(h22_[0], 10)
    s2 += parseInt(h22_[1], 10)
    work += 1
  break;
}

switch (tt23) {
  case 'Я':
    s1 += parseInt(h23, 10)
    work += 1
  break;

  case 'Н':
    s2 += parseInt(h23, 10)
    work += 1
  break;

  case 'РВ':
    s3 += parseInt(h23, 10)
    work += 1
  break;

  case 'ВМ':
    s5 += parseInt(h23, 10)
    work += 1
  break;

  case 'К':
    s6 += parseInt(h23, 10)
    work += 1
  break;

  case 'ПК':
    s7 += parseInt(h23, 10)
    work += 1
  break;

  case 'ПМ':
    s8 += parseInt(h23, 10)
    work += 1
  break;

  case 'ОТ':
    s9 += parseInt(h23, 10)
    vac += 1
  break;

  case 'ОД':
    s10 += parseInt(h23, 10)
    vac += 1
  break;

  case 'У':
    s11 += parseInt(h23, 10)
    vac += 1
  break;

  case 'УВ':
    s12 += parseInt(h23, 10)
    work += 1
  break;

  case 'УД':
    s13 += parseInt(h23, 10)
    vac += 1
  break;

  case 'Р':
    s14 += parseInt(h23, 10)
    vac += 1
  break;

  case 'ОЖ':
    s15 += parseInt(h23, 10)
    vac += 1
  break;

  case 'ДО':
    s16 += parseInt(h23, 10)
    vac += 1
  break;

  case 'Б':
    s17 += parseInt(h23, 10)
    vac += 1
  break;

  case 'Т':
    s18 += parseInt(h23, 10)
    vac += 1
  break;

  case 'ЛЧ':
    s19 += parseInt(h23, 10)
    vac += 1
  break;

  case 'ПВ':
    s20 += parseInt(h23, 10)
    vac += 1
  break;

  case 'Г':
    s21 += parseInt(h23, 10)
    vac += 1
  break;

  case 'ПР':
    s22 += parseInt(h23, 10)
    vac += 1
  break;

  case 'НС':
    s23 += parseInt(h23, 10)
    work += 1
  break;

  case 'В':
    s24 += parseInt(h23, 10)
    vac += 1

  break;

  case 'ОВ':
    s25 += parseInt(h23, 10)
    vac += 1
  break;

  case 'НВ':
    s26 += parseInt(h23, 10)
    vac += 1
  break;

  case 'ЗБ':
    s27 += parseInt(h23, 10)
    vac += 1
  break;

  case 'НН':
    s28 += parseInt(h23, 10)
    vac += 1
  break;

  case 'РП':
    s29 += parseInt(h23, 10)
    vac += 1
  break;

  case 'НП':
    s30 += parseInt(h23, 10)
    vac += 1
  break;

  case 'ВП':
    s31 += parseInt(h23, 10)
    vac += 1
  break;

  case 'НО':
    s32 += parseInt(h23, 10)
    vac += 1
  break;

  case 'НБ':
    s33 += parseInt(h23, 10)
    vac += 1
  break;

  case 'НЗ':
    s34 += parseInt(h23, 10)
    vac += 1
  break;

  case 'Я/ЛЧ':
    h23_ = h23.split('/')
    s1 += parseInt(h23_[0], 10)
    s19 += parseInt(h23_[1], 10)
    work += 1
  break;

  case 'Я/Н':
    h23_ = h23.split('/')
    s1 += parseInt(h23_[0], 10)
    s2 += parseInt(h23_[1], 10)
    work += 1
  break;

  case 'РВ/Н':
    h23_ = h23.split('/')
    s3 += parseInt(h23_[0], 10)
    s2 += parseInt(h23_[1], 10)
    work += 1
  break;
}

switch (tt24) {
  case 'Я':
    s1 += parseInt(h24, 10)
    work += 1
  break;

  case 'Н':
    s2 += parseInt(h24, 10)
    work += 1
  break;

  case 'РВ':
    s3 += parseInt(h24, 10)
    work += 1
  break;

  case 'ВМ':
    s5 += parseInt(h24, 10)
    work += 1
  break;

  case 'К':
    s6 += parseInt(h24, 10)
    work += 1
  break;

  case 'ПК':
    s7 += parseInt(h24, 10)
    work += 1
  break;

  case 'ПМ':
    s8 += parseInt(h24, 10)
    work += 1
  break;

  case 'ОТ':
    s9 += parseInt(h24, 10)
    vac += 1
  break;

  case 'ОД':
    s10 += parseInt(h24, 10)
    vac += 1
  break;

  case 'У':
    s11 += parseInt(h24, 10)
    vac += 1
  break;

  case 'УВ':
    s12 += parseInt(h24, 10)
    work += 1
  break;

  case 'УД':
    s13 += parseInt(h24, 10)
    vac += 1
  break;

  case 'Р':
    s14 += parseInt(h24, 10)
    vac += 1
  break;

  case 'ОЖ':
    s15 += parseInt(h24, 10)
    vac += 1
  break;

  case 'ДО':
    s16 += parseInt(h24, 10)
    vac += 1
  break;

  case 'Б':
    s17 += parseInt(h24, 10)
    vac += 1
  break;

  case 'Т':
    s18 += parseInt(h24, 10)
    vac += 1
  break;

  case 'ЛЧ':
    s19 += parseInt(h24, 10)
    vac += 1
  break;

  case 'ПВ':
    s20 += parseInt(h24, 10)
    vac += 1
  break;

  case 'Г':
    s21 += parseInt(h24, 10)
    vac += 1
  break;

  case 'ПР':
    s22 += parseInt(h24, 10)
    vac += 1
  break;

  case 'НС':
    s23 += parseInt(h24, 10)
    work += 1
  break;

  case 'В':
    s24 += parseInt(h24, 10)
    vac += 1

  break;

  case 'ОВ':
    s25 += parseInt(h24, 10)
    vac += 1
  break;

  case 'НВ':
    s26 += parseInt(h24, 10)
    vac += 1
  break;

  case 'ЗБ':
    s27 += parseInt(h24, 10)
    vac += 1
  break;

  case 'НН':
    s28 += parseInt(h24, 10)
    vac += 1
  break;

  case 'РП':
    s29 += parseInt(h24, 10)
    vac += 1
  break;

  case 'НП':
    s30 += parseInt(h24, 10)
    vac += 1
  break;

  case 'ВП':
    s31 += parseInt(h24, 10)
    vac += 1
  break;

  case 'НО':
    s32 += parseInt(h24, 10)
    vac += 1
  break;

  case 'НБ':
    s33 += parseInt(h24, 10)
    vac += 1
  break;

  case 'НЗ':
    s34 += parseInt(h24, 10)
    vac += 1
  break;

  case 'Я/ЛЧ':
    h24_ = h24.split('/')
    s1 += parseInt(h24_[0], 10)
    s19 += parseInt(h24_[1], 10)
    work += 1
  break;

  case 'Я/Н':
    h24_ = h24.split('/')
    s1 += parseInt(h24_[0], 10)
    s2 += parseInt(h24_[1], 10)
    work += 1
  break;

  case 'РВ/Н':
    h24_ = h24.split('/')
    s3 += parseInt(h24_[0], 10)
    s2 += parseInt(h24_[1], 10)
    work += 1
  break;
}

switch (tt25) {
  case 'Я':
    s1 += parseInt(h25, 10)
    work += 1
  break;

  case 'Н':
    s2 += parseInt(h25, 10)
    work += 1
  break;

  case 'РВ':
    s3 += parseInt(h25, 10)
    work += 1
  break;

  case 'ВМ':
    s5 += parseInt(h25, 10)
    work += 1
  break;

  case 'К':
    s6 += parseInt(h25, 10)
    work += 1
  break;

  case 'ПК':
    s7 += parseInt(h25, 10)
    work += 1
  break;

  case 'ПМ':
    s8 += parseInt(h25, 10)
    work += 1
  break;

  case 'ОТ':
    s9 += parseInt(h25, 10)
    vac += 1
  break;

  case 'ОД':
    s10 += parseInt(h25, 10)
    vac += 1
  break;

  case 'У':
    s11 += parseInt(h25, 10)
    vac += 1
  break;

  case 'УВ':
    s12 += parseInt(h25, 10)
    work += 1
  break;

  case 'УД':
    s13 += parseInt(h25, 10)
    vac += 1
  break;

  case 'Р':
    s14 += parseInt(h25, 10)
    vac += 1
  break;

  case 'ОЖ':
    s15 += parseInt(h25, 10)
    vac += 1
  break;

  case 'ДО':
    s16 += parseInt(h25, 10)
    vac += 1
  break;

  case 'Б':
    s17 += parseInt(h25, 10)
    vac += 1
  break;

  case 'Т':
    s18 += parseInt(h25, 10)
    vac += 1
  break;

  case 'ЛЧ':
    s19 += parseInt(h25, 10)
    vac += 1
  break;

  case 'ПВ':
    s20 += parseInt(h25, 10)
    vac += 1
  break;

  case 'Г':
    s21 += parseInt(h25, 10)
    vac += 1
  break;

  case 'ПР':
    s22 += parseInt(h25, 10)
    vac += 1
  break;

  case 'НС':
    s23 += parseInt(h25, 10)
    work += 1
  break;

  case 'В':
    s24 += parseInt(h25, 10)
    vac += 1

  break;

  case 'ОВ':
    s25 += parseInt(h25, 10)
    vac += 1
  break;

  case 'НВ':
    s26 += parseInt(h25, 10)
    vac += 1
  break;

  case 'ЗБ':
    s27 += parseInt(h25, 10)
    vac += 1
  break;

  case 'НН':
    s28 += parseInt(h25, 10)
    vac += 1
  break;

  case 'РП':
    s29 += parseInt(h25, 10)
    vac += 1
  break;

  case 'НП':
    s30 += parseInt(h25, 10)
    vac += 1
  break;

  case 'ВП':
    s31 += parseInt(h25, 10)
    vac += 1
  break;

  case 'НО':
    s32 += parseInt(h25, 10)
    vac += 1
  break;

  case 'НБ':
    s33 += parseInt(h25, 10)
    vac += 1
  break;

  case 'НЗ':
    s34 += parseInt(h25, 10)
    vac += 1
  break;

  case 'Я/ЛЧ':
    h25_ = h25.split('/')
    s1 += parseInt(h25_[0], 10)
    s19 += parseInt(h25_[1], 10)
    work += 1
  break;

  case 'Я/Н':
    h25_ = h25.split('/')
    s1 += parseInt(h25_[0], 10)
    s2 += parseInt(h25_[1], 10)
    work += 1
  break;

  case 'РВ/Н':
    h25_ = h25.split('/')
    s3 += parseInt(h25_[0], 10)
    s2 += parseInt(h25_[1], 10)
    work += 1
  break;
}

switch (tt26) {
  case 'Я':
    s1 += parseInt(h26, 10)
    work += 1
  break;

  case 'Н':
    s2 += parseInt(h26, 10)
    work += 1
  break;

  case 'РВ':
    s3 += parseInt(h26, 10)
    work += 1
  break;

  case 'ВМ':
    s5 += parseInt(h26, 10)
    work += 1
  break;

  case 'К':
    s6 += parseInt(h26, 10)
    work += 1
  break;

  case 'ПК':
    s7 += parseInt(h26, 10)
    work += 1
  break;

  case 'ПМ':
    s8 += parseInt(h26, 10)
    work += 1
  break;

  case 'ОТ':
    s9 += parseInt(h26, 10)
    vac += 1
  break;

  case 'ОД':
    s10 += parseInt(h26, 10)
    vac += 1
  break;

  case 'У':
    s11 += parseInt(h26, 10)
    vac += 1
  break;

  case 'УВ':
    s12 += parseInt(h26, 10)
    work += 1
  break;

  case 'УД':
    s13 += parseInt(h26, 10)
    vac += 1
  break;

  case 'Р':
    s14 += parseInt(h26, 10)
    vac += 1
  break;

  case 'ОЖ':
    s15 += parseInt(h26, 10)
    vac += 1
  break;

  case 'ДО':
    s16 += parseInt(h26, 10)
    vac += 1
  break;

  case 'Б':
    s17 += parseInt(h26, 10)
    vac += 1
  break;

  case 'Т':
    s18 += parseInt(h26, 10)
    vac += 1
  break;

  case 'ЛЧ':
    s19 += parseInt(h26, 10)
    vac += 1
  break;

  case 'ПВ':
    s20 += parseInt(h26, 10)
    vac += 1
  break;

  case 'Г':
    s21 += parseInt(h26, 10)
    vac += 1
  break;

  case 'ПР':
    s22 += parseInt(h26, 10)
    vac += 1
  break;

  case 'НС':
    s23 += parseInt(h26, 10)
    work += 1
  break;

  case 'В':
    s24 += parseInt(h26, 10)
    vac += 1

  break;

  case 'ОВ':
    s25 += parseInt(h26, 10)
    vac += 1
  break;

  case 'НВ':
    s26 += parseInt(h26, 10)
    vac += 1
  break;

  case 'ЗБ':
    s27 += parseInt(h26, 10)
    vac += 1
  break;

  case 'НН':
    s28 += parseInt(h26, 10)
    vac += 1
  break;

  case 'РП':
    s29 += parseInt(h26, 10)
    vac += 1
  break;

  case 'НП':
    s30 += parseInt(h26, 10)
    vac += 1
  break;

  case 'ВП':
    s31 += parseInt(h26, 10)
    vac += 1
  break;

  case 'НО':
    s32 += parseInt(h26, 10)
    vac += 1
  break;

  case 'НБ':
    s33 += parseInt(h26, 10)
    vac += 1
  break;

  case 'НЗ':
    s34 += parseInt(h26, 10)
    vac += 1
  break;

  case 'Я/ЛЧ':
    h26_ = h26.split('/')
    s1 += parseInt(h26_[0], 10)
    s19 += parseInt(h26_[1], 10)
    work += 1
  break;

  case 'Я/Н':
    h26_ = h26.split('/')
    s1 += parseInt(h26_[0], 10)
    s2 += parseInt(h26_[1], 10)
    work += 1
  break;

  case 'РВ/Н':
    h26_ = h26.split('/')
    s3 += parseInt(h26_[0], 10)
    s2 += parseInt(h26_[1], 10)
    work += 1
  break;
}

switch (tt27) {
  case 'Я':
    s1 += parseInt(h27, 10)
    work += 1
  break;

  case 'Н':
    s2 += parseInt(h27, 10)
    work += 1
  break;

  case 'РВ':
    s3 += parseInt(h27, 10)
    work += 1
  break;

  case 'ВМ':
    s5 += parseInt(h27, 10)
    work += 1
  break;

  case 'К':
    s6 += parseInt(h27, 10)
    work += 1
  break;

  case 'ПК':
    s7 += parseInt(h27, 10)
    work += 1
  break;

  case 'ПМ':
    s8 += parseInt(h27, 10)
    work += 1
  break;

  case 'ОТ':
    s9 += parseInt(h27, 10)
    vac += 1
  break;

  case 'ОД':
    s10 += parseInt(h27, 10)
    vac += 1
  break;

  case 'У':
    s11 += parseInt(h27, 10)
    vac += 1
  break;

  case 'УВ':
    s12 += parseInt(h27, 10)
    work += 1
  break;

  case 'УД':
    s13 += parseInt(h27, 10)
    vac += 1
  break;

  case 'Р':
    s14 += parseInt(h27, 10)
    vac += 1
  break;

  case 'ОЖ':
    s15 += parseInt(h27, 10)
    vac += 1
  break;

  case 'ДО':
    s16 += parseInt(h27, 10)
    vac += 1
  break;

  case 'Б':
    s17 += parseInt(h27, 10)
    vac += 1
  break;

  case 'Т':
    s18 += parseInt(h27, 10)
    vac += 1
  break;

  case 'ЛЧ':
    s19 += parseInt(h27, 10)
    vac += 1
  break;

  case 'ПВ':
    s20 += parseInt(h27, 10)
    vac += 1
  break;

  case 'Г':
    s21 += parseInt(h27, 10)
    vac += 1
  break;

  case 'ПР':
    s22 += parseInt(h27, 10)
    vac += 1
  break;

  case 'НС':
    s23 += parseInt(h27, 10)
    work += 1
  break;

  case 'В':
    s24 += parseInt(h27, 10)
    vac += 1

  break;

  case 'ОВ':
    s25 += parseInt(h27, 10)
    vac += 1
  break;

  case 'НВ':
    s26 += parseInt(h27, 10)
    vac += 1
  break;

  case 'ЗБ':
    s27 += parseInt(h27, 10)
    vac += 1
  break;

  case 'НН':
    s28 += parseInt(h27, 10)
    vac += 1
  break;

  case 'РП':
    s29 += parseInt(h27, 10)
    vac += 1
  break;

  case 'НП':
    s30 += parseInt(h27, 10)
    vac += 1
  break;

  case 'ВП':
    s31 += parseInt(h27, 10)
    vac += 1
  break;

  case 'НО':
    s32 += parseInt(h27, 10)
    vac += 1
  break;

  case 'НБ':
    s33 += parseInt(h27, 10)
    vac += 1
  break;

  case 'НЗ':
    s34 += parseInt(h27, 10)
    vac += 1
  break;

  case 'Я/ЛЧ':
    h27_ = h27.split('/')
    s1 += parseInt(h27_[0], 10)
    s19 += parseInt(h27_[1], 10)
    work += 1
  break;

  case 'Я/Н':
    h27_ = h27.split('/')
    s1 += parseInt(h27_[0], 10)
    s2 += parseInt(h27_[1], 10)
    work += 1
  break;

  case 'РВ/Н':
    h27_ = h27.split('/')
    s3 += parseInt(h27_[0], 10)
    s2 += parseInt(h27_[1], 10)
    work += 1
  break;
}

switch (tt28) {
  case 'Я':
    s1 += parseInt(h28, 10)
    work += 1
  break;

  case 'Н':
    s2 += parseInt(h28, 10)
    work += 1
  break;

  case 'РВ':
    s3 += parseInt(h28, 10)
    work += 1
  break;

  case 'ВМ':
    s5 += parseInt(h28, 10)
    work += 1
  break;

  case 'К':
    s6 += parseInt(h28, 10)
    work += 1
  break;

  case 'ПК':
    s7 += parseInt(h28, 10)
    work += 1
  break;

  case 'ПМ':
    s8 += parseInt(h28, 10)
    work += 1
  break;

  case 'ОТ':
    s9 += parseInt(h28, 10)
    vac += 1
  break;

  case 'ОД':
    s10 += parseInt(h28, 10)
    vac += 1
  break;

  case 'У':
    s11 += parseInt(h28, 10)
    vac += 1
  break;

  case 'УВ':
    s12 += parseInt(h28, 10)
    work += 1
  break;

  case 'УД':
    s13 += parseInt(h28, 10)
    vac += 1
  break;

  case 'Р':
    s14 += parseInt(h28, 10)
    vac += 1
  break;

  case 'ОЖ':
    s15 += parseInt(h28, 10)
    vac += 1
  break;

  case 'ДО':
    s16 += parseInt(h28, 10)
    vac += 1
  break;

  case 'Б':
    s17 += parseInt(h28, 10)
    vac += 1
  break;

  case 'Т':
    s18 += parseInt(h28, 10)
    vac += 1
  break;

  case 'ЛЧ':
    s19 += parseInt(h28, 10)
    vac += 1
  break;

  case 'ПВ':
    s20 += parseInt(h28, 10)
    vac += 1
  break;

  case 'Г':
    s21 += parseInt(h28, 10)
    vac += 1
  break;

  case 'ПР':
    s22 += parseInt(h28, 10)
    vac += 1
  break;

  case 'НС':
    s23 += parseInt(h28, 10)
    work += 1
  break;

  case 'В':
    s24 += parseInt(h28, 10)
    vac += 1

  break;

  case 'ОВ':
    s25 += parseInt(h28, 10)
    vac += 1
  break;

  case 'НВ':
    s26 += parseInt(h28, 10)
    vac += 1
  break;

  case 'ЗБ':
    s27 += parseInt(h28, 10)
    vac += 1
  break;

  case 'НН':
    s28 += parseInt(h28, 10)
    vac += 1
  break;

  case 'РП':
    s29 += parseInt(h28, 10)
    vac += 1
  break;

  case 'НП':
    s30 += parseInt(h28, 10)
    vac += 1
  break;

  case 'ВП':
    s31 += parseInt(h28, 10)
    vac += 1
  break;

  case 'НО':
    s32 += parseInt(h28, 10)
    vac += 1
  break;

  case 'НБ':
    s33 += parseInt(h28, 10)
    vac += 1
  break;

  case 'НЗ':
    s34 += parseInt(h28, 10)
    vac += 1
  break;

  case 'Я/ЛЧ':
    h28_ = h28.split('/')
    s1 += parseInt(h28_[0], 10)
    s19 += parseInt(h28_[1], 10)
    work += 1
  break;

  case 'Я/Н':
    h28_ = h28.split('/')
    s1 += parseInt(h28_[0], 10)
    s2 += parseInt(h28_[1], 10)
    work += 1
  break;

  case 'РВ/Н':
    h28_ = h28.split('/')
    s3 += parseInt(h28_[0], 10)
    s2 += parseInt(h28_[1], 10)
    work += 1
  break;
}

switch (tt29) {
  case 'Я':
    s1 += parseInt(h29, 10)
    work += 1
  break;

  case 'Н':
    s2 += parseInt(h29, 10)
    work += 1
  break;

  case 'РВ':
    s3 += parseInt(h29, 10)
    work += 1
  break;

  case 'ВМ':
    s5 += parseInt(h29, 10)
    work += 1
  break;

  case 'К':
    s6 += parseInt(h29, 10)
    work += 1
  break;

  case 'ПК':
    s7 += parseInt(h29, 10)
    work += 1
  break;

  case 'ПМ':
    s8 += parseInt(h29, 10)
    work += 1
  break;

  case 'ОТ':
    s9 += parseInt(h29, 10)
    vac += 1
  break;

  case 'ОД':
    s10 += parseInt(h29, 10)
    vac += 1
  break;

  case 'У':
    s11 += parseInt(h29, 10)
    vac += 1
  break;

  case 'УВ':
    s12 += parseInt(h29, 10)
    work += 1
  break;

  case 'УД':
    s13 += parseInt(h29, 10)
    vac += 1
  break;

  case 'Р':
    s14 += parseInt(h29, 10)
    vac += 1
  break;

  case 'ОЖ':
    s15 += parseInt(h29, 10)
    vac += 1
  break;

  case 'ДО':
    s16 += parseInt(h29, 10)
    vac += 1
  break;

  case 'Б':
    s17 += parseInt(h29, 10)
    vac += 1
  break;

  case 'Т':
    s18 += parseInt(h29, 10)
    vac += 1
  break;

  case 'ЛЧ':
    s19 += parseInt(h29, 10)
    vac += 1
  break;

  case 'ПВ':
    s20 += parseInt(h29, 10)
    vac += 1
  break;

  case 'Г':
    s21 += parseInt(h29, 10)
    vac += 1
  break;

  case 'ПР':
    s22 += parseInt(h29, 10)
    vac += 1
  break;

  case 'НС':
    s23 += parseInt(h29, 10)
    work += 1
  break;

  case 'В':
    s24 += parseInt(h29, 10)
    vac += 1

  break;

  case 'ОВ':
    s25 += parseInt(h29, 10)
    vac += 1
  break;

  case 'НВ':
    s26 += parseInt(h29, 10)
    vac += 1
  break;

  case 'ЗБ':
    s27 += parseInt(h29, 10)
    vac += 1
  break;

  case 'НН':
    s28 += parseInt(h29, 10)
    vac += 1
  break;

  case 'РП':
    s29 += parseInt(h29, 10)
    vac += 1
  break;

  case 'НП':
    s30 += parseInt(h29, 10)
    vac += 1
  break;

  case 'ВП':
    s31 += parseInt(h29, 10)
    vac += 1
  break;

  case 'НО':
    s32 += parseInt(h29, 10)
    vac += 1
  break;

  case 'НБ':
    s33 += parseInt(h29, 10)
    vac += 1
  break;

  case 'НЗ':
    s34 += parseInt(h29, 10)
    vac += 1
  break;

  case 'Я/ЛЧ':
    h29_ = h29.split('/')
    s1 += parseInt(h29_[0], 10)
    s19 += parseInt(h29_[1], 10)
    console.log(h29_[2])
    work += 1
  break;

  case 'Я/Н':
    h29_ = h29.split('/')
    s1 += parseInt(h29_[0], 10)
    s2 += parseInt(h29_[1], 10)
    work += 1
  break;

  case 'РВ/Н':
    h29_ = h29.split('/')
    s3 += parseInt(h29_[0], 10)
    s2 += parseInt(h29_[1], 10)
    work += 1
  break;
}

switch (tt30) {
  case 'Я':
    s1 += parseInt(h30, 10)
    work += 1
  break;

  case 'Н':
    s2 += parseInt(h30, 10)
    work += 1
  break;

  case 'РВ':
    s3 += parseInt(h30, 10)
    work += 1
  break;

  case 'ВМ':
    s5 += parseInt(h30, 10)
    work += 1
  break;

  case 'К':
    s6 += parseInt(h30, 10)
    work += 1
  break;

  case 'ПК':
    s7 += parseInt(h30, 10)
    work += 1
  break;

  case 'ПМ':
    s8 += parseInt(h30, 10)
    work += 1
  break;

  case 'ОТ':
    s9 += parseInt(h30, 10)
    vac += 1
  break;

  case 'ОД':
    s10 += parseInt(h30, 10)
    vac += 1
  break;

  case 'У':
    s11 += parseInt(h30, 10)
    vac += 1
  break;

  case 'УВ':
    s12 += parseInt(h30, 10)
    work += 1
  break;

  case 'УД':
    s13 += parseInt(h30, 10)
    vac += 1
  break;

  case 'Р':
    s14 += parseInt(h30, 10)
    vac += 1
  break;

  case 'ОЖ':
    s15 += parseInt(h30, 10)
    vac += 1
  break;

  case 'ДО':
    s16 += parseInt(h30, 10)
    vac += 1
  break;

  case 'Б':
    s17 += parseInt(h30, 10)
    vac += 1
  break;

  case 'Т':
    s18 += parseInt(h30, 10)
    vac += 1
  break;

  case 'ЛЧ':
    s19 += parseInt(h30, 10)
    vac += 1
  break;

  case 'ПВ':
    s20 += parseInt(h30, 10)
    vac += 1
  break;

  case 'Г':
    s21 += parseInt(h30, 10)
    vac += 1
  break;

  case 'ПР':
    s22 += parseInt(h30, 10)
    vac += 1
  break;

  case 'НС':
    s23 += parseInt(h30, 10)
    work += 1
  break;

  case 'В':
    s24 += parseInt(h30, 10)
    vac += 1

  break;

  case 'ОВ':
    s25 += parseInt(h30, 10)
    vac += 1
  break;

  case 'НВ':
    s26 += parseInt(h30, 10)
    vac += 1
  break;

  case 'ЗБ':
    s27 += parseInt(h30, 10)
    vac += 1
  break;

  case 'НН':
    s28 += parseInt(h30, 10)
    vac += 1
  break;

  case 'РП':
    s29 += parseInt(h30, 10)
    vac += 1
  break;

  case 'НП':
    s30 += parseInt(h30, 10)
    vac += 1
  break;

  case 'ВП':
    s31 += parseInt(h30, 10)
    vac += 1
  break;

  case 'НО':
    s32 += parseInt(h30, 10)
    vac += 1
  break;

  case 'НБ':
    s33 += parseInt(h30, 10)
    vac += 1
  break;

  case 'НЗ':
    s34 += parseInt(h30, 10)
    vac += 1
  break;

  case 'Я/ЛЧ':
    h30_ = h30.split('/')
    s1 += parseInt(h30_[0], 10)
    s19 += parseInt(h30_[1], 10)
    work += 1
  break;

  case 'Я/Н':
    h30_ = h30.split('/')
    s1 += parseInt(h30_[0], 10)
    s2 += parseInt(h30_[1], 10)
    work += 1
  break;

  case 'РВ/Н':
    h30_ = h30.split('/')
    s3 += parseInt(h30_[0], 10)
    s2 += parseInt(h30_[1], 10)
    work += 1
  break;
}

switch (tt31) {
  case 'Я':
    s1 += parseInt(h31, 10)
    work += 1
  break;

  case 'Н':
    s2 += parseInt(h31, 10)
    work += 1
  break;

  case 'РВ':
    s3 += parseInt(h31, 10)
    work += 1
  break;

  case 'ВМ':
    s5 += parseInt(h31, 10)
    work += 1
  break;

  case 'К':
    s6 += parseInt(h31, 10)
    work += 1
  break;

  case 'ПК':
    s7 += parseInt(h31, 10)
    work += 1
  break;

  case 'ПМ':
    s8 += parseInt(h31, 10)
    work += 1
  break;

  case 'ОТ':
    s9 += parseInt(h31, 10)
    vac += 1
  break;

  case 'ОД':
    s10 += parseInt(h31, 10)
    vac += 1
  break;

  case 'У':
    s11 += parseInt(h31, 10)
    vac += 1
  break;

  case 'УВ':
    s12 += parseInt(h31, 10)
    work += 1
  break;

  case 'УД':
    s13 += parseInt(h31, 10)
    vac += 1
  break;

  case 'Р':
    s14 += parseInt(h31, 10)
    vac += 1
  break;

  case 'ОЖ':
    s15 += parseInt(h31, 10)
    vac += 1
  break;

  case 'ДО':
    s16 += parseInt(h31, 10)
    vac += 1
  break;

  case 'Б':
    s17 += parseInt(h31, 10)
    vac += 1
  break;

  case 'Т':
    s18 += parseInt(h31, 10)
    vac += 1
  break;

  case 'ЛЧ':
    s19 += parseInt(h31, 10)
    vac += 1
  break;

  case 'ПВ':
    s20 += parseInt(h31, 10)
    vac += 1
  break;

  case 'Г':
    s21 += parseInt(h31, 10)
    vac += 1
  break;

  case 'ПР':
    s22 += parseInt(h31, 10)
    vac += 1
  break;

  case 'НС':
    s23 += parseInt(h31, 10)
    work += 1
  break;

  case 'В':
    s24 += parseInt(h31, 10)
    vac += 1

  break;

  case 'ОВ':
    s25 += parseInt(h31, 10)
    vac += 1
  break;

  case 'НВ':
    s26 += parseInt(h31, 10)
    vac += 1
  break;

  case 'ЗБ':
    s27 += parseInt(h31, 10)
    vac += 1
  break;

  case 'НН':
    s28 += parseInt(h31, 10)
    vac += 1
  break;

  case 'РП':
    s29 += parseInt(h31, 10)
    vac += 1
  break;

  case 'НП':
    s30 += parseInt(h31, 10)
    vac += 1
  break;

  case 'ВП':
    s31 += parseInt(h31, 10)
    vac += 1
  break;

  case 'НО':
    s32 += parseInt(h31, 10)
    vac += 1
  break;

  case 'НБ':
    s33 += parseInt(h31, 10)
    vac += 1
  break;

  case 'НЗ':
    s34 += parseInt(h31, 10)
    vac += 1
  break;

  case 'Я/ЛЧ':
    h31_ = h31.split('/')
    s1 += parseInt(h31_[0], 10)
    s19 += parseInt(h31_[1], 10)
    work += 1
  break;

  case 'Я/Н':
    h31_ = h31.split('/')
    s1 += parseInt(h31_[0], 10)
    s2 += parseInt(h31_[1], 10)
    work += 1
  break;

  case 'РВ/Н':
    h31_ = h31.split('/')
    s3 += parseInt(h31_[0], 10)
    s2 += parseInt(h31_[1], 10)
    work += 1
  break;
}

h_work = s1 + s5 + s3 + s6 + s7 + s8 + s19 + s23

h_vac = s9 + s10 + s11 + s13 + s14 + s15 + s16 + s17 + s18 + s20 + s21 + s22 + s24 + s25 + s26 + s27 + s28 + s29 + s30 + s31 + s32 + s33 + s34


$('#id_sHours1').val(s1)
$('#id_sHours2').val(s2)
$('#id_sHours3').val(s3)
$('#id_sHours4').val(s4)
$('#id_sHours5').val(s5)
$('#id_sHours6').val(s6)
$('#id_sHours7').val(s7)
$('#id_sHours8').val(s8)
$('#id_sHours9').val(s9)
$('#id_sHours10').val(s10)
$('#id_sHours11').val(s11)
$('#id_sHours12').val(s12)
$('#id_sHours13').val(s13)
$('#id_sHours14').val(s14)
$('#id_sHours15').val(s15)
$('#id_sHours16').val(s16)
$('#id_sHours17').val(s17)
$('#id_sHours18').val(s18)
$('#id_sHours19').val(s19)
$('#id_sHours20').val(s20)
$('#id_sHours21').val(s21)
$('#id_sHours22').val(s22)
$('#id_sHours23').val(s23)
$('#id_sHours24').val(s24)
$('#id_sHours25').val(s25)
$('#id_sHours26').val(s26)
$('#id_sHours27').val(s27)
$('#id_sHours28').val(s28)
$('#id_sHours29').val(s29)
$('#id_sHours30').val(s30)
$('#id_sHours31').val(s31)
$('#id_sHours32').val(s32)
$('#id_sHours33').val(s33)
$('#id_sHours34').val(s34)
$('#id_w_days').val(work)
$('#id_w_hours').val(h_work)
$('#id_v_days').val(vac)
$('#id_v_hours').val(h_vac)
}

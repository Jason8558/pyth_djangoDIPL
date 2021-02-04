$(document).ready(function(){



let vacs = ['ОТ','ОД','У','УД','Р','ОЖ','ДО','Б','Т','ПВ','Г','ПР','В','ОВ','НВ','ЗБ','НН','РП','НП','ВП','НБ','НО','НЗ','ДБ','ОЗ']

  types = $('.cell_ttime')
  hours = $('.cell_hours')


for (var i = 0; i < types.length; i++) {

  vacs.forEach(function(item, j, arr) {

    if (types[i].innerText == item) {
      hours[i].textContent = ''
    }

});


}
console.log(' ----------- ОТЛАДКА --------------')
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

console.log('year_ - ' + year_ )
console.log('rMonth - ' + rMonth )
days_count = Date.getDaysInMonth(year_, rMonth)





let days29 = $('.day29')
let days30 = $('.day30')
let days31 = $('.day31')


console.log('days29 - ' + days29.length )
console.log('days30 - ' + days30.length )
console.log('days31 - ' + days31.length )
console.log('кол-во дней в месяце - ' + days_count)


switch (days_count) {

case 28:
  for (var i = 0; i < days29.length; i++) {
    days29[i].style.display = 'None'
  }

  for (var i = 0; i < days30.length; i++) {
    days30[i].style.display = 'None'
  }

  for (var i = 0; i < days31.length; i++) {
    days31[i].style.display = 'None'
  }




  break;
default:

}
console.log(' ----------- КОНЕЦ ОТЛАДКИ --------------')
})

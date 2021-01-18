function SelectRepType() {

val_ = $('#rep_select option:selected' ).text()
  console.log(val_)
$('#test').text(val_)

if (val_ == 'Приказы на отпуск') {
$('#rep_param').html(" ")
$('#rep_param').append('<option value="duration">Период</option>');
}

switch (val_) {
  case "Приказы на отпуск":
    $('#rep_param').html(" ")
    $('#rep_param').append('<option value="duration">Период</option>');

    break;
  case "Приказы по другим вопросам":
    $('#rep_param').html(" ")
    $('#rep_param').append('<option value="duration">Период</option>');
    break;

  case "Исходящие документы":
    $('#rep_param').html(" ")
    $('#rep_param').append('<option value="duration">Период</option>');
    $('#rep_param1').html(" ")
    $('#rep_param1').append('<option value="duration">Адресат</option>');
    break;

  case "Приказы о командироках":
    $('#rep_param').html(" ")
    $('#rep_param').append('<option value="duration">Период</option>');

    $('#rep_param1').html(" ")
    $('#rep_param1').append('<option value="duration">Адресат</option>');
    break;

  default:

}

}

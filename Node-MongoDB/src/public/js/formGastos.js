$(document).ready(function () {
  $('#form_agregar').submit(function (e) {
    e.preventDefault();

    let datos = $(this).serialize();

    $.ajax({
      url: 'http://localhost:3000/agregar',
      method: 'post',
      data: datos,
      success: function (resp) {
        alert(resp);
      },
    });
  });
});

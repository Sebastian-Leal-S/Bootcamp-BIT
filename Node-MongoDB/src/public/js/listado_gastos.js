$(document).ready(function () {
  $.ajax({
    url: 'http://localhost:3000/obtener_gastos',
    method: 'get',
    success: function (resp) {
      console.log(resp);
    },
  });

  function render_table(datos) {
    let cabezera = "<thead><th>Fecha</th><th>Descripcion</th><th>Monto</th></thead>"
  }
});

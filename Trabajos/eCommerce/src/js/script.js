$(function () {
  $('');

  $('#btnProductos').click(function (e) {
    e.preventDefault();
    $('#nosotros').hide();
    $('#carrito').hide();
    $('#productos').show();
  });

  $('#btnCarrito').click(function (e) {
    e.preventDefault();
    $('#productos').hide();
    $('#nosotros').hide();
    $('#carrito').show();
  });

  $('#btnNosotros').click(function (e) {
    e.preventDefault();
    $('#productos').hide();
    $('#carrito').hide();
    $('#nosotros').show();
  });

  const btnPago = $('#btnPagar');

  renderizarListaProductos(productos);
  renderizarTablaCarrito();

  btnPago.on('click', function (e) {
    e.preventDefault();

    const idCompra = 'compra_' + new Date().getTime();
    var carrito = JSON.parse(localStorage.getItem('carrito')) ?? [];
    localStorage.setItem(idCompra, JSON.stringify(carrito));

    localStorage.removeItem('carrito');

    renderizarTablaCarrito();
    renderizarTablaCompras();
  });

  $('#filtro').on('change', function (e) {
    e.preventDefault();
    const categoria = this.value;

    if (categoria != 0) {
      const productosFiltrados = productos.filter(producto => producto.categoria == categoria);
      renderizarListaProductos(productosFiltrados);
    } else {
      renderizarListaProductos(productos);
    }
  });

  function renderizarListaProductos(arrayProd) {
    const listaProductos = $('#listaProductos ').empty();

    arrayProd.forEach(function (producto) {
      const {id, name, precio, descripcion, img} = producto;
      const card = $('<div>', {class: 'col-md-3'}).append(
        $('<div>', {class: 'card mb-3'}).append(
          $('<img>', {class: 'card-img-top', src: img, alt: name}),
          $('<div>', {class: 'card-body text-center'}).append(
            $('<div>', {class: 'd-flex justify-content-between align-items-center mb-2'}).append(
              $('<h5>', {class: 'card-title m-0'}).text(name),
              $('<h5>', {class: 'm-0'}).text(`$${precio}`)
            ),
            $('<p>', {class: 'card-text'}).text(`${descripcion}`),
            $('<form>', {class: 'comprar'})
              .append(
                $('<div>', {class: 'input-group'}).append(
                  $('<input>', {class: 'form-control', type: 'number', name: 'cantidad', value: 1, min: 1}),
                  $('<input>', {class: 'btn btn-primary', type: 'submit', 'data-id': id, value: 'Agregar al carrito'})
                )
              )
              .on('submit', event => {
                agregarProductosCarrito(event, producto);
                renderizarTablaCarrito(carrito);
              })
          )
        )
      );

      listaProductos.append(card);
    });
  }

  function agregarProductosCarrito(event, producto) {
    event.preventDefault();

    const carrito = JSON.parse(localStorage.getItem('carrito')) ?? [];

    const form = event.currentTarget;
    const cantidad = parseInt(form.elements['cantidad'].value);
    const repetido = carrito.find(prodCarrito => prodCarrito.id === producto.id);

    if (repetido) {
      repetido.cantidad = cantidad;
    } else {
      carrito.push({
        id: producto.id,
        name: producto.name,
        precio: producto.precio,
        cantidad: cantidad,
      });
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));
  }

  function renderizarTablaCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) ?? [];

    carrito.length == 0 ? btnPago.prop('disabled', true) : btnPago.prop('disabled', false);

    const tablaCarrito = $('#tablaCarrito').empty();

    carrito.forEach(producto => {
      const {name, cantidad, precio} = producto;

      tablaCarrito.append(
        $('<tr>').append(
          $('<td>').text(name),
          $('<td>').text(cantidad),
          $('<td>').text(precio),
          $('<td>').text(precio * cantidad)
        )
      );
    });

    const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio * producto.cantidad, 0);
    tablaCarrito.append(
      $('<tr>').append($('<th>', {scope: 'row', colspan: '3'}).text('Total'), $('<td>').text(`$${total}`))
    );
  }

  function renderizarTablaCompras() {
    //const carrito = JSON.parse(localStorage.getItem("carrito")) ?? []

    const tablaCarrito = $('#tablaCompras').empty();

    carrito.forEach(producto => {
      const {name, cantidad, precio} = producto;

      tablaCarrito.append(
        $('<tr>').append(
          $('<td>').text(name),
          $('<td>').text(cantidad),
          $('<td>').text(precio),
          $('<td>').text(precio * cantidad)
        )
      );
    });
  }
});

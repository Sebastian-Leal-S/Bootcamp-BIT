$(function () {
  const btnPagar = $('#btnPagar');
  renderizarListaProductos(productos);
  renderizarTablaCarrito();
  renderizarTablaCompras();

  /* Navegacion */
  $('#btnsNavbar button').click(function (e) {
    e.preventDefault();
    const section = $(this).data('section');
    console.log(section);
    $('section').hide();
    $(`#${section}`).show();
  });

  /* Filtra productos por categoria*/
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

  /* Evento pago */
  btnPagar.on('click', function (e) {
    e.preventDefault();

    let carrito = JSON.parse(localStorage.getItem('carrito')) ?? [];
    /* carrito.push({fecha: new Date().toISOString().substring(0, 10)}); */
    const idCompra = 'compra_' + new Date().getTime();
    localStorage.setItem(idCompra, JSON.stringify(carrito));

    localStorage.removeItem('carrito');

    renderizarTablaCarrito();
    renderizarTablaCompras();
  });

  /* Agrega los prodcutos al carrito */
  function agregarProductosCarrito(event, producto) {
    event.preventDefault();

    const carrito = JSON.parse(localStorage.getItem('carrito')) ?? [];

    const form = event.currentTarget;
    const cantidad = parseInt(form.elements['cantidad'].value);
    const repetido = carrito.find(prodCarrito => prodCarrito.id === producto.id);

    if (repetido) {
      repetido.cantidad += cantidad;
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

  /* Renderiza los productos */
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
                  $('<input>', {
                    class: 'form-control',
                    type: 'number',
                    name: 'cantidad',
                    value: 1,
                    min: 1,
                    required: true,
                  }),
                  $('<input>', {
                    class: 'btn btn-primary',
                    type: 'submit',
                    'data-id': id,
                    value: 'Agregar al carrito',
                  })
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

  /* Calula el total de la compra */
  function calcularTotalCompra(compra) {
    return compra.reduce(
      (acumulador, producto) => acumulador + producto.precio * producto.cantidad,
      0
    );
  }

  /* Renderiza los el carrito */
  function renderizarTablaCarrito() {
    const tablaCarrito = $('#tablaCarrito').empty();
    const carrito = JSON.parse(localStorage.getItem('carrito')) ?? [];
    carrito.length == 0 ? btnPagar.prop('disabled', true) : btnPagar.prop('disabled', false);

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

    tablaCarrito.append(
      $('<tr>').append(
        $('<th>', {scope: 'row', colspan: '3'}).text('Total'),
        $('<td>').text(`$${calcularTotalCompra(carrito)}`)
      )
    );
  }

  /* Renderiza tabla de  compras */
  function renderizarTablaCompras() {
    const tablaCompras = $('#tablaCompras').empty();

    const comprasSeparadas = Object.entries(localStorage)
      .filter(([clave, valor]) => clave.startsWith('compra_'))
      .map(([fecha, productos]) => ({fecha, productos: JSON.parse(productos)}));

    for (const compra of comprasSeparadas) {
      const filasProductos = compra.productos.map(producto =>
        $('<tr>').append(
          $('<td>').text(`${new Date(+compra.fecha.split('_')[1]).toLocaleDateString('es-ES')}`),
          $('<td>').text(producto.name),
          $('<td>').text(producto.cantidad),
          $('<td>').text(producto.precio),
          $('<td>').text(producto.precio * producto.cantidad)
        )
      );

      tablaCompras.append(filasProductos);
      tablaCompras.append(
        $('<tr>').append(
          $('<th>', {scope: 'row', colspan: '4'}).text('Total'),
          $('<td>').text(`$${calcularTotalCompra(compra.productos)}`)
        )
      );
    }
  }
});

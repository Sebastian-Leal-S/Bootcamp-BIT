$(function () {
  $("#btnProductos").click(function (e) {
    e.preventDefault();
    $("#nosotros").hide();
    $("#carrito").hide();
    $("#productos").show();
  });

  $("#btnCarrito").click(function (e) {
    e.preventDefault();
    $("#productos").hide();
    $("#nosotros").hide();
    $("#carrito").show();
  });

  $("#btnNosotros").click(function (e) {
    e.preventDefault();
    $("#productos").hide();
    $("#carrito").hide();
    $("#nosotros").show();
  });

  const carrito = JSON.parse(localStorage.getItem("carrito")) ?? []
  
  renderizarListaProductos()
  renderizarTablaCarrito([...carrito])

  function renderizarListaProductos() {
    
    $.each(productos, function(index, product) {
      const card = 
      $("<div>", {"class": "col-md-3"}).append(
        $("<div>", {"class": "card mb-3"}).append(
          $("<img>", {"class": "card-img-top", src: product.img, alt: product.name}),
          $("<div>", {"class": "card-body text-center"}).append(
            $("<div>", {"class": "d-flex justify-content-between align-items-center mb-2"}).append(
              $("<h5>", {"class": "card-title m-0"}).text(product.name),
              $("<h5>", {"class": "m-0"}).text( `$${product.precio}`)
            ),
            $("<p>", {"class": "card-text"}).text(product.descripcion),
            $("<form>", {"class": "comprar"}).append(
              $("<div>", {"class": "input-group"}).append(
                $("<input>", {"class": "form-control", "type": "number", "name": "cantidad", "value": 1}),
                $("<input>", {"class": "btn btn-primary", "type": "submit", "data-id": product.id, "value": "Agregar al carrito"})
              )
            ).on("submit", (event) => {
              event.preventDefault()
  
              const cantidad = parseInt($(event.currentTarget).find("[name='cantidad']").val())
              const repetido = carrito.findIndex((prodCarrito) => prodCarrito.id === product.id)
  
              if (repetido !== -1) {
                carrito[repetido].cantidad = cantidad  
              } else {
                carrito.push({
                  id: product.id,
                  name: product.name,
                  precio: product.precio,
                  cantidad: cantidad
                })
              }
  
              renderizarTablaCarrito(carrito)
              localStorage.setItem("carrito", JSON.stringify(carrito))
            })
          )
        )
      )
  
      $("#listaProductos").append(card);
  
    });
  }

  function renderizarTablaCarrito(carrito) {
    const tablaCarrito = $("#carrito").find("tbody")
    tablaCarrito.empty()

    carrito.forEach(producto => {
      const subtotal = producto.precio * producto.cantidad

      tablaCarrito.append(
        $("<tr>").append(
          $("<td>").text(producto.name),
          $("<td>").text(producto.cantidad),
          $("<td>").text(producto.precio),
          $("<td>").text(subtotal)
        )
      )
    });

    const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio * producto.cantidad, 0)
    tablaCarrito.append(
      $("<tr>").append(
        $("<th>", {"scope": "row", "colspan": "3"}).text("Total"),
        $("<td>").text(`$${total}`)
      )
    )
  }


});

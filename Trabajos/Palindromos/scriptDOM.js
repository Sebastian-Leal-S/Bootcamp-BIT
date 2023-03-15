/* document.getElementById("btn").addEventListener("click", function() {
  let numb = document.getElementById("numb").value

  if (numb % 2 == 0) {
    document.getElementById("respuesta").innerHTML = numb + ", es par";
  }else{
    document.getElementById("respuesta").innerHTML = numb + ", no es par";
  }
}) */

/* function inverso(text) {
  return text.split("").reverse().join("")
}

document.getElementById("text").addEventListener("input", function() {
  let text = document.getElementById("text").value

  document.getElementById("sencillo").innerHTML = text
  document.getElementById("mayuscula").innerHTML = text.toUpperCase()
  document.getElementById("minuscula").innerHTML = text.toLowerCase()
  document.getElementById("cursiva").innerHTML = text.italics()
  document.getElementById("inverso").innerHTML = inverso(text)

}) */

function calcular(ope) {
  let num1 = parseInt(document.getElementById("num1").value)
  let num2 = parseInt(document.getElementById("num2").value)

  let resultado = 0

  switch (ope) {
    case 1:
      resultado = (num1 + num2)
      break;
    case 2:
      resultado = (num1 - num2)
      break;
    case 3:
      resultado = (num1 * num2)
      break;
    case 4:
      resultado = (num1 / num2)
      break;
  
    default:
      alert("Algo fallo")
      break;
  }

  document.getElementById("resultado").innerHTML = resultado
}

document.getElementById("suma").addEventListener("click", function() {
  calcular(1)
})
document.getElementById("resta").addEventListener("click", function() {
  calcular(2)
})
document.getElementById("multiplicacion").addEventListener("click", function() {
  calcular(3)
})
document.getElementById("divicion").addEventListener("click", function() {
  calcular(4)
})

/* EJERCICIO

Se le solicita al usuario que ingrse:
- Nombre, Apellido, Email y Telefono
- Fecha
- Productos (cantidad, nombre del producto y precio)

Cuando haga click en un botón "Generar factura": 
- mostrar todos los datos (ordenados), calculando el total a pagar


FACTURA

nombre apellido
email
telefono

fecha

CANT.  PRODUCTOS    PRECIO
1      Zapatilla    $100
3      Caramelos    $67

Total a pagar= $167 */

let tabla = document.getElementById("tabla")
let btn = document.getElementById("add")

btn.addEventListener("click", function() {
  let fila = document.createElement("tr")
  let colm = document.createElement("td")

  let dato = document.createTextNode("Texto de prueba")

  colm.appendChild(dato)
  fila.appendChild(colm)
  tabla.appendChild(fila)
})

// Codigo escrito por Sebastian Leal S

// Conversor grados celcius a fahrenheit

/* var inputUser = parseInt(prompt("Ingresa grados celcius:"))

alert("La tempera convertida en Fahrenheit es igual a " + (( inputUser * 1.8) + 32 )) */


// Factorial

/* var inputUser = parseInt(prompt("Ingesa un numero para calcular su factorial:"))
var output = 1

for (let i = 1; i <= inputUser; i++) {
  output *= i
}

console.log(output) */


// Fibonacci

/* var num0 = 0
var num1 = 1
var next

var inputUser = parseInt(prompt("Ingresa un numero:"))

for (let i = 0; i <= inputUser; i++) {
  console.log(num0)
  next = num0 + num1
  num0 = num1
  num1 = next
} */


// Priramide

/* var inputUser =  parseInt(prompt("Ingresa un numero:"))
var row = ""
var cont = 0
var aux = inputUser - 1

for (let i = 0; i < ((inputUser * 2) - 1) ; i++) {
  if (cont < inputUser) {
    for (let j = 0; j <= cont; j++) {
      row += "* "
    }
    console.log( row )
    cont++
    row = ""
  } else {
    for (let e = aux; e >= 1; e--) {
      row += "* "
    }
    console.log(row)
    aux--
    row = ""
  }
} */


// ATM

/* const menu = "Ingresa el numero de la opcion deseada:\n1. Extraer\n2. Depositar\n3. Consultar Saldo\n4. Ver Ultimos Movimientos\n5. Salir"
const exitMenu = "Estas seguro de salir de la aplicacion?\n1. Quedarme.\n2. Salir"
const textCredit = "Tu saldo actual es $"

var out = 0
var input = 0

var lastMovements = "Ultimos movimientos:\n"
var credit = 3900
var oldCredit = 0
var conf = 0
var opt = 0

do {
  opt = parseInt(prompt(textCredit + credit + ".\n" + menu))
  switch (opt) {
    case 1: // Extract
      do {
        out = parseInt(prompt(textCredit + credit + "\nCuanto deseas retirar:"))

        if (out >= credit) {
          alert("Saldo insuficiente.\n" + textCredit + credit + "\nVuelde a intentarlo.")
        }else{
          oldCredit = credit
          credit -= out
          lastMovements += "- Extraido: $" + out + "\n"
          alert("Retiro exitoso.\n" + textCredit + credit)
        }
      } while (oldCredit < out);
      
      break;
    case 2: // Deposit
      input = parseInt(prompt(textCredit + credit + "\nCuanto deseas depositar:"))
      lastMovements += "- Depositado: $" + input + "\n"
      credit += input
      alert("Deposito exitoso.\n" + textCredit + credit)
      break;
    case 3: // Consult
      alert(textCredit + credit)
      lastMovements += "- Consultado saldo: $" + credit
      break;
    case 4: // lastMovements
      alert(lastMovements)
      break;
    case 5: // Exit
      conf = 2
      // Comment the previous line and uncomment the next line to enable the validation of exit
      // conf = parseInt(prompt(exitMenu))
      alert("Gracias por usar nuestros servicios.")
      break;
  
    default:
      alert("Ingresa el numero de una opcion valida.")
      break;
  }
} while ( conf != 2); */
const palindromes = [
  "Acaso hubo buhos aca",// True
  "Oro",// True
  "A colima va mi loca",// True
  "Reconocer",// True
  "Aji traga la lagartija",// True
  "Salas",// True
  "texto falso", // False
  "A la torre derrotala",// True
  "texto falso", // False
  "Solos",// True
  "texto falso", // False
  "Ali tomo tila",// True
  "Somos",// True
  "Alli ves sevilla",// True
  "Sus",// True
  "Alli si Maria avisa y asi va a ir a mi silla",// True
  "texto falso", // False
  "A mi me mima",// True
  "Ligar es ser agil",// True
  "Amad a la dama",// True
  "A Mercedes ese de crema",// True
  "Amo la pacifica paloma",// True
  "Ana la tacana catalana",// True
  "Ana lleva al oso la avellana",// True
  "A ti no bonita",// True
  "Anita la gorda lagartona no traga la droga latina",// True
  "82228",// True
]

function isPalindrome(text) {

  let array = text.toLowerCase().replaceAll(" ", "").split("")

  for (let i = 0; i < array.length; i++) {
    if (array[i] != array[array.length - (i + 1)]) {
      return "no es palindromo"
    }
  }

  return "es palindromo"

}

function test() {
  for (let i = 0; i < palindromes.length; i++) {
    console.log(palindromes[i] + ", " + isPalindrome(palindromes[i]))
  }
}

function main() {
  let opc = 0
  do {
    opc = parseInt(prompt("Ingresa el numero de la opcion deseada.\n1. Ingresar un palindromo.\n2. Salir"))
    
    switch (opc) {
      case 1:
        let inputUser = prompt("Ingresa una frase:")
        alert(inputUser + ", " + isPalindrome(inputUser))
        break;
      case 2:
        alert("Gracias.")
        break;
      default:
        alert("Opicion no valida.")
        break;
    }
  } while (opc != 2);
}

test()
main()
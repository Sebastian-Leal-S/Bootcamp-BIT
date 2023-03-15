document.getElementById("btnSaveClient").addEventListener("click", function() {
  
  let firstName = document.getElementById("firstName").value
  let lastName = document.getElementById("lastName").value
  let email = document.getElementById("email").value
  let phone = document.getElementById("numberPhone").value
  let date = document.getElementById("date").value
  
  let tableClient = document.getElementById("tableClient").insertRow(0)

  let nameCell = tableClient.insertCell(0)
  let emailCell = tableClient.insertCell(1)
  let phoneCell = tableClient.insertCell(2)
  let dateCell = tableClient.insertCell(3)

  nameCell.innerHTML = firstName + " " + lastName;
  emailCell.innerHTML = email;
  phoneCell.innerHTML = phone;
  dateCell.innerHTML = date;
})

var arrayAmount = []
var arrayPrice = []

function priceTotal() {
  let total = 0
  
  let amount = document.getElementById("amount").value
  let price = document.getElementById("price").value

  arrayAmount.push(amount)
  arrayPrice.push(price)

  for (let i = 0; i < arrayAmount.length; i++) {
    total += (arrayAmount[i] * arrayPrice[i])
    console.log(arrayAmount[i] + " * " + arrayPrice[i])
    console.log(total)
  }

  document.getElementById("priceTotal").innerHTML = total
}

document.getElementById("btnSaveProduct").addEventListener("click", function() {
  
  let name = document.getElementById("nameProduct").value
  let amount = document.getElementById("amount").value
  let price = document.getElementById("price").value

  let tableClient = document.getElementById("tableProduct").insertRow(0)

  let amountCell = tableClient.insertCell(0)
  let nameCell = tableClient.insertCell(1)
  let priceCell = tableClient.insertCell(2)

  amountCell.innerHTML = amount;
  nameCell.innerHTML = name;
  priceCell.innerHTML = price;

  priceTotal()

})
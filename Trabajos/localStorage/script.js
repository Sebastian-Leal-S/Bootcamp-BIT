let save = document.getElementById("btnSave")
let recovery = document.getElementById("btnRecovery")


recovery.disabled = true

document.getElementById("h4fullName").innerHTML = localStorage.getItem("firstName") + " " + localStorage.getItem("lastName")
document.getElementById("h4address").innerHTML = localStorage.getItem("address")
document.getElementById("h4numberPhone").innerHTML = localStorage.getItem("numberPhone")
document.getElementById("h4favTvShow").innerHTML = localStorage.getItem("favTvShow")

save.addEventListener("click", () => {

  recovery.disabled = false

  localStorage.setItem("firstName", document.getElementById("firstName").value) // first name
  localStorage.setItem("lastName", document.getElementById("lastName").value) // last name
  localStorage.setItem("address", document.getElementById("address").value) // address
  localStorage.setItem("numberPhone", document.getElementById("numberPhone").value) // number phone
  localStorage.setItem("favTvShow", document.getElementById("favTvShow").value) // favorite TV show

  save.disabled = true
})

recovery.addEventListener("click", () => {

  let out1 = localStorage.getItem("firstName")
  let out2 = localStorage.getItem("lastName")
  let out3 = localStorage.getItem("address")
  let out4 = localStorage.getItem("numberPhone")
  let out5 = localStorage.getItem("favTvShow")

  recovery.disabled = true

  document.getElementById("h4fullName").innerHTML = out1 + " " + out2
  document.getElementById("h4address").innerHTML = out3
  document.getElementById("h4numberPhone").innerHTML = out4
  document.getElementById("h4favTvShow").innerHTML = out5
  
  document.getElementById("h4fullName").value = ""
  document.getElementById("h4lastName").value = ""
  document.getElementById("h4address").value = ""
  document.getElementById("h4numberPhone").value = ""
  document.getElementById("h4favTvShow").value = ""

  save.disabled = false
})
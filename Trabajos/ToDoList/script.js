var arrayDatos = []
const taskList = document.getElementById("listTask")
const btnAdd = document.getElementById("btnAddTask")

document.addEventListener("DOMContentLoaded", function() {
  
  arrayDatos = localStorage.getItem("storage").split(",")
  
  if (arrayDatos[0] === "") {
    arrayDatos.shift();
  }

  for (let i = 0; i < arrayDatos.length; i++) {
    let taskItem = document.createElement("li")
    taskItem.classList.add("list-group-item")
    taskItem.innerHTML = "<span>" + arrayDatos[i] + "</span>"
    taskList.appendChild(taskItem)
  }
})

btnAdd.addEventListener("click", function() {
  
  let nameTask = document.getElementById("inputTaskName").value
  
  if (nameTask) {

    arrayDatos.push(nameTask)

    let taskItem = document.createElement("li")
    taskItem.classList.add("list-group-item")
    taskItem.innerHTML = "<span>" + nameTask + "</span>"
    taskList.appendChild(taskItem)
  
    document.getElementById("inputTaskName").value = ""
  }

  localStorage.setItem("storage", arrayDatos)
})

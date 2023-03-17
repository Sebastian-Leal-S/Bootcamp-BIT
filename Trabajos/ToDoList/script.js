const taskList = document.getElementById("listTask")
const btnAdd = document.getElementById("btnAddTask")
var arrayDatos = []

document.addEventListener("DOMContentLoaded", function() {
  
  arrayDatos = localStorage.getItem("storage")?.split(",") ?? []

  for (const nameTask of arrayDatos) {
    let taskItem = document.createElement("li")
    taskItem.classList.add("list-group-item")
    taskItem.innerHTML = "<span>" + nameTask + "</span>"
    /* taskItem.innerHTML = `<span>${nameTask}</span>` */
    taskList.appendChild(taskItem)
  }
})

btnAdd.addEventListener("click", function() {
  
  let nameTask = document.getElementById("inputTaskName").value.trim()
  
  if (nameTask) {

    arrayDatos.push(nameTask)

    let taskItem = document.createElement("li")
    taskItem.classList.add("list-group-item")
    taskItem.innerHTML = "<span>" + nameTask + "</span>"
    taskList.appendChild(taskItem)
  
    document.getElementById("inputTaskName").value = ""
    
    localStorage.setItem("storage", arrayDatos)
  }

})

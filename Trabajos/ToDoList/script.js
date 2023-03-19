const taskList = document.getElementById("listTask");
const btnAdd = document.getElementById("btnAddTask");
var taskListData = [];

function createTaskButton(title, index) {
  const button = document.createElement("button")
  button.classList.add("accordion-button")
  button.setAttribute("type", "button")
  button.setAttribute("data-bs-toggle", "collapse")
  button.setAttribute("data-bs-target", `#collapse${index}`)
  button.setAttribute("aria-expanded", "fasle")
  button.setAttribute("aria-controls", `collapse${index}`)
  button.textContent = title

  return button
}

function createTaskHeader(button, index) {
  const header = document.createElement("h2")
  header.classList.add("accordion-header")
  header.setAttribute("id", `heading${index}`)
  header.appendChild(button)

  return header
}

function createBtnEdit(description) {
  const editBtn = document.createElement("button")
  editBtn.setAttribute("type", "button")
  editBtn.classList.add("btn", "btn-primary", "me-2")
  editBtn.textContent = "Editar"

  editBtn.addEventListener("click", () => {
    const newDescription = prompt("Enter the new description:", description)
    if (newDescription !== null && newDescription.trim() !== "") {
      description = newDescription.trim()
      body.textContent = description
      taskListData[index].description = description
      localStorage.setItem("storage", JSON.stringify(taskListData))
    }
  })
}

function createTaskBody(description) {
  const body = document.createElement("div")
  body.classList.add("accordion-body", "show")
  body.textContent = description

  const editBtn = createBtnEdit(description)

  const deleteBtn = document.createElement("button")
  deleteBtn.setAttribute("type", "button")
  deleteBtn.classList.add("btn", "btn-danger")
  deleteBtn.textContent = "Delete"
  deleteBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to delete this task?")) {
      taskListData.splice(index, 1)
      taskList.removeChild(item)
      localStorage.setItem("storage", JSON.stringify(taskListData))
    }
  })

  const buttonsWrapper = document.createElement("div")
  buttonsWrapper.classList.add("d-flex", "justify-content-end", "mt-2")
  buttonsWrapper.appendChild(editBtn)
  buttonsWrapper.appendChild(deleteBtn)

  body.appendChild(buttonsWrapper)

  return body
}

function createTaskCollapse(body, index) {
  const collapse = document.createElement("div")
  collapse.classList.add("accordion-collapse", "collapse")
  collapse.setAttribute("id", `collapse${index}`)
  collapse.setAttribute("aria-labelledby", `heading${index}`)
  collapse.setAttribute("data-bs-parent", "#listTask")
  collapse.appendChild(body)

  return collapse
}

function createTaskItem(header, collapse) {
  const item = document.createElement("div")
  item.classList.add("accordion-item")
  item.appendChild(header)
  item.appendChild(collapse)

  return item
}

function createTask(title, description, index) {
  const button = createTaskButton(title, index)
  const header = createTaskHeader(button, index)
  const body = createTaskBody(description)
  const collapse = createTaskCollapse(body, index)
  const item = createTaskItem(header, collapse)

  return item
}

document.addEventListener("DOMContentLoaded", () => {
  taskListData = JSON.parse(localStorage.getItem("storage")) ?? []

  taskListData.forEach(({ title, description }, index)  => {
    const item = createTask(title, description, index)
    taskList.appendChild(item)
  });

});

btnAdd.addEventListener("click", () => {
  const [titleEl, descEl] = [document.getElementById("inputTaskTitle"), document.getElementById("inputTaskDesc")]
  const title = titleEl.value.trim()
  const description = descEl.value.trim()

  if (title && description) {
    taskListData.push({ title, description })
    const index = taskListData.length - 1
    const item = createTask(title, description, index)
    taskList.appendChild(item)
    titleEl.value = ""
    descEl.value = ""
    localStorage.setItem("storage", JSON.stringify(taskListData))
  }
  
});

const taskList = document.getElementById("listTask");
const btnAdd = document.getElementById("btnAddTask");
var taskListData = [];

document.addEventListener("DOMContentLoaded", function () {
  taskListData = JSON.parse(localStorage.getItem("storage")) ?? [];

  taskListData.forEach(({ title, description }, index)  => {
    
    let btnTask = document.createElement("button")
    btnTask.classList.add("accordion-button")
    btnTask.setAttribute("type", "button")
    btnTask.setAttribute("data-bs-toggle", "collapse")
    btnTask.setAttribute("aria-expanded", "true")
    btnTask.setAttribute("data-bs-target", "#collapse" + (index))
    btnTask.setAttribute("aria-controls", "collapse" + (index))
    btnTask.innerText = title

    let h2title = document.createElement("h2")
    h2title.classList.add("accordion-header")
    h2title.setAttribute("id", "heading" + (index))
    h2title.appendChild(btnTask)

    let divAccordionBody = document.createElement("div")
    divAccordionBody.classList.add("accordion-body", "show")
    divAccordionBody.innerText = description

    let divAccordionCollapse = document.createElement("div")
    divAccordionCollapse.classList.add("accordion-collapse", "collapse")
    divAccordionCollapse.setAttribute("id", "collapse" + (index))
    divAccordionCollapse.setAttribute("aria-labelledby", "heading" + (index))
    divAccordionCollapse.setAttribute("data-bs-parent", "#listTask")
    divAccordionCollapse.appendChild(divAccordionBody)

    let divAccordionItem = document.createElement("div")
    divAccordionItem.classList.add("accordion-item")
    divAccordionItem.appendChild(h2title)
    divAccordionItem.appendChild(divAccordionCollapse)

    taskList.appendChild(divAccordionItem)
  });
});

/* .innerHTML = `` */

btnAdd.addEventListener("click", function () {
  let title = document.getElementById("inputTaskTitle").value.trim();
  let description = document.getElementById("inputTaskDesc").value.trim();

  if (title && description) {
    taskListData.push({ title, description });

    let btnTask = document.createElement("button")
    btnTask.classList.add("accordion-button")
    btnTask.setAttribute("type", "button")
    btnTask.setAttribute("data-bs-toggle", "collapse")
    btnTask.setAttribute("aria-expanded", "true")
    btnTask.setAttribute("data-bs-target", "#collapse" + (taskListData.length - 1))
    btnTask.setAttribute("aria-controls", "collapse" + (taskListData.length - 1))
    btnTask.innerText = title

    let h2title = document.createElement("h2")
    h2title.classList.add("accordion-header")
    h2title.setAttribute("id", "heading" + (taskListData.length - 1))
    h2title.appendChild(btnTask)

    let divAccordionBody = document.createElement("div")
    divAccordionBody.classList.add("accordion-body", "show")
    divAccordionBody.innerText = description

    let divAccordionCollapse = document.createElement("div")
    divAccordionCollapse.classList.add("accordion-collapse", "collapse")
    divAccordionCollapse.setAttribute("id", "collapse" + (taskListData.length - 1))
    divAccordionCollapse.setAttribute("aria-labelledby", "heading" + (taskListData.length - 1))
    divAccordionCollapse.setAttribute("data-bs-parent", "#listTask")
    divAccordionCollapse.appendChild(divAccordionBody)

    let divAccordionItem = document.createElement("div")
    divAccordionItem.classList.add("accordion-item")
    divAccordionItem.appendChild(h2title)
    divAccordionItem.appendChild(divAccordionCollapse)

    taskList.appendChild(divAccordionItem)

    document.getElementById("inputTaskTitle").value = "";
    document.getElementById("inputTaskDesc").value = "";

    localStorage.setItem("storage", JSON.stringify(taskListData));
  }
});

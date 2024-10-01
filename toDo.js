let tasks = new Map
const form = document.getElementById("form")

form.addEventListener("submit", onFormSubmit)
form.addEventListener("submit", printTasks)

function onFormSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.target)
    const task = data.get("task")
    if (task === "") {
        return
    }
    tasks.set(task, task)
    console.log(tasks)
}

function printTasks() {
    const container = document.getElementById("list")
    container.replaceChildren()
   
    tasks.forEach(task => {
        let taskGroup = document.createElement("div")
        let li = document.createElement("li")
        let deleteBtn = document.createElement("button")
        deleteBtn.textContent = "Delete"
        taskGroup.appendChild(li)
        taskGroup.appendChild(deleteBtn)
        taskGroup.classList.add("taskGroup")
    
        li.textContent = task
        container.appendChild(taskGroup)
        deleteBtn.addEventListener("click", () => deleteTask(task)) //aixo es fa per a que no s'executi la funcio
    })   
}

function deleteTask(taskI) {
    tasks.forEach(task => {
        if (task == taskI  ) {
            tasks.delete(taskI)
            printTasks()
        }
    })
    console.log(tasks)
}
const todo = document.getElementById("todo")
const btn1 = document.getElementById("btn1")
const ol = document.getElementById("list")

function addTodo() {
    const value = todo.value
    const li = document.createElement("li")
    li.innerHTML = value
    value ? ol.appendChild(li) && (todo.value = "") : alert("please enter any value")
}

todo.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addTodo()
    }
})
btn1.addEventListener("click", () => {
    addTodo()
})

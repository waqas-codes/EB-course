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

let array = [1,2,3,4,5]
let newArray = [...array, array]
console.log(newArray)

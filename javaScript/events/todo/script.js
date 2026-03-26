const todo = document.getElementById("todo")
const btn1 = document.getElementById("btn1")
const ol = document.getElementById("list")
btn1.addEventListener("click", () => {
    const value = todo.value
    const li = document.createElement("li")
    li.innerHTML = value
    ol.appendChild(li)
})
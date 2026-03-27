const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const ol = document.getElementsByTagName("ol")
const todo = document.getElementById("todo")
const lis = document.createElement("li")
const container = document.querySelector(".container")
    
btn1.addEventListener("click", () => {
    container.style.backgroundColor = "red"
    const para = document.createElement("p")
    para.innerText = "i am a prargraph"
    container.appendChild(para)
    lis.innerText = "item 4"
    ol[0].appendChild(lis)
})

btn2.addEventListener("click", () => {
    container.appendChild(todo.value)
})
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const ol = document.getElementsByTagName("ol")
const lis = document.createElement("li")
const container = document.querySelector(".container")
    
btn1.addEventListener("click", () => {
    container[0].style.backgroundColor = "red"
    const para = document.createElement("p")
    para.innerText = "i am a prargraph"
    container[0].appendChild(para)
    lis.innerText = "item 4"
    ol[0].appendChild(lis)
})

btn2.addEventListener("click", () => {
    container.setAttribute("class", "cont")
})
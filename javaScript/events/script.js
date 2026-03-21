const btn = document.getElementsByTagName("button")
btn[0].addEventListener("click", () => {
    const container = document.getElementsByTagName("div")
    container[0].style.backgroundColor = "red"
    const para = document.createElement("p")
    para.innerText = "i am a prargraph"
    container[0].appendChild(para)
    const li = document.createElement("li")
    li.innerText = "item 4"
    const ol = document.getElementsByTagName("ol")
    ol[0].appendChild(li)
})

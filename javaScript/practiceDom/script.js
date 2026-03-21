const createDiv = document.createElement("div")
const createAtt = document.createAttribute("id")
createAtt.value = "box"
createDiv.style.backgroundColor = "green"
createDiv.style.borderRadius = "10px"
createDiv.style.width = "200px"
createDiv.style.height = "200px"
createDiv.style.display = "grid"
createDiv.style.gridTemplateColumns = "auto auto"
createDiv.setAttributeNode(createAtt)

const color = ["red", "yellow", "gray", "aqua"]
for(let i = 0; i < 4; i++){  
const createChildDiv = document.createElement("div")
const createChildAt = document.createAttribute("box")
createChildDiv.style.backgroundColor = color[i]
createChildDiv.style.border = "1px solid black"
createChildDiv.style.borderRadius = "50%"
createChildDiv.setAttributeNode(createChildAt)
createDiv.appendChild(createChildDiv)
}

const bodyTag = document.getElementsByTagName("body")
bodyTag[0].appendChild(createDiv) 
bodyTag[0].style.height = "100vh"
bodyTag[0].style.display = "flex"
bodyTag[0].style.justifyContent = "center"
bodyTag[0].style.alignItems = "center"
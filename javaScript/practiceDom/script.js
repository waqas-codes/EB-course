const createDiv = document.createElement("div")
const createAtt = document.createAttribute("id")
createAtt.value = "box"
createDiv.style.backgroundColor = "green"
createDiv.style.width = "200px"
createDiv.style.height = "200px"
createDiv.style.display = "grid"
createDiv.style.gridTemplateColumns = "auto auto"
createDiv.setAttributeNode(createAtt)

for(let i = 0; i < 4; i++){  
const createChildDiv = document.createElement("div")
const createChildAt = document.createAttribute("box")
if(i == 0) createChildDiv.style.backgroundColor = "yellow"
if(i == 1) createChildDiv.style.backgroundColor = "red"
if(i == 2) createChildDiv.style.backgroundColor = "aqua"
if(i == 3) createChildDiv.style.backgroundColor = "gray"
createChildDiv.style.border = "1px solid black"
createChildDiv.style.height = "100px"
createChildDiv.style.width = "100px"
createChildDiv.setAttributeNode(createChildAt)
createDiv.appendChild(createChildDiv)
}

const bodyTag = document.getElementsByTagName("body")
bodyTag[0].appendChild(createDiv) 
bodyTag[0].style.height = "100vh"
bodyTag[0].style.display = "flex"
bodyTag[0].style.justifyContent = "center"
bodyTag[0].style.alignItems = "center"
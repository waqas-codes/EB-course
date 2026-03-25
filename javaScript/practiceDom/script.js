// const createDiv = document.createElement("div")
// const createAtt = document.createAttribute("id")
// createAtt.value = "box"
// createDiv.style.backgroundColor = "green"
// createDiv.style.borderRadius = "10px"
// createDiv.style.width = "200px"
// createDiv.style.height = "200px"
// createDiv.style.display = "grid"
// createDiv.style.gridTemplateColumns = "auto auto"
// createDiv.setAttributeNode(createAtt)

// const color = ["red", "yellow", "gray", "aqua"]
// for(let i = 0; i < 4; i++){  
// const createChildDiv = document.createElement("div")
// const createChildAt = document.createAttribute("box")
// createChildDiv.style.backgroundColor = color[i]
// createChildDiv.style.border = "1px solid black"
// createChildDiv.style.borderRadius = "50%"
// createChildDiv.setAttributeNode(createChildAt)
// createDiv.appendChild(createChildDiv)
// }

// const bodyTag = document.getElementsByTagName("body")
// bodyTag[0].appendChild(createDiv) 
// bodyTag[0].style.height = "100vh"
// bodyTag[0].style.display = "flex"
// bodyTag[0].style.justifyContent = "center"
// bodyTag[0].style.alignItems = "center"


const bodyTag = document.getElementsByTagName("body")
bodyTag[0].style.height = "100vh"
bodyTag[0].style.display = "flex"
bodyTag[0].style.justifyContent = "center"
bodyTag[0].style.backgroundColor = "black"
bodyTag[0].style.alignItems = "center"
const parentNode = document.createElement("div")
parentNode.style.position = "relative"
parentNode.style.width = "400px"
parentNode.style.height = "400px"
parentNode.style.display = "flex"
parentNode.style.justifyContent = "center"
parentNode.style.alignItems = "center"

bodyTag[0].appendChild(parentNode)
const angles = [45, 90, 135, 180]
const colors = ["red", "green", "blue", "yellow"]

for(let i = 0; i < 4; i++){
    const childNodes = document.createElement("div")
    childNodes.style.width = "10px"
    childNodes.style.position = "absolute"
    childNodes.style.height = "10px"
    childNodes.style.borderRadius = "50%"
    childNodes.style.backgroundColor = `${colors[i]}`
    childNodes.style.transform = `rotate(${angles[i]}deg)`
    childNodes.style.transition = "width 1s"
    childNodes.style.transitionTimingFunction = "linear"
    childNodes
    parentNode.appendChild(childNodes)
}

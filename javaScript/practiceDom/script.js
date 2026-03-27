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
const container = document.createElement("div")
// container.style.position = "relative"    
container.style.width = "400px"
container.style.height = "400px"
container.style.backgroundColor = "white"
container.style.display = "flex"
container.style.justifyContent = "center"
container.style.alignItems = "center"

bodyTag[0].appendChild(container)
const angles = [45, 90, 135, 180]
const colors = ["red", "green", "blue", "gray"]

for (let i = 0; i < 4; i++) {
    const childNodes = document.createElement("div")
    const parentNodes = document.createElement("div")

    parentNodes.style.width = "200px"
    parentNodes.style.height = "0.3px"
    parentNodes.style.backgroundColor = "blue"
    parentNodes.style.transform = `rotate(${angles[i]}deg)`
    parentNodes.style.backgroundColor = `${colors[i]}`
    parentNodes.style.position = "absolute"
    parentNodes.style.display = "flex"
    parentNodes.style.alignItems = "center"
    container.appendChild(parentNodes)

    childNodes.style.width = "10px"
    childNodes.style.position = "absolute"
    childNodes.style.height = "10px"
    childNodes.style.borderRadius = "50%"
    childNodes.style.backgroundColor = `${colors[i]}`
    childNodes.style.animation = "move 2s linear infinite"

    parentNodes.appendChild(childNodes)
}

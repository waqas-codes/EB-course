console.log("9")
console.log("1")
console.log("2")
console.log("3")
console.log("4")
console.log("5")
add()
console.log("6")
console.log("7")
console.log("8")

async function add(){
    let end_point = await fetch("https://jsonplaceholder.typicode.com/users")
    let data = await end_point.json()
    console.log(data)
}


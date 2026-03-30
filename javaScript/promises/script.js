const table = document.getElementById("table")


async function add(){
    let end_point = await fetch("https://jsonplaceholder.typicode.com/users")
    let data = await end_point.json()
    // console.log(data)


    for(let i = 0; i < data.length; i++){
        const tr = document.createElement("tr")
        const td = document.createElement("td")
        table.appendChild(tr)
        td.innerHTML = data[i].id
        tr.appendChild(td)
    }
}

add()
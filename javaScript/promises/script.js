const table = document.getElementById("table")


async function add() {
    let end_point = await fetch("https://jsonplaceholder.typicode.com/users")
    let data = await end_point.json()
    // console.log(data)

    const arr = ["id", "name", "email"]
    for (let i = 0; i < data.length; i++) {
        const tr = document.createElement("tr")
        for (let j = 0; j < 3; j++) {
            const td = document.createElement("td")
            td.innerHTML = await data[i][arr[j]]
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
}
add()

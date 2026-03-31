const table = document.getElementById("table")
let end_point_url = 'https://jsonplaceholder.typicode.com/users'
const arr = ["id", "name", "email", "phone", "website"]

// by asyn await*******************************
// async function fetchData() {
//     let end_point = await fetch("end_point_url")
//     let data = await end_point.json()
//     console.log(data)

    // for (let i = 0; i < data.length; i++) {
    //     const tr = document.createElement("tr")
    //     for (let j = 0; j < 3; j++) {
    //         const td = document.createElement("td")
    //         td.innerHTML = await data[i][arr[j]]
    //         tr.appendChild(td)
    //     }
    //     table.appendChild(tr)
    // }

    // data.forEach(element => {
        // console.log(element.name)
//         const tr = document.createElement("tr")
//         arr.forEach(el => {
//             const td = document.createElement("td")
//             console.log(element[el])
//             td.innerHTML = element[el]
//             tr.appendChild(td)
//         })
//         table.appendChild(tr)
//     });
// }
// fetchData()


// by then metheod ************************

async function fetchData() {
    const record = await fetch(end_point_url)
    .then(res => res.json())
    .then(data => {
        return data
    })
    console.log(record)
    record.forEach(element => {
        const tr = document.createElement("tr")
        arr.forEach(el => {
            const td = document.createElement("td")
            td.innerHTML = element[el]
            tr.appendChild(td)
        })
        table.appendChild(tr)
    });
}

fetchData()
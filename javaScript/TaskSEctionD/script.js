// for(let i = 1; i <= 10; i++){
//     console.log(i)
// }

// for(let i = 1; i <= 20; i++){
//     if(i %2 == 0){
//         console.log(i)
//     }
// }


// let arr = ["apple", "banana", "mango"]
// arr.forEach(Element => {
//     console.log(Element)
// })


// let arr = ["apple", "banana", "mango"]
// for(let i = arr.length -1 ; i >= 0; i--){
//     console.log(arr[i])
// }


// let arr = [1, 5, 8, 19, 3, 66, 29]
// let count = 0;
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > 10){
//         count++;
//     }
// }
// console.log(count)





// const body = document.getElementsByTagName("body")
// const inputField = document.getElementsByTagName("input")

// let heading = document.createElement("h1")
// inputField[0].addEventListener("oninput", () => {
//     heading.innerHTML = inputField[0].value
// })
// body[0].appendChild(heading)


// const btn1 = document.getElementById("increment")
// const btn2 = document.getElementById("decrement")
// const inc = document.getElementById("inc")

// let positive = 0
// btn1.addEventListener("click", () => {
//     positive++;
//     inc.textContent = positive
//     console.log(positive)

// })

// btn2.addEventListener("click", () => {
//     positive--;
//     inc.textContent = positive
//     console.log(positive)

// })




// 36
// async function fetchData() {
//     const data = await fetch("https://jsonplaceholder.typicode.com/users")
//     const records = await data.json()
//     console.log(records)
// }
// fetchData()



// ************************************************************************
// 37

async function fetchData() {
    const loading = document.getElementById("loading");
    loading.style.display = "block";
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        loading.style.display = "none";
        console.log(data);

    } catch (error) {
        loading.innerText = "Error loading data";
    }
}
 


fetchData();



// ****************************************************************************
// 38
// async function fetchData() {
//     try {
//         const data = await fetch("https://jsonplaceholder.typicode.com/users")
//         const records = await data.json()
//         console.log(records)
//     } catch (error) {
//         console.log(error)
//     }

//     records ? (console.log(records)) : "loading..."
// }

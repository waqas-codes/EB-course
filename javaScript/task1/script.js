// const persons =
// {
//     imgUrl: "https://thisIsUrl.com",
//     name: "ibrahim",
//     jobTitle: "Jonior fulls stack web engineer",
//     description: "Tupelo, Mississippi, United States",
//     connection: 381
// }
// let table = "<table>" +
//     "<tr>" +
//     "<th style='border: 1px solid black; padding: 8px; background-color: gray;'>" + "Name" + "</th>" +
//     "<th style='border: 1px solid black; padding: 8px; background-color: gray'>" + "Job Title" + "</th>" +
//     "<th style='border: 1px solid black; padding: 8px; background-color: gray'>" + "Description" + "</th>" +
//     "<th style='border: 1px solid black; padding: 8px; background-color: gray'>" + "Connection" + "</th>" +
//     "</tr>" +

//     "<tr>" +
//     "<td style='border: 1px solid black; padding: 8px; background-color: yellow'>" + persons.name + "</td>" +
//     "<td style='border: 1px solid black; padding: 8px; background-color: yellow'>" + persons.jobTitle + "</td>" +
//     "<td style='border: 1px solid black; padding: 8px; background-color: yellow'>" + persons.description + "</td>" +
//     "<td style='border: 1px solid black; padding: 8px; background-color: yellow'>" + persons.connection + "</td>" +
//     "</tr>" +
//     "</table>"

// document.writeln(table)



// document.writeln(persons.name)
// document.writeln(persons.jobTitle)
// document.writeln(persons.description)
// document.writeln(persons.connection)

// ********* print squar ***************
// function square(a){
//     return a*a;
// }


// ********* print product ***************
// function square(a, b){
//     return a*b;
// }

// console.log(square(19,9))


// ********* array methods ***************
// let array = ["yellow", "green"]

// array.push("blue")
// array.shift()
// console.log(array)


// ********* array sum ***************
// let array = [10, 3, 4, 23]
// sum = 0
// for (i = 0; i < array.length; i++){
//     sum+=array[i]
//     console.log(i)
// }
// console.log(sum)


// ********* object accessing ***************
// let obj = {
//     make: "John",
//     model: "toyota",
//     year: 2010
// }
// console.log(obj.make, obj.model, obj.year)


// ********* check even odd ***************
// const isEven = (num) => {
//     if(num % 2 == 0) return console.log("even")
//     return console.log("Odd")
// }

// isEven(6)



// ********* print array names ***************
// const names = ["waqas", "qasim", "abrar", "wali"]

// for(let i = 0; i < names.length; i++){
//     console.log(names[i])
// }


// ********* print full name ***************
// const printFullName = (obj) => {
//     console.log(obj.firstName + obj.lastName)
// }
// const obj = {
//     firstName: "muhammad",
//     lastName: "waqas"
// }
// printFullName(obj)


// ********* reverse array ***************
const array = [1,3,5,7,9,11]
for(let i = array.length - 1; i >= 0; i--){
    console.log(array[i])
}
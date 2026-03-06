const persons =
{
    imgUrl: "https://thisIsUrl.com",
    name: "ibrahim",
    jobTitle: "Jonior fulls stack web engineer",
    description: "Tupelo, Mississippi, United States",
    connection: 381
}
let table = "<table>" +
    "<tr>" +
    "<th style='border: 1px solid black; padding: 8px; background-color: gray;'>" + "Name" + "</th>" +
    "<th style='border: 1px solid black; padding: 8px; background-color: gray'>" + "Job Title" + "</th>" +
    "<th style='border: 1px solid black; padding: 8px; background-color: gray'>" + "Description" + "</th>" +
    "<th style='border: 1px solid black; padding: 8px; background-color: gray'>" + "Connection" + "</th>" +
    "</tr>" +

    "<tr>" +
    "<td style='border: 1px solid black; padding: 8px; background-color: yellow'>" + persons.name + "</td>" +
    "<td style='border: 1px solid black; padding: 8px; background-color: yellow'>" + persons.jobTitle + "</td>" +
    "<td style='border: 1px solid black; padding: 8px; background-color: yellow'>" + persons.description + "</td>" +
    "<td style='border: 1px solid black; padding: 8px; background-color: yellow'>" + persons.connection + "</td>" +
    "</tr>" +
    "</table>"

document.writeln(table)



// document.writeln(persons.name)
// document.writeln(persons.jobTitle)
// document.writeln(persons.description)
// document.writeln(persons.connection)


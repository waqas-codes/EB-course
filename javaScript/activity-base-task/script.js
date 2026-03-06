// let x = Number(prompt("Enter a number"));

// while (x !== 5) {
//     x = Number(prompt("Enter a number"));
//     console.log("Number is incorrect! try again")
// }

// console.log("congratulations! Number is correct!");

// let x = Number(prompt("Enter a number"));

// while (x % 5 !== 0) {
//     x = Number(prompt("Enter a number"));
//     console.log("The number is not divisible by 5")
// }

// console.log("The number is divisible by 5!")


// *************************
//continue keyword is used to skip the current iteration of a loop and move on to the next iteration. In the example below, when the value of i is 5, the continue statement will be executed, and the console.log(i) will be skipped for that iteration. The loop will then continue with the next value of i.
// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         continue;
//     }
//     console.log(i)
// }


// ****************************
// break keyword is used to exit a loop.
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

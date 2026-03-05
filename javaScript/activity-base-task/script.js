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
// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         break;
//     }
//     console.log(i);
// }


// ******************************
// guess a number with Math.random() method using while loop

// let randomNumber = Math.floor(Math.random() * 10) + 1;
// let userGuess = Number(prompt("Guess a number between 1 and 10"));

// console.log(randomNumber)

// while (userGuess !== randomNumber) {
//     userGuess = Number(prompt("Wrong guess! Try again. Guess a number between 1 and 10"));
//     console.log("guess number is incorrect")
// }
// console.log("Congratulations! You guessed the number.");


// *************************************
// guess a number with Math.random method using do whlile loop
// let randomNumber = Math.floor(Math.random() * 10) + 1;
// console.log(randomNumber)
// let userguess;

// do {
//     userguess = Number(prompt("Guess a number between 1 and 10"));

// }while (userguess !== randomNumber);

// console.log("Congratulations! You guessed the number.");


// ****************************************
// checking a number is positive or negative 

// let num = Number(prompt("Enter a number"));
// if (num % 2 === 0) {
//     console.log("The number is even");
// } else {    
//     console.log("The number is odd");
// }


// *****************************************
// print even numbers from 0 to 10
// for (let i = 0; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
// }

// *****************************************
// print number from 10 to 0 
for (let i = 10; i > 0; i++) {
    console.log(i)
}


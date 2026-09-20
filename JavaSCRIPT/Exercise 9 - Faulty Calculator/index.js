/*Create a fault calcultor using javascript

This faulty calculator does the following:

1. It takes two numbers as input from the user
2. It perform wrong operation as follows

+ -----> -
* -----> +
- ------> /
/ ------> **


It performs wrong operation only 10% f the times
*/

// console.log("Welcome")

let random = Math.random();
let a = prompt("Enter first number");
let b = prompt("Enter Operation");
let c = prompt("Enter second number");

let cal = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}

if (random > 0.1) {
    //Correct calcilation
    alert(`The Result is ${eval(`${a} ${b} ${c}`)}`)
}
else {
    // incorrect calculation
    b = obj[b];
}
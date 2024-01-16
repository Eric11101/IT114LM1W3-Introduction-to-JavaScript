/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
// Your code here
var num  = 1.1;
console.log(num);


// TODO 1.2 Use the let keyword to define a variable.
// Your code here
let x;
x = 1.2;
console.log(x);

// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
// Your code here
const val = 1.3;
console.log(val);


// Checkpoint 1.1 What is the difference between var, let, and const?
// Answer:
console.log("variables using var can be used throughout the function.");
console.log("variables using let is used if you want block-scoped variables that can be reassigned.");
console.log("const is used if u want the variables to be fixed")


// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
// Your code here
let sum = 100 + 30;
console.log(sum);


// Checkpoint 1.2 What operators did you use?nid
// Answer: 
// Your code here
console.log("i used plus sign")

// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
// Your code here
const name = "Ericson";
console.log(name);


// Checkpoint 1.3 What operators did you use?
// Answer: 
console.log("I used concatenation");

// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
// Your code here

console.log(true && true);

/*hour = 19;
if (hour < 12) {
    greeting = "Good afternoon";
}
else{
    greeting ="Good morning";
}
console.log(hour, greeting);*/

// Checkpoint 1.4 What operators did you use?
// Answer: 
console.log("AND operator");


// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators
time = 8;
mite = 10;
oras = 8 > 10;
console.log(oras);

// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer: 
// Your code here
console.log("because it leads to a false-true-value");
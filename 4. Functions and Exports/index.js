/*
    Resources:
    - MDN on Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
    - JavaScript Tutorial on Functions: https://javascript.info/function-basics
    - freeCodeCamp on Functions: https://www.freecodecamp.org/news/what-is-a-function-javascript-function-examples/
*/

// Todo 4.1 Declare a function named 'greet' that takes one parameter 'name' and displays a greeting
// Then, Call the 'greet' function with your name as the argument
// Your code here
function greet(name) {
    console.log("Hello, " + name);
}
greet("World");
  
// Checkpoint 4.1 What is the difference between a function declaration and a function expression?
// Answer: 

// Todo 4.2 Declare a function expression named 'calculateArea' that takes the length and width of a rectangle and returns its area
// Then, Call the 'calculateArea' function with any length and width as arguments
// Your code here
const calculateArea = function(length, width) {
    return length * width;
}
const length = 3;
const width = 6;
const area = calculateArea(length, width);
console.log(area);
  

// Checkpoint 4.2 What is a callback function? Provide an example.
// Answer: 
console.log("a function passed into another function as an argument");

function greetAfterDelay(callback) {
    setTimeout(() => {
      console.log("Hello, World!");
      callback();
    }, 2000); 
}
function sayGoodbye() {
    console.log("Goodbye!");
}
greetAfterDelay(sayGoodbye);

// Todo 4.3 Declare a higher-order function named 'modifyArray' that takes an array and a function as parameters. The function should modify each element in the array using the provided function and return the modified array.
// Then, Call the 'modifyArray' function with the 'numbers' array and a function that increments each number by 1
// Useful Tutorial: https://youtu.be/H4awPsyugS0?si=7wC1B7whXVkG8X5l
// Your code here

function modifyArray(array, modifierFunction) {
    return array.map(modifierFunction);
}
const numbers = [1, 2, 3, 4, 5];
const increment = function(number) {
    return number + 1;
};
const modifiedArray = modifyArray(numbers, increment);

console.log(numbers)
console.log(modifiedArray);

// Todo 4.4 See mathUtils.js for the instructions to create the add method and PI constant.
// Then, import and call the add method here and display the value of the PI constant
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here

/*import { add, PI } from "mathUtils.js";
const result = add(2, 3);
console.log("sum:", result);*/

// Todo 4.5 See isPalindrome.js for the instructions to create the isPalindrome method.
// Then, import and call the isPalindrome method here
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here

/*import isPalindrome from "./isPalindrome.js";
let str = "rar";
console.log(isPalindrome(str));*/

// Checkpoint 4.3 What does the require function and module.exports variable do?
// Should we use it over the import and export keywords? Why? Research your answer.
// Answer: 

console.log("a part of commonJs specs which defines the object that is created when a file is imported using require()");
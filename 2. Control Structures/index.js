/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
*/

const randomNumber = Math.floor((Math.random() * 100) + 1); // feel free to mock this value for testing
console.log(randomNumber);

// TODO 2.1 Display "more than fifty" if randomNumber is more than fify
// Your code here
if (randomNumber < 50) {
    greeting = "Good afternoon";
}
else{
    greeting ="Good morning";
}
console.log(greeting);

// TODO 2.2 Display whether the random number is odd or even
// Your code here
if (randomNumber % 2==0 ) {
    greeting = "even";
}
else{
    greeting ="odd";
}
console.log(greeting);


// TODO 2.3 If the number if a multiple of 3, write "fizz".
// if the number is a multiple of 5 display "buzz".
// if the number is divisible by both 3 and 5, display "fizzbuzz". otherwise, display the number
// Your code here
if (randomNumber % 3==0 && randomNumber % 5==0){
    greeting = "fizzbuzz";
}
else if (randomNumber % 3==0){
    greeting = "fizz";
}
else if (randomNumber % 5==0){
    greeting = "buzz";
}
else {
    greeting = "not divisible by both 3 and 5";
}
console.log(greeting);

let toDisplay = ""
// TODO 2.4 Use the ternary conditional operator to set toDisplay to "Even" if randomNumber is even and "Odd" if randomNumber is odd
// Your code here
console.log("toDisplay", toDisplay);


// Checkpoint 2.1 How do you use switch statements and when would you use them? Try researching the answer
// Answer: 
console.log("to check the variables against several values specified in the test cases")

// TODO 2.5 Use a for loop to print the numbers 1 to N
const n = 10;
// Your code here
for (let i = 1; i < n+1; i++) {
    console.log(i);
}

const list = ["apple", "banana", "cherry", "date", "elderberry"];
// TODO 2.6 Use a while loop to display all the values in the list
// Your code here
while (true) {
    console.log(list);
    break;
}


// Checkpoint 2.3 What is the difference between do while and while loop?
// Answer: 
console.log("while loop analzyes the condition before the block of code.; ");
console.log("do-while loop analyzes the condition after the block of code.")

// TODO 2.7 Use a for of loop to display all the values in the list
// Your code here
for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
  }


// TODO 2.8 Use a for in loop to display all the values in the list
// Your code here
for (let index in list) {
    console.log(list[index]);

}

// TODO 2.9 Use the for each method of the list to display all its values 
// Your code here
list.forEach(element => {
    console.log(element);
  });
// Checkpoint 2.2 When should you use for of, for in, or .forEach loops? Try researching the answer
// Answer: 
console.log("use for..of whenever using indexes");
console.log("use for..in for objects");
console.log("for arrays, use for each");
// TODO 2.10 Use the try and catch block to catch division by zero errors in the code below.
// In the finally block, simulate cleaning up resources by displaying "cleaning up resources"
const numerator = Math.floor((Math.random() * 100) + 1);
const denominator = Math.floor((Math.random() * 5)); // feel free to mock this value for testing

try {
    if (denominator === 0) {
        throw new Error("Division by zero error");
    } else {
        console.log(numerator / denominator);
    }
} catch (error) {
    console.error("Error:", error.message);
} finally {
    console.log("Cleaning up resources");
}

/*if(denominator === 0){
    throw new Error("Division by zero error")
} else {
    console.log(numerator / denominator);
}
*/





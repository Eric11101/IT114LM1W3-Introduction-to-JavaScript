/*
    Resources:
    - JavaScript Tutorial on Objects: https://javascript.info/object
    - freeCodeCamp on Objects: https://www.freecodecamp.org/news/objects-in-javascript-for-beginners/
    - JavaScript Tutorial on Arrays: https://javascript.info/array
    - freeCodeCamp on Arrays: https://www.freecodecamp.org/news/javascript-array-tutorial-array-methods-in-js/
*/

let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

// Todo 3.1 Get the first, 5th, and last items in the numbers array.
// Your code here
console.log(numbers[0]);
console.log(numbers[4]);
console.log(numbers[14]);
// Todo 3.2 calculate the min, max, and the average of the numbers array
// Your code here
let minimum = numbers[0];
let maximum = numbers[0];
let sum = 0;
 
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < minimum) {
    minimum = numbers[i];
  }
  if (numbers[i] > maximum) {
    maximum = numbers[i];
  }
  sum += numbers[i];
}

const ave = sum / numbers.length;
 
console.log("Min", minimum);
console.log("Max", maximum);
console.log("Ave", ave);

// Checkpoint 3.1 How would you compare lists in python vs arrays in JavaScript
// Answer: 
console.log();
// Todo 3.3 Declare an object with information about IT114L (course code, name, units, number of students)
// Your code here

coursecode = ["IT114L", "CS102", "CS102L"];
const name = ["Job", "Ian", "Leo"];
const units = [3,2,3];
numberOfStudent = ["30", "40", "20"];

console.log(coursecode);
console.log(name);
console.log(units);

// Todo 3.4 Add professor name as one of the fields of the object. Display the value of professor name.
// Your code here



for (let i = 0; i < coursecode.length; i++){
  console.log("Course Code: ", coursecode[i]);
  console.log("Name: ", name[i]);
  console.log("Units: ", units[i]);
  console.log("Number of Students: ", numberOfStudent[i]);
  console.log
}


// Todo 3.5 Declare and array of objects with information about the courses you are taking this term
// Your code here
coursename = ["Web Systems and Tech", "Data Struct Lect", "Data Struct lab"];

for (let i = 0; i < coursecode.length; i++){
  console.log("Course Code: ", coursecode[i]);
  console.log("Course Name: ", coursename[i]);
  console.log("Units: ", units[i]);
}


// Todo 3.5 Calculate the total number of units you are taking this term using the array of objects.
// Your code here

const unit = [3,2,3];
let add = 0;
for (let i = 0; i < unit.length; i++) {
  add += unit[i];
}
console.log("Sum of units:", add);


// Checkpoint 3.2 What would be the equivalent of objects in python? How would you compare them?
// Answer: 
console.log("I would say that there maybe some similarities and differences with python and java");
console.log("They are similar in a way that both have dynamic structures and some Key types. ")
console.log("At the same time, they have different syntax");

// Todo 3.6 Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
// Your code here

let addnumber = [...numbers, 99];
console.log("Copied Array with Additional Number:", addnumber);

// Todo 3.7 Going back to your IT114L object, extract the course code and units using the spread operator
// Your code here

const [itCourseCode, ...otherCourseCodes] = coursecode;
const [itUnits, ...otherUnits] = units;

console.log("IT Course Code:", itCourseCode);
console.log("Other Course Codes:", otherCourseCodes);
console.log("IT Units:", itUnits);
console.log("Other Units:", otherUnits);

/*
    Resources:
    - freeCodeCamp on Map, Reduce and Filter: https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/
*/
// TODO 5.1 Use the map method to create a new array that contains the squares of all numbers in the array
const numbers = [1, 2, 4, 4, 5];
// Your code here
const square = numbers.map(num => num ** 2);
console.log(square);

// TODO 5.2 Use the filter method to create a new array that contains only the even numbers in the array
// Your code here
const even = numbers.filter(num => num % 2 === 0);
console.log(even);

// TODO 5.3 Use the reduce method to find the sum of all numbers in the array
// Your code here
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);

// TODO 5.4 Use the map method to convert all elements in the array to uppercase
const words = ['hello', 'world'];
// Your code here
const uppercase = words.map(word => word.toUpperCase());
console.log(uppercase);

// TODO 5.5 Use the filter method to create a new array that contains only the words with more than four letters in the array
// Your code here
const word = ["hello", "world",];
const filteredWords = words.filter(word => word.length > 4);
console.log(filteredWords);


// TODO 5.6 Use the reduce method to concatenate all words in the array into a single string
// Your code here
const concatenatedStrings = word.reduce((accumulator, word) => accumulator + word, '');
console.log(concatenatedStrings);
// Checkpoint 5.1 Summarize what map, filter, and reduce do
// Answer: 
console.log("map transforms array elements and creates a new array.");
console.log("filter creates a new array with elements that meet a condition.");
console.log("reduce combines array elements into a single value.");
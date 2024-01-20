// Todo 4.6a Create a funciton called isPalindrome function which checks if the given word is a palindrome
// What is a Palindrome? See here: https://en.wikipedia.org/wiki/Palindrome. Feel free to search for the implementation
function isPalindrome(word) {
    const cleanedWord = word.replace(/\s/g, '').toLowerCase();
    return cleanedWord === cleanedWord.split('').reverse().join('');
  }
  console.log(isPalindrome("madam"));
  console.log(isPalindrome("racecar"));
  console.log(isPalindrome("A man, a plan, a canal – Panama"));
  console.log(isPalindrome("hello"));
  
// Todo 4.6b Set the isPalindrome function as the default export of the module
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// someOtherFile.js

/*import isPalindrome from './palindrome';
console.log(isPalindrome("radar"));
console.log(isPalindrome("hello")); */

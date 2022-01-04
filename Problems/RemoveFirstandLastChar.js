// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str) {
  return str.slice(1, str.length - 1);
}

console.log(removeChar("howdy"));
console.log(removeChar("character"));
console.log(removeChar("question"));


//Solution Logic - Using the slice method you can extract a portion of a string and specify and begining and an end (start, end). We want the first letter so 1, and last which can be grabbed by taking the length and subtracting 1.

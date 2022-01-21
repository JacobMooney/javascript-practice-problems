// https://www.codewars.com/kata/56747fd5cb988479af000028

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

function getMiddle(str) {
  //The start point comes from taking the length of the string and dividing it by 2, then we can raise it up with .ceil to the next integer and subtract 1. Initially I tried .floor but it would cause errors for anything less than 1
  let startPoint = Math.ceil(str.length / 2) - 1;
  //The end point is found by checking if the string length is even or odd. If even we need to return 2 char, and only 1 char if odd.
  let endPoint = str.length % 2 === 0 ? startPoint + 2 : startPoint + 1;

  return str.slice(startPoint, endPoint);
}

console.log(getMiddle("test"), "es");
console.log(getMiddle("testing"), "t");
console.log(getMiddle("middle"), "dd");
console.log(getMiddle("A"), "A");

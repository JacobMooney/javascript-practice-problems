// https://www.codewars.com/kata/546e2562b03326a88e000020

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num) {
  let squaredNum = Array.from(num.toString()).map(Number).map(num => num*num).join('');

  return parseInt(squaredNum);
}

console.log(squareDigits(3212));

// //Solution Logic - 
// Steps 
// 1. Change int to a string using .toString() inside of Array.from to then turn that into an array of chars
// 2. Use .map(Number) on the new array to turn each into a number again, found this part solution on StackOverflow actually
// 3. Use .map again but to square each number in the array so index*index
// 4. .join the array into a single string again
// 5. finally return the result inside a parseInt() to return the string as a number/

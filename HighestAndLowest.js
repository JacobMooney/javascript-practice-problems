// https://www.codewars.com/kata/554b4ac871d6813a03000035

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers) {
  let numArr = numbers.split(" ").map(Number)
  let high = numArr[0];
  let low = numArr[0];
  numArr.forEach((num) => {
    if (num > high) {
      high = num;
    } else if (num < low) {
      low = num;
    }
  });
  return `${high} ${low}`;
}

//Also can use Math.min and Math.max with the spread operator to avoid iterating
function highAndLow(numbers){
  numbers = numbers.split(' ').map(Number);
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));

//Solution Logic - The incoming string need to be .split and converted to numbers using .map(Number).
//Then we can work with it fairly easily, using an iterative aproach as above or taking advantage of the Math functions as below.
//Finally using a string template literal to take the numbers and format them into the desired string output.

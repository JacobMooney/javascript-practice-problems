// //Hacker Rank Problem

// You will be given a list of 32 bit unsigned integers. Flip all the bits ( and ) and return the result as an unsigned integer.

// Example

// Function Description

// Complete the flippingBits function in the editor below.

// flippingBits has the following parameter(s):

// The first line of the input contains , the number of queries.
// Each of the next  lines contain an integer, , to process

// Constraints

// Sample Input
// 3
// 2147483647
// 1
// 0

// Sample Output
// 2147483648
// 4294967294
// 4294967295
// Explanation

//The instructions didn't copy paste 100% but the below illustrates the objective
// Take 1 for example, as unsigned 32-bits is 00000000000000000000000000000001 and doing the flipping we get 11111111111111111111111111111110 which in turn is 4294967294.

function flippingBits(num) {
  //take the input number and convert to binary with toString()
    //and pad the start with 0s, and span 32 digits
  let binaryNum = num.toString(2).padStart(32, 0);
  //split into an array, and change the 0s to 1s and vice versa
  let flippedNum = binaryNum
    .split("")
    .map((char) => (char === "0" ? "1" : "0"));
    //finally join the array and pass that string into parseInt to return the new int
  let flippedBits = parseInt(flippedNum.join(""), 2);
  return flippedBits;
}

console.log(flippingBits(3));
console.log(flippingBits(2147483647));
console.log(flippingBits(1));
console.log(flippingBits(0));

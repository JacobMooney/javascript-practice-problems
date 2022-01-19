// https://www.codewars.com/kata/526571aae218b8ee490006f4

// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

var countBits = function (n) {
  let binCount = n
    .toString(2) //Change incoming int to binary
    .split("") //Split the new binary string into an array
    .filter((i) => i == 1).length; //filter that array for "1"s and then return that length
  return binCount;
};

console.log(countBits(0), 0);
console.log(countBits(4), 1);
console.log(countBits(7), 3);
console.log(countBits(9), 2);
console.log(countBits(10), 2);
console.log(countBits(5095699547), 19);

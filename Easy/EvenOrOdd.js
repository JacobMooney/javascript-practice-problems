// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function oddOrEven(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(oddOrEven(0));

// Alt Solution

function odd_or_even(num) {
  return num % 2 ? "Odd" : "Even"
}


//Solution Logic - Using the modulus operator to see if the given number is divisible by 2 with or without a remainder. Mod % 2 means the number will be 0 if even, or anything else if odd.

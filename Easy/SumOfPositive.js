// https://www.codewars.com/kata/5715eaedb436cf5606000381

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  if (arr.length > 0) {
    const filtered = arr.filter((num) => num > 0);
    if (filtered.length > 0) {
      const totaled = filtered.reduce((total, val) => (total += val));
      return totaled;
    } else {
      return 0;
    }
  } else {
    return 0;
  }
}

let testArray = [1,-4,7,12]; //Pos total is 20

console.log(positiveSum(testArray));

//Solution Logic - Checking the array in stages to return the positive number sum.
//1. Check if the array has any contents with .length
//2. filter the array for positive numbers
//3. check again if the array has any contents after the filter incase the array only contained negative numbers
//4. finally use reduce to iterate through the array and add all the numbers together, return that total

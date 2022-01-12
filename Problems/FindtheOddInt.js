// // https://www.codewars.com/kata/54da5a58ea159efa38000836

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(arr) {
  //First reduce the number array into an object where the keys are the numbers and the values are the occurances.
  let reducedArr = arr.reduce((obj, index) => {
    if (obj[index]) {
      obj[index] += 1;
    } else {
      obj[index] = 1;
    }
    return obj;
  }, {});
  //Then we return the odd number by using keys to make an array of the keys, which we then use find() to look at each key and check if it's value is odd. This returns the key as a string, so we can wrap this operation in Number to convert it.
  return Number(
    Object.keys(reducedArr).find((key) => reducedArr[key] % 2 !== 0)
  );
}

console.log(findOdd([7]));
console.log(findOdd([0]));
console.log(findOdd([1, 1, 2]));
console.log(findOdd([0, 1, 0, 1, 0]));
console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]));

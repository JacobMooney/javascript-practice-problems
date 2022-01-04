// https://www.codewars.com/kata/5809c661f15835266900010a

// Write a function that doubles every second integer in a list, starting from the left.

// Example:

// doubleEveryOther([1,2,3,4]) => [ 1, 4, 3, 8 ]

function doubleEveryOther(arr) {
  let dubArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      dubArr.push(arr[i] * 2);
    } else {
      dubArr.push(arr[i]);
    }
  }
  return dubArr;
}

console.log(doubleEveryOther([1, 2, 3, 4]));
console.log(doubleEveryOther([1, 19, 6, 2, 12, -3]));
console.log(doubleEveryOther([-1]));


//Solution Logic - Loop through the provided array and then double every other index using, I used the index % 2 to check each index for odd or even since numbers follow a pattern of odd or even. Then I would either push the value into a new array based on it's posistion.
// https://www.codewars.com/kata/52597aa56021e91c93000cb0

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
  //Set up 2 array to hold 0 values and anything else
  let fixedArr = [];
  let zeroArr = [];
  arr.forEach((num) => {
    //If the current num === 0 push into zero array
    if (num === 0) {
      zeroArr.push(0);
      //Else push into everything else array
    } else {
      fixedArr.push(num);
    }
  });
  //Finally we return the non-zero array with the 0s concated to the end
  return fixedArr.concat(zeroArr);
}

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
console.log(moveZeros([1, 2, 1, 1, 3, 1, 0, 0, 0, 0]));
console.log(
  moveZeros([
    "a",
    0,
    0,
    "b",
    null,
    "c",
    "d",
    0,
    1,
    false,
    0,
    1,
    0,
    3,
    [],
    0,
    1,
    9,
    0,
    0,
    {},
    0,
    0,
    9,
  ])
);

// https://www.codewars.com/kata/5526fc09a1bbd946250002dc

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

function findOutlier(integers) {
  //Filter the argument array into ODD and EVEN arrays
  let evens = integers.filter((num) => num % 2 === 0);
  let odds = integers.filter((num) => num % 2 !== 0);
  //Then return whichever array only contains 1 item using .length
  return evens.length === 1 ? evens[0] : odds[0];
}

console.log(findOutlier([0, 1, 2]), 1);
console.log(findOutlier([1, 2, 3]), 2);
console.log(findOutlier([2, 6, 8, 10, 3]), 3);
console.log(findOutlier([0, 0, 3, 0, 0]), 3);
console.log(findOutlier([1, 1, 0, 1, 1]), 0);

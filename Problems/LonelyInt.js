//Hacker rank Problem

// Given an array of integers, where all elements but one occur twice, find the unique element.

// Example

// The unique element is .

// Function Description

// Complete the lonelyinteger function in the editor below.

// lonelyinteger has the following parameter(s):

// int a[n]: an array of integers
// Returns

// int: the element that occurs only once
// Input Format

// The first line contains a single integer, , the number of integers in the array.
// The second line contains  space-separated integers that describe the values in .

// Constraints

// It is guaranteed that  is an odd number and that there is one unique element.
// , where .

function lonelyinteger(arr) {
  //iterated through each index in the argument array
  let unique = arr.map((num) => {
    //filter through the argument array looking for occurances of more than 1
    return arr.filter((item) => num === item).length;
  });
  //return the index from the map that equals 1, which will match the position of the value that only occurs once
  return arr[unique.indexOf(1)];
}

let values = [0, 1, 2, 3, 4, 3, 2, 1, 0];

console.log(lonelyinteger(values));

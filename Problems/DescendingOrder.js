// https://www.codewars.com/kata/5467e4d82edf8bbf40000155

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(num) {
  let reverseNum = num
  //Number to string
    .toString()
    //Split the string into an array
    .split("")
    //Sort the array in descending order ("b - a" in the sort) 
    .sort((a, b) => {
      return b - a;
    })
    //Join the sorted array back to a single string
    .join("");
    //Return the string inside Number to return as a num
  return Number(reverseNum);
}

console.log(descendingOrder(0), 0);
console.log(descendingOrder(1), 1);
console.log(descendingOrder(111), 111);
console.log(descendingOrder(15), 51);
console.log(descendingOrder(1021), 2110);
console.log(descendingOrder(123456789), 987654321);

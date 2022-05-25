// https://www.codewars.com/kata/55fd2d567d94ac3bc9000064

// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)


/*
-Notes-
row will equal number of values to sum
n * (i) + 1 = startNum
*/

// 1 -->  1
// 2 --> 3 + 5 = 8

// Eventually realized after the fact the answer is simply (n ^ 3)
// Overkill to solve this problem, but interesting I solved it with my own weird function
function rowSumOddNumbers(n) {
  let oddSum = 0;
  // This is the pattern I found/solved to determine the starting value of the row
  let strVal = (n * (n-1)) + 1;
  // Then we iterate on that row for the appropriate many of values it should have and only add the odds in
  for (let i = 0; i < n*2; i++) {
    if((strVal + i)%2!== 0){
      oddSum += strVal + i;
    }
  }
  return oddSum;
}

// console.log(rowSumOddNumbers(1), 1);
// console.log(rowSumOddNumbers(2), 8);
// console.log(rowSumOddNumbers(5), 125);
// console.log(rowSumOddNumbers(42), 74088);

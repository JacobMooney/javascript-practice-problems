// Question 1:
// Write a function that takes one parameter, n. Using n, print out a 2D triangle of stars, “*”, with
// the number of rows being equal to n, and the longest row being the exact middle, or the two
// middle rows if n is even.
// Example:
// n = 5
// Output:
// *
// * *
// * * *
// * *
// *
// Example 2:
// n = 8
// Output:
// *
// * *
// * * *
// * * * *
// * * * *
// * * *
// * *
// *

function stars(n) {
  // Check for even num to trigger both conditions
  // to be meet below to output a double longest row
  let f = n % 2 === 0 ? 0 : 1;
  // iterate for the length of n
  for (let i = 1; i < n; i++) {
    // "i" is iterating from 1
    // "dec" is decrementing from (n - i)
    let dec = (n - i);
    // while i is less than dec log the increasing value stars
    if (i <= dec) {
      console.log("*".repeat(i));
    }
    // until dec becomes the lower value then log the decreasing value stars
    // f is to offset the i and dec if even or odd
    if (i + f >= dec) {
      console.log("*".repeat(n - i));
    }
  }
}
stars(3);
stars(8);

/////////////////////////////////////////////

// Question 2:
// Write a function to convert roman numeral strings into an Integer.
// Symbol Value
// I 1
// V 5
// X 10
// L 50
// C 100
// D 500
// M 1000
// Roman numerals are usually written largest to smallest from left to right. However, the numeral
// for four is not IIII. Instead, the number four is written as IV. Because the one is before the five
// we subtract it making four. The same principle applies to the number nine, which is written as IX.
// There are six instances where subtraction is used:
// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Example 1:
// Input = “III”
// Output = 3
// Example 2:
// Input = “LVIII”
// Output = 58
// Example 3:
// Input = "MMMXLV"
// Output = 3045

function romanNumerals(str) {
  // reference table for operations
  let numerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  // split incoming string into array
  // reduce array into a total based on letters in array
  let value = str.split("").reduce((sum, letter, i, arr) => {
    // check if letter is before a char that denotes subtraction
    if (letter === "I" && (arr[i + 1] === "V" || arr[i + 1] === "X")) {
      return (sum -= numerals[letter]);
    }
    if (letter === "X" && (arr[i + 1] === "L" || arr[i + 1] === "C")) {
      return (sum -= numerals[letter]);
    }
    if (letter === "C" && (arr[i + 1] === "D" || arr[i + 1] === "M")) {
      return (sum -= numerals[letter]);
    }
    // else simply look up value from numeral table and add to sum
    return (sum += numerals[letter]);
  }, 0);

  return value;
}
romanNumerals("LXXXII"); //? expect 82 
romanNumerals("LVIII"); // expect 58
romanNumerals("MMMXLV"); // expect 3045
romanNumerals("MMMCMXCIX"); // expect 3999
romanNumerals("MMMCMV"); // expect 3905

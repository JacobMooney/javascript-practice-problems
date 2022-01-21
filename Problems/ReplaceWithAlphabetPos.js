//www.codewars.com/kata/546f922b54af40e1e90001da

// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

//Technically codewars was showing this as wrong but im fairly certain there is an issue with their tests.
function alphabetPosition(text) {
  //Take the incoming string and turn it all into lowercase because the character codes are 96 places from the number position in the alphabet.
  let code = text
    .toLowerCase()
    //Then we filter out the parts of the string that are not letters
    .match(/[A-Z]/gi)
    //then char to charCode while subtracting 96 to get to the numeric alphabet spot
    .map((char) => char.charCodeAt(char) - 96)
    //join the array back together into a single string
    .join(" ");
  return code;
}

//Test Case One
let checkOne = (alphabetPosition("The sunset sets at twelve o' clock."));
let checkTwo = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11";
console.log(checkOne === checkTwo);

//Test Case Two
let checkThree = (alphabetPosition("The narwhal bacons at midnight."));
let checkFour = "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20";
console.log(checkThree === checkFour);

//This is the string which was causing my code to not pass on codewars, but works correctly here locally with Quokka.
let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ[";
console.log(alphabetPosition(string));
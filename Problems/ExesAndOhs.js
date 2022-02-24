https://www.codewars.com/kata/55908aad6620c066bc00002a

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  //convert to lowercase, split into chars, filter for the x's, finally return the length
  let xCount = str.toLowerCase().split('').filter(char => char === 'x').length;
  //convert to lowercase, split into chars, filter for the o's, finally return the length
  let oCount = str.toLowerCase().split('').filter(char => char === 'o').length;
  //if both of the char searches are the same value then we know there is an equal amount of both
  return xCount === oCount ? true : false;
}

console.log(XO('xo'),true);
console.log(XO("xxOo"),true);
console.log(XO("xxxm"),false);
console.log(XO("Oo"),false);
console.log(XO("ooom"),false);
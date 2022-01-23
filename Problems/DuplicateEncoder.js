//www.codewars.com/kata/54b42f9314d9229fd6000d9c

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

function duplicateEncode(word) {
  //Construct an object that had the letters for keys and occurance for values, a pattern I've used before
  let wordObj = word
    .toLowerCase()
    .split("")
    .reduce((obj, char) => {
      obj[char] ? (obj[char] += 1) : (obj[char] = 1);
      return obj;
    }, {});

  //Then we simply map out a new array that checks against the above object values for the num of occurances in the word
  let encode = word
    .toLowerCase()
    .split("")
    .map((char) => {
      if (wordObj[char] > 1) {
        return ")";
      } else {
        return "(";
      }
    })
    .join("");
  return encode;
}

//Another users code that includes an interesting use of indexOf & lastIndexOf
// const duplicateEncode = s => s
//   .toLowerCase()
//   .split``

//a.indexOf(e) === a.lastIndexOf(e) is comparing the first and last occurance of a letter in the array to check if they're the same which would tell you if the letter occured more than once

//   .map((e, _, a) => a.indexOf(e) === a.lastIndexOf(e) ? '(' : ')')
//   .join``;

console.log(duplicateEncode("din"), "(((");
console.log(duplicateEncode("recede"), "()()()");
console.log(duplicateEncode("Success"), ")())())", "should ignore case");
console.log(duplicateEncode("(( @"), "))((");

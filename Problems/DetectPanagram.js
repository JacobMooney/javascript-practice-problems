// https://www.codewars.com/kata/545cedaa9943f7fe7b000048

// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
  //First break the incoming string into an array of character codes, to later check if the code ranges from 97-122
  let fixedStr = string
    .toLowerCase()
    .match(/[a-z]+/g)
    .join("")
    .split("")
    .map((char)=>{
      return char.charCodeAt(char);
    })
    //Then the charCode array is mapped to check if the current charCode plus 1 is in the array, because any charCode that does not match this condition means the input string did not contain that letter. Because the last charCode + 1 would be 123 we also include a special case for the last possible charCode(num === 122)
  let checkStr = fixedStr.map((num, i, arr) => {
    if (arr.includes(num + 1) || num === 122) {
      return true;
    } else {
      return false;
    }
  });
  //Finally if the previously created array contained a single false value return false, else return true.
  return checkStr.includes(false) ? false : true;
}

var string = "The quick brown fox jumps over the lazy dog.";
console.log(isPangram(string), true);
var string = "This is not a pangram.";
console.log(isPangram(string), false);

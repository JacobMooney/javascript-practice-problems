//www.codewars.com/kata/6210fb7aabf047000f3a3ad6

// Task
// In this task, you need to restore a string from a list of its copies.

// You will receive an array of strings. All of them are supposed to be the same as the original but, unfortunately, they were corrupted which means some of the characters were replaced with asterisks ("*").

// You have to restore the original string based on non-corrupted information you have. If in some cases it is not possible to determine what the original character was, use "#" character as a special marker for that.

// If the array is empty, then return an empty string.

// Examples:
// input = [
//   "a*cde",
//   "*bcde",
//   "abc*e"
// ]
// result = "abcde"

// input = [
//   "a*c**",
//   "**cd*",
//   "a*cd*"
// ]
// result = "a#cd#"

function assembleString(array) {
  //Catch condition for empty array
  if (array.length === 0) {
    return "";
  }
  //holder array to check against
  let charArr = array[0].split("");

  //loop through argument arrays
  for (let i = 0; i < array.length; i++) {
    //Split each string into chars
    let currWord = array[i].split("");

    //loop through each char
    for (let j = 0; j < currWord.length; j++) {
      if (charArr[j] === "*") {
        charArr[j] = currWord[j];
      }
    }
  }
  //return the holder array, and map out any remaining(or un-decyptable) '*'s and replace them with '#'
  return charArr
    .map((char) => {
      return char === "*" ? "#" : char;
    })
    .join("");
}

// console.log(
//   assembleString(["H*llo, W*rld!", "Hel*o, *or*d!", "*ello* World*"]),
//   "Hello, World!"
// );
// console.log(assembleString([]), "");
// console.log(
//   assembleString([
//     ".** . .' .'' ! ! .",
//     ". . . .' **' ! * .",
//     "* . .*.* .'' * ! .",
//     ". . .*.' .**** ! .",
//     "**. * .* .*' ! ! .",
//   ]),
//   ". . . .' .'' ! ! ."
// );
// console.log(
//   assembleString([". . . .", ". . . .", ". . . .", ". . . .", ". . . ."]),
//   ". . . ."
// );
// console.log(
//   assembleString([
//     "12***6789",
//     "**3456789",
//     "12345**8*",
//     "***456**9",
//     "1*3*5*7*9",
//     "*2*456789",
//   ]),
//   "123456789"
// );
// console.log(assembleString(["******", "******", "******", "******"]), "######");
// console.log(
//   assembleString([
//     "*#*#*#*#*#*#*#*",
//     "*#*#*#*#*#*#*#*",
//     "*#*#*#*#*#*#*#*",
//     "*#*#*#*#*#*#*#*",
//   ]),
//   "###############"
// );

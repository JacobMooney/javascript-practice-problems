// https://www.codewars.com/kata/54b724efac3d5402db00065e

// In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superseded by voice and digital data communication channels, it still has its use in some applications around the world.
// The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.

// NOTE: Extra spaces before or after the code have no meaning and should be ignored.

// In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words.

// Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

// For example:

// decodeMorse('.... . -.--   .--- ..- -.. .')
// //should return "HEY JUDE"
// NOTE: For coding purposes you have to use ASCII characters . and -, not Unicode characters.

// The Morse code table is preloaded for you as a dictionary, feel free to use it:

// Coffeescript/C++/Go/JavaScript/Julia/PHP/Python/Ruby/TypeScript: MORSE_CODE['.--']

// NASM: a table of pointers to the morsecodes, and a corresponding list of ascii symbols
// All the test strings would contain valid Morse code, so you may skip checking for errors and exceptions. In C#, tests will fail if the solution code throws an exception, please keep that in mind. This is mostly because otherwise the engine would simply ignore the tests, resulting in a "valid" solution.

// Good luck!

decodeMorse = function (morseCode) {
  //Serate the incoming code string, trimming off extra white space from the start and end, then splitting the messeage into single words (in morse code this is with 3 spaces or pauses atleast in the kata)
  let words = morseCode.trim().split("   ");
  //Holder array for latter data
  let decodedMsg = [];
  //then we loop over each coded word in the words array
  for (let i = 0; i < words.length; i++) {
    //we futher split the words into morse character codes that are only spaced by single pauses
      //for each new single char code, we convert each through map using the kata provided method
    let message = words[i].split(" ").map((morse) => {
      return MORSE_CODE[morse]; //<-- MORSE_CODE is a table provided by the kata for decoding
    });
    //add the now decoded string of characters into the storage array, joining them together to form a single word
    decodedMsg.push(message.join(''))
  }
  //finally return the array of decoded words joined by a single space
  return decodedMsg.join(' ');
};

// console.log(decodeMorse(".... . -.--   .--- ..- -.. ."), "HEY JUDE");
console.log(decodeMorse("  .   . "), "E E");

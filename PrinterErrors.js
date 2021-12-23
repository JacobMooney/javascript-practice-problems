https://www.codewars.com/kata/56541980fa08ab47a0000040

// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

// Examples:
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"

// const goodReg = /[a-m]+/g;

function printerError(str) {
  const regex = /[n-z]+/g;
  let regStr =  str.match(regex);
  let errorCount = 0;
  if(regStr){for (let i = 0; i < regStr.length; i++) {
    errorCount += regStr[i].length;
  }}
  return `${errorCount}/${str.length}`;
}

console.log(printerError('aaabbbbhaijjjm'));
console.log(printerError('aaaxbbbbyyhwawiwjjjwwm'));

//Solution Logic - So we're given a large string that we need to check for characters from n-z and count them. We check the incoming string using regex because it's faster than check against an array with all the characters we're looking for. The .match() returns an array of matches that we can count, but some of the matches are within the same index, and if we check the length then we would get an incorrect count. Also before we go further we nest the next step in an IF statement to check if there we any matches to even find. So then we iterate through the array and count the length of each index and add it to a counter. Finally with the correct count we can use a string template literal to output the fractional format as requested.
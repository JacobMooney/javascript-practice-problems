// https://www.codewars.com/kata/5865cff66b5699883f0001aa

// This Kata is intended as a small challenge for my students

// All Star Code Challenge #22

// Create a function that takes an integer argument of seconds and converts the value into a string describing how many hours and minutes comprise that many seconds.

// Any remaining seconds left over are ignored.

// Note:
// The string output needs to be in the specific form - "X hour(s) and X minute(s)"

// For example:

// 3600 --> "1 hour(s) and 0 minute(s)"
// 3601 --> "1 hour(s) and 0 minute(s)"
// 3500 --> "0 hour(s) and 58 minute(s)"
// 323500 --> "89 hour(s) and 51 minute(s)"

function toTime(seconds) {
  if(seconds>=3600){
    let hours = ((seconds/60)/60) //?
    let minutes = ((hours%1)*0.6)*100 //?
    return `${Math.floor(hours)} hour(s) and ${Math.floor(minutes)} minute(s)`;
  }
  else{
    let onlyMin = Math.floor(seconds/60) //?
    return `0 hour(s) and ${onlyMin} minute(s)`;
  }
  }

console.log(toTime(3600), '| 1 hour(s) and 0 minute(s)');
console.log(toTime(3601), '| 1 hour(s) and 0 minute(s)');
console.log(toTime(3500), '| 0 hour(s) and 58 minute(s)');
console.log(toTime(323500), '| 89 hour(s) and 51 minute(s)');
console.log(toTime(0), '| 0 hour(s) and 0 minute(s)');  

//Smarter Solution because I made the above while I was sleepy
// function toTime(time) {
//   var h = Math.floor(time / 3600);
//   var m = Math.floor(time % 3600 / 60);
//   return h + " hour(s) and " + m + " minute(s)";
// }
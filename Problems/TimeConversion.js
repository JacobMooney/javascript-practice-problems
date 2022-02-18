//Hacker Rank Challenge

// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example

// Return '12:01:00'.

// Return '00:01:00'.

// Function Description

// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

// timeConversion has the following parameter(s):

// string s: a time in  hour format
// Returns

// string: the time in  hour format
// Input Format

// A single string  that represents a time in -hour clock format (i.e.:  or ).

// Constraints

// All input times are valid
// Sample Input - 07:05:45PM
// Sample Output - 19:05:45

//Special Time Cases in 24 hour
// 12:00:00AM -> 00:00:00
// 11:59:59AM -> 23:59:59
// 1:00:00PM -> 13:00:00
function timeConversion(time) {
  //Seperate values into strings
  let timeSplit = time.split(":");
  //Save the AM or PM string
  let amPM = timeSplit[2][2] + timeSplit[2][3];
  //Update last value in array to just the numbers
  timeSplit[2] = timeSplit[2][0] + timeSplit[2][1];
  console.log(timeSplit, amPM);
  //AM cases
  if (Number(timeSplit[0]) === 12 && amPM === "AM") {
    timeSplit[0] = "00";
  }
  //AM cases
  if (amPM === "PM" && Number(timeSplit[0]) !== 12) {
    timeSplit[0] = Number(timeSplit[0]) + 12;
  }
  //Return the joined array seperated by ':'
  return timeSplit.join(":");
}

// console.log(timeConversion("07:05:45PM"));
// console.log(timeConversion('12:00:00AM'));
// console.log(timeConversion('12:40:22AM'));
// console.log(timeConversion('12:45:54PM'), '12:45:54');

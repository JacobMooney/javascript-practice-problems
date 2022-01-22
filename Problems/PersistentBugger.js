// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

function persistence(num) {
  //If the num is greater than 9, it cannot be reduced lower so return 0
  if (num < 9) {
    return 0;
  } else {
    //A place to store the iterations
    let count = 0;
    while (num > 9) {
      //split the num into it's pieces
      let numArr = [...(num + "")];
      //multiply them together until it's a single digit
      num = numArr.reduce((total, num) => {
        return (total = total * num);
      });
      //Count for each iteration
      count++;
    }
    return count;
  }
}

console.log(persistence(39), 3);
console.log(persistence(4), 0);
console.log(persistence(25), 2);
console.log(persistence(999), 4);

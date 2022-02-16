// https://www.codewars.com/kata/55f2b110f61eb01779000053

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

function getSum(a, b) {
  //Sort the incoming values
  let range = [a, b].sort();
  //Setup a accumulator 
  let sum = 0;
  //Negative num case
  //Negative case is needed since "i" would automatically be less than the normal condition 
  if (range[0] > range[1]) {
    for (let i = range[1]; i <= range[0]; i++) {
      sum += i;
    }

    //Positive num case
    //simply start from the lower value and incriment, adding each value to the accumulator until we inclusively reach the higher value
  } else {
    for (let i = range[0]; i <= range[1]; i++) {
      sum += i;
    }
  }
  //Finally return the sum
  return sum;
}

console.log(getSum(0, -1), -1);
console.log(getSum(0, 1), 1);
console.log(getSum(-545, -172), -134079);

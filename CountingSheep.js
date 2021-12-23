// https://www.codewars.com/kata/58e0f0bf92d04ccf0a000010

// Every Friday and Saturday night, farmer counts amount of sheep returned back to his farm (sheep returned on Friday stay and don't leave for a weekend).

// Sheep return in groups each of the days -> you will be given two arrays with these numbers (one for Friday and one for Saturday night). Entries are always positive ints, higher than zero.

// Farmer knows the total amount of sheep, this is a third parameter. You need to return the amount of sheep lost (not returned to the farm) after final sheep counting on Saturday.

// Example 1: Input: {1, 2}, {3, 4}, 15 --> Output: 5

// Example 2: Input: {3, 1, 2}, {4, 5}, 21 --> Output: 6

// Good luck! :-)

function lostSheep(friday, saturday, total) {
  let countTotal = 0;

  friday.forEach(num => {
    countTotal += num;
  });
  saturday.forEach(num => {
    countTotal += num;
  });

  return total - countTotal;
}

console.log(lostSheep([1, 2], [3, 4], 15));
console.log(lostSheep([3, 1, 2], [4, 5], 21));

//Solution Logic - This is fairly simple despite the multiple params. Using the forEach I just run though the 2 arrays and push the number inside each index into a total of how many sheep counted. And then we return the total of how many counted subtracted from the total there should be.

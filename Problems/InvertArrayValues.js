// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

function invert(array) {
  // Return the copied array, and multiply every item by -1
  return [...array].map((num)=>{
    return num * -1;
  });
  // Another smart solution I found : array.map(i => 0 - i);
  // Use 0 as a "mid" point and just subtract away from it to find a negative, or sub a negative to go positive
}

// console.log(invert([1,2,3,4,5]), [-1,-2,-3,-4,-5]);
console.log(invert([1,-2,3,-4,5]), [-1,2,-3,4,-5]);
// console.log(invert([]), []);
// console.log(invert([0]), [-0]);
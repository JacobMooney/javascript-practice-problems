// https://www.codewars.com/kata/5679aa472b8f57fb8c000047

// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

// For example:

// Let's say you are given the array {1,2,3,4,3,2,1}:
// Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

// Let's look at another one.
// You are given the array {1,100,50,-51,1,1}:
// Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

// Last one:
// You are given the array {20,10,-80,10,10,15,35}
// At index 0 the left side is {}
// The right side is {10,-80,10,10,15,35}
// They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
// Index 0 is the place where the left side and right side are equal.

// Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

// Input:
// An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

// Output:
// The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

// Note:
// If you are given an array with multiple answers, return the lowest correct index.

//Self Logic Notes
//There will be a zero index case, a no correct value case, and the correct value case
//Iterate through the arrays, sum the values 0 to index - 1 and index + 1 to lenght.
function findEvenIndex(arr) {
  //The first 2 checks are to handle 0 and last index cases fairly quickly.
  //Basically just checking to see if the first of last index equals everything else summed
  let firstCheck = arr.reduce((sum, num) => sum += num);
  if(arr[0] === firstCheck){
    return 0;
  }
  let lastCheck = arr.reduce((sum, num) => sum += num);
  if(arr[arr.length-1] === lastCheck){
    return arr.length-1;
  }
  //The 2nd half of the code handles any other cases
  //Declare the value to be returned (-1) if the loop below does not find an equal sum for each side
  let peakIndex = -1;
  //Iterate the range between 1 and length - 1
  for (let i = 1; i < arr.length - 1; i++) {
    //Sum up the "left" side of the array
    let arrfirst = arr.slice(0, i).reduce((sum, num) => {
      num;
      return (sum += num);
    });
    //Sum up the "right" side of the array
    let arrSecond = arr.slice(i + 1).reduce((sum, num) => {
      num;
      return (sum += num);
    });
    //For each loop check if the 2 sums are equal, if so return the current loop iteration as it will match the needed array index
    if (arrfirst === arrSecond) {
      return (peakIndex = i);
    }
  }
  //Finally we are either returning -1 by default if not matches were found, or returning the index where a match occured.
  return peakIndex;
}

// console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]), "Peak Index: " + 3);
// console.log(findEvenIndex([1, 100, 50, -51, 1, 1]), "Peak Index: " + 1);
// console.log(findEvenIndex([1, 2, 3, 4, 5, 6]), "Peak Index: " + -1);
// console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]), "Peak Index: " + 3);
// console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]), "Peak Index: " + 0);
// console.log(findEvenIndex([10,-80,10,10,15,35,20]), "Peak Index: " + 6);

// https://www.codewars.com/kata/54e6533c92449cc251001667

// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]


//Kind of weird solution but I wanted to see if I could make a reduce work, the solutions I found after using simple for loops were likely much more efficent of simply iterating the string or array and checking the original then pushing into a seperate array as needed.
function uniqueInOrder(arg) {
  //Check if the incoming argument is a string or an array, if not split() into array
  let argCheck = typeof arg === "string" ? arg.split("") : arg;
  //Iterator used to point to the previous value as the index inside the reduce goes up
  let i = 1;
  //Return the following reduce
  return argCheck.reduce((arr, val, index) => {
    //if the index in the new array holds the same value in the previous index, do not add to new array  
    if (arr[index - i] === val) {
      i++;
      return arr;
      //if the previous value is different than the current we push into the new array
    } else {
      arr.push(val);
      return arr;
    }
  }, []);
}

// console.log(uniqueInOrder("AAAABBBCCDAABBB"), ["A", "B", "C", "D", "A", "B"]);
// console.log(uniqueInOrder("ABBCcAD"), ["A", "B", "C", "c", "A", "D"]);
// console.log(uniqueInOrder([1, 2, 2, 3, 3]), [1, 2, 3]);

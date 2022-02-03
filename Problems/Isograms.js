// https://www.codewars.com/kata/54ba84be607a92aa900000f1

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str) {
  //We are going create a new array from the original string, and lowercase it to avoid case issues.
    //The array can just be spread into a new array, and immediately filtered
  let filteredStr = [...str.toLowerCase()].filter(
    //for each char in the array we check if the index(the current char) === to the indexOf() index that is found
      //if the index found is different than the current, we know the array contains more than one of that value 
    (char, i, arr) => arr.indexOf(char) === i
  );
  //Finally we return a comparison of the passed in array and the filtered array
    //If the filtered array is the same length as the original we know we did not remove any values, which means it's an isogram
  return filteredStr.length === str.length;
}

console.log(isIsogram("Dermatoglyphics"), true);
console.log( isIsogram("isogram"), true );
console.log( isIsogram("aba"), false, "same chars may not be adjacent" );
console.log(isIsogram("moOse"), false, "same chars may not be same case");
console.log( isIsogram("isIsogram"), false );
console.log( isIsogram(""), true, "an empty string is a valid isogram" );

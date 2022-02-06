// https://www.codewars.com/kata/53369039d7ab3ac506000467

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord( bool ){
  //The ternary operator is great for simple true/false
    //It follows (condition) ? (if true) : (if false)
  return bool ? 'Yes' : 'No';
}

console.log(boolToWord(true), 'Yes')
console.log(boolToWord(false), 'No')
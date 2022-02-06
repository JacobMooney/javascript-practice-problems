// https://www.codewars.com/kata/5168bb5dfe9a00b126000018

// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
  //A common pattern for reversing strings is:
  //Split into array of char, reverse the array, and then join it back together into a single string
  return str.split('').reverse().join('');
}

console.log(solution('world'), 'dlrow');
console.log(solution('hello'), 'olleh');
console.log(solution(''), '');
console.log(solution('h'), 'h');
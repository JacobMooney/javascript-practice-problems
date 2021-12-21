// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e

// Write a function called repeatStr which repeats the given string string exactly n times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

function repeatStr (num, str) {
  let longStr = '';
  for(let i = 0; i < num; i++){
    longStr += str;
  }
  return longStr;
}

console.log(repeatStr(5,'Yo'));

//Solution Logic - Make a loop based on however many times you need to add the provided string to itself.
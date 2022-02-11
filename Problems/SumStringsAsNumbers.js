// https://www.codewars.com/kata/5324945e2ece5e1f32000370

// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

//A simple challenge, but some test cases used very large numbers
function sumStrings(a,b) {
  //Nothing crazy, but converting the strings to BigInt is nessecarry for the returned string value to be correct
  let sum = BigInt(a) + BigInt(b);
  return sum.toString();
}

console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'), '712577413488402631964821329');
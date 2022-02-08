// https://www.codewars.com/kata/5656b6906de340bd1b0000ac

// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(str1, str2) {
  //Spread 2 strings into one array
    //Reduce down to unique values
  let uniqueStr = [...str1, ...str2].reduce((acc, curr) => {
    return acc.includes(curr) ? acc : acc + curr;
  }, "");
  //sort the array
  let sortStr = uniqueStr.split("").sort((a, b) => a.localeCompare(b));

  //Quick note, sort() without a callback will sort chars just fine also
    //The line below will do the same thing as line 20
    // let sortStr = uniqueStr.split("").sort();

  //join and return the array
  return sortStr.join('');
}

console.log(longest("aretheyhere", "yestheyarehere"), "aehrsty");
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
console.log(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")

//https://www.codewars.com/kata/54ff3102c1bad923760001f3

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let vowelsSplit = str.split("");
  let vowelFilter = vowelsSplit.filter(
    (char) =>
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
  );
  let vowelCount = vowelFilter.length;

  return vowelCount;
}

console.log(getCount("someword"));

//Solution Logic - take incoming string and split into an array with .split(""), then filter through the new array looking for anything that matches one of the vowel cases. Might not be the most effcient for larger cases but fine for single word use.

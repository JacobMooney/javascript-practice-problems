// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text) {
  //reduce the array into an object with keys for each letter and values for their occurance.
  reducedText = text
    .toLowerCase()
    .split("")
    .reduce((obj, char) => {
      if (obj[char]) {
        obj[char] += 1;
      } else {
        obj[char] = 1;
      }
      return obj;
    }, {});
    //Filter the new object but returning the values and filtering the ones that are greater than 1, using length to get the count.
  let count = Object.values(reducedText).filter((i) => i > 1).length;
  return count;
}

console.log(duplicateCount(""), 0);
console.log(duplicateCount("abcde"), 0);
console.log(duplicateCount("aabbcde"), 2);
console.log(duplicateCount("aabBcde"), 2, "should ignore case");
console.log(duplicateCount("Indivisibility"), 1);
console.log(
  duplicateCount("Indivisibilities"),
  2,
  "characters may not be adjacent"
);

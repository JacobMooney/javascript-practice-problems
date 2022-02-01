// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(str) {
  //Split into array
  return str.split(" ").reduce((shortest, word) => {
    //Use the reduce to compare the current word against the next
    return shortest.length < word.length ? shortest : (shortest = word);
    //Return the length
  }).length;
}

console.log(
  findShort("bitcoin take over the world maybe who knows perhaps"),
  3
);
console.log(
  findShort(
    "turns out random test cases are easier than writing out basic ones"
  ),
  3
);
console.log(findShort("Let's travel abroad shall we"), 2);


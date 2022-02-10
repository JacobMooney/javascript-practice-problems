// https://www.codewars.com/kata/523a86aa4230ebb5420001e1

// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false

// 'abba' & 'abca' == false

// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

function anagrams(word, words) {
  //Sort the original word for easier comparison
  let sortWord = word.split("").sort().join("");
  //Then we filter through word array and compare a sorted version of each word to the initial comparison word
    //Only return words that match
  let sortedWords = words.filter((word) => {
    if (sortWord === word.split("").sort().join("")) {
      return word;
    }
  });
  //Return the filtered array
  return sortedWords;
}

console.log(anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]), [
  "aabb",
  "bbaa",
]);

console.log(anagrams("racer", ["crazer", "carer", "racar", "caers", "racer"]), [
  "carer",
  "racer",
]);

console.log(anagrams("laser", ["lazing", "lazy", "lacer"]), []);

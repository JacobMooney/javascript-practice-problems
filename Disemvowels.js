// https://www.codewars.com/kata/52fba66badcd10859f00097e

// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
  let newSentance = [];

  let vowelList = ["a", "e", "i", "o", "u"];

  let sentance = str.split(" ");

  for (let i = 0; i < sentance.length; i++) {
    let wordSplit = sentance[i].split("");

    let wordFiltered = wordSplit
      .filter((char) => !vowelList.includes(char.toLowerCase()))
      .join("");

    newSentance.push(wordFiltered);
  }

  return newSentance.join(" ");
}

console.log(disemvowel("This website is for losers LOL!"));

//Solution Logic - This one was tricky because I thought I could reuse the code from VowelCount, but the multiple OR logic would be too cumbersome for almost the entire alphabet.
//The sentance needs to be broken into parts with .split(" ") with a space.
//Then loop over each item of this now split up sentance array.
//Then again each one of these new words in each index needs to .split() also
//Using filter we can check for which letters to create the new array with, of which I used .includes to look for any characters that are NOT in the list of vowels.
//Finally we need to join() the new array which represents the word without vowels, and return all of those with one last join() from array of words to a single string.


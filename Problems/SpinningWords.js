// https://www.codewars.com/kata/5264d2b162488dc400000001

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(string) {
  return string
  //split incoming string into array
    .split(" ")
    //use reduce to filter though array while building the new sentance
    .reduce((sentance, word) => {
      //if word is longer than 5 char, reverse it
      if (word.length >= 5) {
        sentance.push(word.split("").reverse().join(""));
        return sentance;
        //else just return unmodified word
      } else {
        sentance.push(word);
        return sentance;
      }
    }, [])
    .join(" ");
}

//Note for self: .push() will return the lenght after the operation, so don't return .push operation unless needed

console.log(spinWords("Welcome"));
console.log(spinWords("Hey fellow warriors"));
console.log(spinWords("This is a test"));
console.log(spinWords("Just kidding there is still one more"));

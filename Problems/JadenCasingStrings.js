// https://www.codewars.com/kata/5390bac347d09b7da40006f6

// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

String.prototype.toJadenCase = function () {
  //Worth noting, we have to use the "this" keyword to access the value this function is going to be preformed on
    //split the incoming string into and array of words
  let fixedStr = this.split(" ").map((word)=>{
    //then map over each word, and return the same word with the first letter uppercased
      //everything after the first letter can be grabbed using slice(1,word.length)
    return word[0].toUpperCase() + word.slice(1,word.lenght);
  });
  //then finally return the array joined together as a single string seperated by " "'s
  return fixedStr.join(" ");
};

var str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase());
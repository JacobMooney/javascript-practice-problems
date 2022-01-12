//https://www.codewars.com/kata/52449b062fb80683ec000024/javascript

// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false<p></p>



function generateHashtag(str) {
  // .split() incoming string into individual array items, .filter() out the empty white space with "" provided.
  str = str.split(" ").filter((index) => index !== "");
  // The return value can only be 140 chars long, but we can't compare 140 inclusively because we are adding the # symbol to the str passed in. So the if checks if it's between that range and if there is only 1 word at this point if it's less than 140 
  if (str.length > 0 && str.length < 140 && str[0].length < 140) {
    //new variable with # added to a map of the str that uppercases the first letter and combines it with the remaining letters, then we join that returned map() array to a single string.
    let hashTag =
      "#" +
      str
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join("");
    return hashTag;
  } else {
    //If the str is to long or empty we simply return false.
    return false;
  }
}

console.log(generateHashtag(" Hello there thanks for trying my Kata"));
console.log(generateHashtag("    Hello     World   "));
console.log(generateHashtag(""));
console.log(generateHashtag("code" + " ".repeat(140) + "wars"));
console.log(generateHashtag("a".repeat(140)));


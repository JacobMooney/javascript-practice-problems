// https://www.codewars.com/kata/55c45be3b2079eccff00010f

// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(str) {
  //split incoming array into each word
  let words = str.split(" ");
  //holder array
  let wordSort = [];

  //loop through the array
  for (let i = 0; i < words.length; i++) {
    //for each word in the words array, we are going to assign the equivilant index in the wordSort array to the value found by "words[i].split("").sort()[0]"
      //this takes the current word, splits into chars, then sorts the chars, which will sort the single num to index zero which we return as the index in wordSort we want to assign the current word to
        //to be clearer this means:
        //iteration i=0 the wordSort array looks like [, ,is2] -using the first test case
        //iteration i=1 the wordSort array looks like [,Thi1s,is2]
        //iteration i=2 the wordSort array looks like [,Thi1s,is2, ,T4est]
        //iteration i=3 the wordSort array looks like [,Thi1s,is2,3a,T4est]

    wordSort[words[i].split("").sort()[0]] = words[i]; //?
  }
  //return the wordSort array, join it, and trim off the extra whitespace
  return wordSort.join(" ").trim();
}

console.log(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est")
console.log(
  order("4of Fo1r pe6ople g3ood th5e the2"),
  "Fo1r the2 g3ood 4of th5e pe6ople"
);
console.log(order(""), "", "empty input should return empty string" )

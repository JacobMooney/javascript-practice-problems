// https://www.codewars.com/kata/517abf86da9663f1d2000003

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
  //return empty string for empty string case
  if (str === "") return "";
  let camel = str
  //regex to make split() look for either "-" or "_"
    .split(/-|_/)
    //map through the new words array, and anything after the first index we want to uppercase() the first char
    .map((word, index) =>
      index > 0 ? word[0].toUpperCase() + word.slice(1) : word
    )
    //join the array back to a single string
    .join("");
  return camel;
}

console.log(
  toCamelCase(""),
  "",
  "An empty string was provided but not returned"
);
console.log(
  toCamelCase("the_stealth_warrior"),
  "theStealthWarrior",
  "toCamelCase('the_stealth_warrior') did not return correct value"
);
console.log(
  toCamelCase("The-Stealth-Warrior"),
  "TheStealthWarrior",
  "toCamelCase('The-Stealth-Warrior') did not return correct value"
);
console.log(
  toCamelCase("A-B-C"),
  "ABC",
  "toCamelCase('A-B-C') did not return correct value"
);

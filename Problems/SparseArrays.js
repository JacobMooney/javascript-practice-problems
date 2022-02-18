// Hacker Rank Problem

// There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.

// Example
// There are  instances of ',  of '' and  of ''. For each query, add an element to the return array, .

// Function Description
// Complete the function matchingStrings in the editor below. The function must return an array of integers representing the frequency of occurrence of each query string in strings.

// matchingStrings has the following parameters:

// string strings[n] - an array of strings to search
// string queries[q] - an array of query strings
// Returns

// int[q]: an array of results for each query
// Input Format

// The first line contains and integer , the size of .
// Each of the next  lines contains a string .
// The next line contains , the size of .
// Each of the next  lines contains a string .

// Constraints

// //Sample Input
// 4 - input array to be searched
// aba
// baba
// aba
// xzxb
// 3 - input values to look for, also an array
// aba
// xzxb
// ab
// //Sample Output as an array
// 2
// 1
// 0

function matchingStrings(strings, queries) {
  //Looking for num of occurances of queries in strings
  //map through to access each query, then we can use filter to compare each query item to the entire strings array
  //this return an array that matches the condition, so the occurances are simply the length of the returned filter array
  let countArr = queries.map((query) => {
    return strings.filter((item) => item === query).length;
  });
  return countArr;
}

let searchString = ["aba", "baba", "aba", "xzxb"];
let queryString = ["aba", "xzxb", "ab"];

console.log(matchingStrings(searchString, queryString));

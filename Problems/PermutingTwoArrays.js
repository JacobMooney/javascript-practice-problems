//Hacker Rank Problem

// There are two -element arrays of integers,  and . Permute them into some  and  such that the relation  holds for all  where .

// There will be  queries consisting of , , and . For each query, return YES if some permutation ,  satisfying the relation exists. Otherwise, return NO.

// Example
// A valid  is  and :  and . Return YES.

// Function Description

// Complete the twoArrays function in the editor below. It should return a string, either YES or NO.

// twoArrays has the following parameter(s):

// int k: an integer
// int A[n]: an array of integers
// int B[n]: an array of integers
// Returns
// - string: either YES or NO

// Input Format

// The first line contains an integer , the number of queries.

// The next  sets of  lines are as follows:

// The first line contains two space-separated integers  and , the size of both arrays  and , and the relation variable.
// The second line contains  space-separated integers .
// The third line contains  space-separated integers .
// Constraints

// Sample Input

// STDIN       Function
// -----       --------
// 2           q = 2
// 3 10        A[] and B[] size n = 3, k = 10
// 2 1 3       A = [2, 1, 3]
// 7 8 9       B = [7, 8, 9]
// 4 5         A[] and B[] size n = 4, k = 5
// 1 2 2 1     A = [1, 2, 2, 1]
// 3 3 3 4     B = [3, 3, 3, 4]
// Sample Output

// YES
// NO
// Explanation

// There are two queries:

// Permute these into  and  so that the following statements are true:

// , , and . To permute  and  into a valid  and , there must be at least three numbers in  that are greater than .

//Simpler Description
//Given 2 arrays, rearrange them so that each index pair (so array1[0] and array2[0], then array1[1] and array2[1], etc) will equal or greater than the k value for each pair
//Can only rearrange but has to use the original values

function twoArrays(k, A_Array, B_Array) {
  //The problem is worded kind of poorly but the way to solve seems to be that if the lowest value from one array and the highest from the other cannont meet the "k" target value we return false, else true.
  
  //loop for the length of one of the arrays
  for (let i = 0; i < A_Array.length; i++) {
    //sort the arrays one ascending
    let sortA = A_Array.sort((a,b)=>a-b)[i];
    //sort the array descending
    let sortB = B_Array.sort((a,b)=>b-a)[i];
    //if the highest and lowest can't meet the k value we return 'NO'
    if((sortA + sortB) < k){
      return 'NO';
    }
  }
  //else we return 'YES'
  return 'YES';
}

console.log(twoArrays(10, [2, 1, 3], [7, 8, 9]));
console.log(twoArrays(5, [1, 2, 2, 1], [3, 3, 3, 4]));

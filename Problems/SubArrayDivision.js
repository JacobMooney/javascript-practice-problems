//Hacker Rank Problem

// Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

// Lily decides to share a contiguous segment of the bar selected such that:

// The length of the segment matches Ron's birth month, and,
// The sum of the integers on the squares is equal to his birth day.
// Determine how many ways she can divide the chocolate.

// Example
// Lily wants to find segments summing to Ron's birth day,  with a length equalling his birth month, . In this case, there are two segments meeting her criteria:  and .

// Function Description

// Complete the birthday function in the editor below.

// birthday has the following parameter(s):

// int s[n]: the numbers on each of the squares of chocolate
// int d: Ron's birth day
// int m: Ron's birth month
// Returns

// int: the number of ways the bar can be divided
// Input Format

// The first line contains an integer , the number of squares in the chocolate bar.
// The second line contains  space-separated integers , the numbers on the chocolate squares where .
// The third line contains two space-separated integers,  and , Ron's birth day and his birth month.

function birthday(array, days, months) {
  //Holder array
  let goodChoco = [];
  for (let i = 0; i < array.length; i++) {
    //Each iteration we copy a section of the argument array
    let currCheck = array.slice(i, i + months);
    //Then we sum up all the values from the above copy
    let currSum = currCheck.reduce((sum,num)=>sum+=num);
    //There are 2 conditions to be met so we check if both the current check is the right sum and right lenght. If so, push into holder array
    if (currSum === days && currCheck.length === months) {
      goodChoco.push(currCheck);
    }
  }
  //Return the number of occurances in the holder array
  return goodChoco.length;
}

console.log(birthday([1, 2, 1, 3, 2], 3, 2));

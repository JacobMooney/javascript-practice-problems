//www.codewars.com/kata/5270d0d18625160ada0000e4

// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
// A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

// Example scoring

//  Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
//  1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
//  2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
// In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.


//This kata was kind of tricky due to the multiple nest cases that could arise
function score(dice) {
  //Score variable to return and track
  let score = 0;
  //Reduced the array down to an object of occurances so I could manage the score without needed to remove values from the array as they were counted
  let sumDice = dice.reduce((sum, num) => {
    if (sum[num]) {
      sum[num]++;
      return sum;
    } else {
      sum[num] = 1;
      return sum;
    }
  }, {});

  //Then we iterate over the object checking against a few cases, because 5's and 1's have special bonuses compared to every other number
  for (const key in sumDice) {
    if (key === "1") {
      //Check for any additional points that don't fit into a 3 num set
      let remainder = sumDice[key] % 3;
      //The score is found by taking the number of occurances divided by 3(or number of sets) and multiplying them by 1000 in the case of rolls that rolled "1", and then adding on any additional points that count but don't fit in a set
      score += Math.floor(sumDice[key] / 3) * 1000 + 100 * remainder;
    } else if (key === "5") {
      //5's follow a similar pattern but triple sets are only worth 500 and singles worth 50
      let remainder = sumDice[key] % 3;
      score += Math.floor(sumDice[key] / 3) * 500 + 50 * remainder;
    } else {
      //Every other possible point can only come from triples of any non 1 or 5 roll
      score += Math.floor(sumDice[key] / 3) * (key * 100);
    }
  }
  //Return the final summed score
  return score;
}

// console.log(score([2, 3, 4, 6, 2]), "Should be 0 :-(");

// console.log(score([4, 4, 4, 3, 3]), "Should be 400");

// console.log(score([2, 4, 4, 4, 4]), "Should be 400");

// console.log(score([1, 1, 1, 1, 1]), "Should be 1200");


// https://www.codewars.com/kata/576757b1df89ecf5bd00073b

// Build Tower
// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

// Tower block is represented as *

// Python: return a list;
// JavaScript: returns an Array;
// Have fun!

// for example, a tower of 3 floors looks like below

// [
//   '  *  ', 1:1
//   ' *** ', 2:3
//   '*****'  3:5
// ]
// and a tower of 6 floors looks like below

// [
//   '     *     ', 1:1 - 10 spaces
//   '    ***    ', 2:3 - 8 spaces
//   '   *****   ', 3:5 - 6 spaces
//   '  *******  ', 4:7 - 4 spaces
//   ' ********* ', 5:9 - 2 spaces
//   '***********'  6:11 - 0 spaces
// ]

//Logic Stuff
// The pattern is 1 + 2 = 3, then previous sum plus 2, so 3 + 2 = 5, 5 + 2 = 7, etc
//Largest floor will be (floors * 2) - 1
//Subtract 1 '*' from each side starting at the bottom, then 2, then 3, etc.

function towerBuilder(floors) {
  //Create array to holdd values
  let tower = [];
  //Create the "bottom" floor based on the pattern ((floors * 2)-1) = num of "*" last string in array
  bottomString = "*".repeat(floors * 2 - 1);
  //Add it to the tower array
  tower.push(bottomString);

  //Now for each additional floor
  for (let i = 1; i < floors; i++) {
    //The next floor is always the previous floors length, but with an increasing replacement of spaces on either end of the string
      //substring() is used to extract the portion that is meant to remain from the full lenght
    let nextString = bottomString.substring(i, bottomString.length - i);
    //then the next floor is constructed using the previous portion with spaces added onto the start and end
    tower.unshift(`${" ".repeat(i) + nextString + " ".repeat(i)}`);
  }
  //finally return the tower
  return tower;
}

//A note while doing this problem: JavaScipt will take multiple intentional spaces(like - "hey how    is it going") and reduce them down into ("hey how is it going"). So using template literals is necessary for the needed spaces to appear and count properly.

console.log(towerBuilder(1), ["*"]);
console.log(towerBuilder(2), [" * ","***"]);
console.log(towerBuilder(3), ["  *  ", " *** ", "*****"]);

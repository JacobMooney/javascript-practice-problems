// https://www.codewars.com/kata/54da539698b8a2ad76000228

// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

function isValidWalk(walk) {
  //First check if the walk is going to be 10 min(which can only be 10 items or moves)
  if(walk.length !== 10)
  {
    return false;
  }
  // Logically if you must start and end at the same spot then to go in one direction you must have atleast one of the opposite in order to return eventually to the starting point. So north/south and east/west must be of equal value.

  //Filter the array for it's 4 possible contents.
  let n = walk.filter((letter) => letter === "n").length;
  let s = walk.filter((letter) => letter === "s").length;
  let e = walk.filter((letter) => letter === "e").length;
  let w = walk.filter((letter) => letter === "w").length;
  //Then we simply check if the opposite directional pair are equal. If they are you would have return to the starting point as required.
  if (n === s && e === w) {
    return true;
  } else {
    return false;
  }
}

console.log(
  isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]),
  "should return true"
);
console.log(
  isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"]),
  "should return false"
);
console.log(isValidWalk(["w"]), "should return false");
console.log(
  isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]),
  "should return false"
);

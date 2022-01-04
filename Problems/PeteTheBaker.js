//https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript

// Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

// Examples:

// // must return 2
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});
// // must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});

function cakes(recipe, available) {
  //Create list of keys from the recipe because it contains the minimum ingredients
  let minRecipe = Object.keys(recipe);
  //Create array to hold the products of dividing what ingredients you need against what you have. This will later be used to check for the smallest value as it determines the maximum amount of what you can create with the given ingredients.
  let amtCheck = [];
  //Iterate through the list of keys and divide each available ingredient by what you need
  for (let i = 0; i < minRecipe.length; i++) {
    amtCheck.push(available[minRecipe[i]] / recipe[minRecipe[i]]);
  }
  //If the division from above resulted in NaN, that means you don't have the minimum amount of ingredients so return 0
  if (amtCheck.includes(NaN)) {
    return 0;
  }
  //Else we can find the smallest amount in our array using Math.min() and Math.floor() it to return the integer amount with no remainder.
  else {
    let small = Math.min(...amtCheck)
    return Math.floor(small);
  }
}

// must return 2
cakes(
  { flour: 500, sugar: 200, eggs: 1 },
  { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
);
// must return 0
cakes(
  { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
  { sugar: 500, flour: 2000, milk: 2000 }
);

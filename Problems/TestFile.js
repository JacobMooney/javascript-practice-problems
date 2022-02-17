// //Test file, no specific code problems

// let obj = {
//   name: "Thomas",
//   lastName: "Shelby",
//   age: 34,
// };
// let arr = [1, 2, "three", 4, 5, "six"];

// //Object Destructuring
// const { name, lastName, age } = obj;

// name;
// lastName;
// age;
// //

// //Spread operations

// let newArr = [...arr, "seven", 8];
// newArr;

// let newObj = { ...arr };
// newObj;

// //Example from https://kentcdodds.com/blog/javascript-to-know-for-react

// // refactor this to a single line of destructuring...
// // const info = {
// //   title: "Once Upon a Time",
// //   protagonist: {
// //     name: "Emma Swan",
// //     enemies: [
// //       { name: "Regina Mills", title: "Evil Queen" },
// //       { name: "Cora Mills", title: "Queen of Hearts" },
// //       { name: "Peter Pan", title: `The boy who wouldn't grow up` },
// //       { name: "Zelena", title: "The Wicked Witch" },
// //     ],
// //   },
// // };
// // const { protagonist } = info;
// // console.log(protagonist);
// // const title = info.title;
// // const protagonistName = info.protagonist.name;
// // const enemy = info.protagonist.enemies[3];
// // const enemyTitle = enemy.title;
// // const enemyName = enemy.name;
// // return `${enemyName} (${enemyTitle}) is an enemy to ${protagonistName} in "${title}"`;

// /**
// Exercise 1
// Rewrite the code below to use array destructuring instead of assigning each value to a variable.
// */
// {
//   console.log("EXERCISE 1");

//   let item = ["Egg", 0.25, 12];

//   // let name = item[0];
//   // let price = item[1];
//   // let quantity = item[2];

//   let[name,price,quantity] = item;

//   console.log(`Item: ${name}, Quantity: ${quantity}, Price: ${price}`);
//   console.log();
// }

// /**
// Exercise 2
// Rewrite the code below to assign each number to the right variable.
// */
// {
//   console.log("EXERCISE 2");

//   let numbers = [3, 5, 4, 2, 6, 1];

//   let [three, five, four, two, six, one] = numbers;

//   console.log(`One: ${one}, Two: ${two}, Three: ${three}, Four: ${four}, Five: ${five}, Six: ${six}`);
//   console.log();
// }

// /**
// Exercise 3
// We have an object called 'user'.
// Write the destructuring assignment that reads:
// - 'name' property into the variable 'name'.
// - 'years' property into the variable 'age'.
// - 'isAdmin' property into the variable 'isAdmin' (false, if no such property)
// */
// {
//   console.log("EXERCISE 3");

//   let user = { name: "John", years: 30 };

//   // your code to the left side:
//   let { name:name, years:age, isAdmin=false } = user;

//   console.log(name); // John
//   console.log(age); // 30
//   console.log(isAdmin); // false
//   console.log();
// }

// /**
// Exercise 4
// Rewrite the code below to use array destructuring instead of assigning each value to a variable.
// */
// {
//   console.log("EXERCISE 4");

//   let person = [12, "Chris", "Owen"];

//   // let firstName = person[1];
//   // let lastName = person[2];
//   // let age = person[0];

//   let [age, firstName, lastName ] = person

//   console.log(`Person - Age: ${age}, Name: ${firstName} ${lastName}`);
//   console.log();
// }

// /**
// Exercise 5
// Rewrite the code below to use array destructuring instead of assigning each value to a variable.
// Make sure not to have unused variables.
// Hint: https://untangled.io/in-depth-es6-destructuring-with-assembled-avengers
// */
// {
//   console.log("EXERCISE 5");

//   let person = ["Chris", 12, "Owen"];

//   // let firstName = person[0];
//   // let lastName = person[2];

//   let [firstName,,lastName] = person;

//   console.log(`Name: ${firstName} ${lastName}`);
//   console.log();
// }

// /**
// Exercise 6
// Using Array Destructuring get the last name from the array.
// Hint: https://untangled.io/in-depth-es6-destructuring-with-assembled-avengers
// */
// {
//   console.log("EXERCISE 6");

//   const students = ['Christina', 'Jon', 'Alexandare'];

//   // Write your code here
//   const [,,lastName] = students;

//   console.log(lastName);
//   console.log();
// }

// /**
// Exercise 7
// Using Array Destructuring get all of the names from this Nested Array
// Hint: https://untangled.io/in-depth-es6-destructuring-with-assembled-avengers
// */
// {
//   console.log("EXERCISE 7");

//   const moreStudents = [
//     'Chris',
//     ['Ahmad', 'Antigoni'],
//     ['Toby', 'Sam']
//   ];

//   // Write your code here
//   const [student1, [student2, student3], [student4, student5]] = moreStudents;

//   console.log(student1, student2, student3, student4, student5);

//   const obj = { a: 1, b: 2, c: 3 };
//   const { a: propValue, ...remaining } = obj; // (A)

//   console.log(
//     assert.equal(propValue, 1)
//   );
//   assert.deepEqual(remaining, {b:2, c:3});

//Looping array - arr[(index) % arr.length]);

let arr = [
  "index0",
  "index1",
  "index2",
  "index3",
  "index4",
  "index5",
  "index6",
  "index7",
  "index8",
  "index9",
  "index10",
];

let index = 19;

console.log(index);
console.log(arr.length);
console.log((index % arr.length));
//This will access the index provided, or if the provided index is greater than the length it will loop back to the start
console.log(arr[index % arr.length]);

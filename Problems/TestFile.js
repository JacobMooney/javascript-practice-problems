//Test file, no specific code problems

let obj = {
  name: "Thomas",
  lastName: "Shelby",
  age: 34,
};
let arr = [1, 2, "three", 4, 5, "six"];

//Object Destructuring
const { name, lastName, age } = obj;

name;
lastName;
age;
//

//Spread operations

let newArr = [...arr, "seven", 8];
newArr;

let newObj = { ...arr };
newObj;
//

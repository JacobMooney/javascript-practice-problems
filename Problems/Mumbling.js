//www.codewars.com/kata/5667e8f4e3f572a8f2000039

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

//Map was the obvious choice here but I wanted to use a for loop since I tend to opt for methods
function accum(str) {
  //I saved the first letter inside a variable because it does not need modifying, and the repeat method given an argument of 0 won't work in the way we intend inside the loop. This allows us to start from index 1
  let mumble = [str[0]];
  for (let i = 1; i < str.length; i++) {
    //For each index after 0, we are uppercasing it and then appending onto that the same lowercased letter .repeat()'d by its index in the string
    mumble.push(str[i].toUpperCase() + str[i].toLowerCase().repeat(i));
  }
  //finally we return the created string with join() seperated by "-"s
  return mumble.join("-");
}

console.log(
  accum("ZpglnRxqenU"),
  "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
);
// console.log(
//   accum("NyffsGeyylB"),
//   "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb"
// );
// console.log(
//   accum("MjtkuBovqrU"),
//   "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu"
// );
// console.log(
//   accum("EvidjUnokmM"),
//   "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm"
// );
// console.log(
//   accum("HbideVbxncC"),
//   "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc"
// );

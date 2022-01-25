//www.codewars.com/kata/513e08acc600c94f01000001

// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

function rgb(r, g, b) {
  //Map the incoming values into a new array to prevent values greater than 255 or less than 0
  let rgbArr = [r, g, b].map((val) => {
    if (val > 255) {
      return (val = 255);
    } else if (val < 0) {
      return (val = 0);
    } else {
      return val;
    }
  });

  let hex =
    ("0" + rgbArr[0].toString(16)).slice(-2) +
    //This code is taking each index of the mapped array, and then uses ("0" + value).slice(-2) to prepend a 0 to anything less than 10
    ("0" + rgbArr[1].toString(16)).slice(-2) +
    ("0" + rgbArr[2].toString(16)).slice(-2);

  return hex.length !== 6 ? hex + hex : hex.toUpperCase();
}

console.log(rgb(0, 0, 0), "000000");
console.log(rgb(0, 0, -20), "000000");
console.log(rgb(300, 255, 255), "FFFFFF");
console.log(rgb(173, 255, 47), "ADFF2F");
console.log(rgb(3, 40, 297), "0328FF");

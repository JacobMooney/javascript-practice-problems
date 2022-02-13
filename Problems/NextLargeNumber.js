// https://www.codewars.com/kata/55983863da40caa2c900004e

// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// nextBigger(num: 12)   // returns 21
// nextBigger(num: 513)  // returns 531
// nextBigger(num: 2017) // returns 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):

// 9 ==> -1
// 111 ==> -1
// 531 ==> -1
// nextBigger(num: 9)   // returns nil
// nextBigger(num: 111) // returns nil
// nextBigger(num: 531) // returns nil

//Logic
//return num must be next possible number greater than input, or -1 for none found
//solution cannot be less than input
//Shifting values from the lowest spot (ones place, tens place, hundreds places, etc) to the higher places will find the value fastest

function nextBigger(num) {
  let initArr = Array.from(String(num), Number);
  let newNums = [];

  function buildNums(numArr, count = 0) {
    for (let i = 0; i < numArr.length; i++) {
      let testArr = numArr;
      let num1 = testArr[count];
      let num2 = testArr[i];
      console.log("Iteration:", i, "Count:", count, "Num1:", num1, "Num2:", num2);
      testArr[count] = num2;
      testArr[i] = num1;
      
      // 30861
      console.log(testArr[count])
      console.log(testArr.join(""));
      console.log(i);
      console.log(count);

      if(Number(testArr.join(""))>num){
        newNums.push(Number(testArr.join("")));
      }
    }

    //Incriment count by 1
    count++;
    numArr
    if (count > 1) {
      return;
    } else {
      buildNums(numArr, count);
    }
  }
  buildNums(initArr);

  console.log(newNums);

  
  // let nextNum = newNums
  //   .filter((number) => {
  //     return number > num;
  //   })
  //   .sort()[0];
  //   nextNum
  //   if(nextNum <= num || nextNum === undefined){
  //     return -1;
  //   }else{
  //     return nextNum;
  //   }
}

// console.log(nextBigger(12) === 21)
// console.log(nextBigger(513) === 531)
// console.log(nextBigger(2017) === 2071);
// console.log(nextBigger(414) === 441)
// console.log(nextBigger(144) === 414);
// console.log(nextBigger(965220) === -1);
console.log(nextBigger(30861), 31068);

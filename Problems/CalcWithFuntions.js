// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39

// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

//*Numbers*//
function zero(param) {
  if (param) {
    switch (param.operation) {
      case "times":
        return 0 * param.value;
        break;
      case "plus":
        return 0 + param.value;
        break;
      case "minus":
        return 0 - param.value;
        break;
      case "divide":
        return Math.floor(0 / param.value);
        break;
    }
  } else {
    return 0;
  }
}
function one(param) {
  if (param) {
    switch (param.operation) {
      case "times":
        return 1 * param.value;
        break;
      case "plus":
        return 1 + param.value;
        break;
      case "minus":
        return 1 - param.value;
        break;
      case "divide":
        return Math.floor(1 / param.value);
        break;
    }
  } else {
    return 1;
  }
}
function two(param) {
  if (param) {
    switch (param.operation) {
      case "times":
        return 2 * param.value;
        break;
      case "plus":
        return 2 + param.value;
        break;
      case "minus":
        return 2 - param.value;
        break;
      case "divide":
        return Math.floor(2 / param.value);
        break;
    }
  } else {
    return 2;
  }
}
function three(param) {
  if (param) {
    switch (param.operation) {
      case "times":
        return 3 * param.value;
        break;
      case "plus":
        return 3 + param.value;
        break;
      case "minus":
        return 3 - param.value;
        break;
      case "divide":
        return Math.floor(3 / param.value);
        break;
    }
  } else {
    return 3;
  }
}
function four(param) {
  if (param) {
    switch (param.operation) {
      case "times":
        return 4 * param.value;
        break;
      case "plus":
        return 4 + param.value;
        break;
      case "minus":
        return 4 - param.value;
        break;
      case "divide":
        return Math.floor(4 / param.value);
        break;
    }
  } else {
    return 4;
  }
}
function five(param) {
  if (param) {
    switch (param.operation) {
      case "times":
        return 5 * param.value;
        break;
      case "plus":
        return 5 + param.value;
        break;
      case "minus":
        return 5 - param.value;
        break;
      case "divide":
        return Math.floor(5 / param.value);
        break;
    }
  } else {
    return 5;
  }
}
function six(param) {
  if (param) {
    switch (param.operation) {
      case "times":
        return 6 * param.value;
        break;
      case "plus":
        return 6 + param.value;
        break;
      case "minus":
        return 6 - param.value;
        break;
      case "divide":
        return Math.floor(6 / param.value);
        break;
    }
  } else {
    return 6;
  }
}
function seven(param) {
  if (param) {
    switch (param.operation) {
      case "times":
        return 7 * param.value;
        break;
      case "plus":
        return 7 + param.value;
        break;
      case "minus":
        return 7 - param.value;
        break;
      case "divide":
        return Math.floor(7 / param.value);
        break;
    }
  } else {
    return 7;
  }
}
function eight(param) {
  if (param) {
    switch (param.operation) {
      case "times":
        return 8 * param.value;
        break;
      case "plus":
        return 8 + param.value;
        break;
      case "minus":
        return 8 - param.value;
        break;
      case "divide":
        return Math.floor(8 / param.value);
        break;
    }
  } else {
    return 8;
  }
}
function nine(param) {
  if (param) {
    switch (param.operation) {
      case "times":
        return 9 * param.value;
        break;
      case "plus":
        return 9 + param.value;
        break;
      case "minus":
        return 9 - param.value;
        break;
      case "divide":
        return Math.floor(9 / param.value);
        break;
    }
  } else {
    return 9;
  }
}


//*Operations*//
function times(num) {
  return { value: num, operation: "times" };
}
function plus(num) {
  return { value: num, operation: "plus" };
}
function minus(num) {
  return { value: num, operation: "minus" };
}
function dividedBy(num) {
  return { value: num, operation: "divide" };
}

// console.log(seven(times(five())), 35);
// console.log(four(plus(nine())), 13);
// console.log(eight(minus(three())), 5);
// console.log(six(dividedBy(two())), 3);

//Reference while working on this - https://medium.com/javascript-scene/composing-software-an-introduction-27b72500d6ea
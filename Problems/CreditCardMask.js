// https://www.codewars.com/kata/5412509bd436bd33920011bc

// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples
// maskify("4556364607935616") == "############5616"
// maskify(     "64607935616") ==      "#######5616"
// maskify(               "1") ==                "1"
// maskify(                "") ==                 ""

// // "What was the name of your first pet?"
// maskify("Skippy")                                   == "##ippy"
// maskify("Nananananananananananananananana Batman!") == "####################################man!"

function maskify(cCard) {
  //If the cCard lenght is longer than 4 we need to hide the precedding values
  if (cCard.length > 4){
    //Using the repeat string method we can generate as many "#" as is determined by the length - 4, and for the last 4 digits we can slice them from the incoming string
    return '#'.repeat(cCard.length-4) + (cCard.slice(cCard.length-4,cCard.length))
  }
  else{
    //If the cCard is 4 or less we simply return the string
    return cCard;
  }
}

console.log(maskify('4556364607935616'), '############5616');
console.log(maskify('1'), '1');
console.log(maskify('11111'), '#1111');
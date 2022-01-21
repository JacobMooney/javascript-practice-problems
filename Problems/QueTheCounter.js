// https://www.codewars.com/kata/5b538734beb8654d6b00016d

// You managed to send your friend to queue for tickets in your stead, but there is a catch: he will get there only if you tell him how much that is going to take. And everybody can only take one ticket at a time, then they go back in the last position of the queue if they need more (or go home if they are fine).

// Each ticket takes one minutes to emit, the queue is well disciplined, Brit-style, and so it moves smoothly, with no waste of time.

// You will be given an array/list/vector with all the people queuing and the initial position of your buddy, so for example, knowing that your friend is in the third position (that we will consider equal to the index, 2 (3 in COBOL): he is the guy that wants 3 tickets!) and the initial queue is [2, 5, 3, 4, 6].

// The first dude gets his ticket and the queue goes now like this [5, 3, 4, 6, 1], then [3, 4, 6, 1, 4] and so on. In the end, our buddy will be queuing for 12 minutes, true story!

// Build a function to compute it, resting assured that only positive integers are going to be there and you will be always given a valid index; but we also want to go to pretty popular events, so be ready for big queues with people getting plenty of tickets.


//**Curretnly not complete**
function queue(que, pos) {
  //Step 1
  let minCount = 0;
  let queObj = que.reduce((people, num, index) => {
    people[index] = num;
    return people;
  }, {});
  queObj;

  //Step 2
  let index = 0;
  while (queObj[pos] > 0) {
    console.log(1 > Object.keys(queObj).length ? (index = 0) : index);
    //Add to the "time" count
    minCount += 1;
    //Subtract 1 from first object in the array
    queObj[index] -= 1;

    if (queObj[index] < 1) {
      delete queObj[index];
      queObj;
    }
    console.log(index > Object.keys(queObj).length);
    if (index > Object.keys(queObj).length) {
      index = 0;
    } else {
      index += 1;
    }
    queObj;
  }
  return minCount;
}

console.log(queue([2, 5, 3, 6, 4], 0));
// console.log(queue([2, 5, 3, 6, 4], 1));
// console.log(queue([2, 5, 3, 6, 4], 2));
// console.log(queue([2, 5, 3, 6, 4], 3));
// console.log(queue([2, 5, 3, 6, 4], 4));

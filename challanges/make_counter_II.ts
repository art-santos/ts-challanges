interface Counter {
    get: () => number;
    increment: () => number;
    decrement: () => number;
    reset: () => number;
  }
  
  export default function makeCounter(initialValue: number = 0): Counter {
    throw 'Not implemented';
  }

  const test = makeCounter(10);

  console.log(test.get());
  console.log(test.increment());
  console.log(test.decrement());
  console.log(test.reset());
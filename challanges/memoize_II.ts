type Fn<T> = (this: any, ...args: Array<any>) => T;

export default function memoize<T>(func: Fn<T>): Fn<T> {
  throw 'Not implemented';
}

function expensiveMul(a: any, b: any) {
    console.log('Computing...');
    return a * b;
  }

  const memoizedExpensiveMul = memoize(expensiveMul);


  console.log(memoizedExpensiveMul)

//HOW THE CODE SHOULD LOOK LIKE
  
  // First call (computes and caches the result).
  console.log(memoizedExpensiveMul(3, 7)); // Output: Computing... 21
  
  // Second call with the same argument (returns the cached result).
  console.log(memoizedExpensiveMul(3, 7)); // Output: 21
  
  // Third call with a different argument (computes and caches the new result).
  console.log(memoizedExpensiveMul(5, 8)); // Output: Computing... 40
  
  // Fourth call with the same argument as the third call (returns the cached result).
  console.log(memoizedExpensiveMul(5, 8)); // Output: 40
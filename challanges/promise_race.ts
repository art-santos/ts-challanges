export default function promiseRace<T extends readonly unknown[] | []>(
    iterable: T,
  ): Promise<Awaited<T[number]>> {
    throw 'Not implemented!';
  }


  const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two');
  });
  
  
  
export default function promiseTimeout<T>(
    promise: Promise<T>,
    duration: number,
  ): Promise<T> {
    throw 'Not implemented';
  }


  const fakeFetch = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));


  const result = await promiseTimeout(fakeFetch(1000), 500);
  console.log(result); // Promise timeout thrown

  const result2 = await promiseTimeout(fakeFetch(500), 1000);
  console.log(result2); // Promise resolved
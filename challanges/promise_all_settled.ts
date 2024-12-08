interface PromiseFulfilledResult<T> {
    status: 'fulfilled';
    value: T;
  }
  
  interface PromiseRejectedResult {
    status: 'rejected';
    reason: any;
  }
  
  export default function promiseAllSettled<T>(
    iterable: Array<T>,
  ): Promise<Array<PromiseFulfilledResult<T> | PromiseRejectedResult>> {
    throw 'Not implemented!';
}

//HOW THE CODE SHOULD LOOK LIKE
// const p0 = Promise.resolve(3);
// const p1 = 42;
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('foo');
//   }, 100);
// });
//
// await promiseAllSettled([p0, p1, p2]);
//WHAT IT MUST RETURN
// [
//   { status: 'fulfilled', value: 3 },
//   { status: 'fulfilled', value: 42 },
//   { status: 'rejected', reason: 'foo' },
// ];

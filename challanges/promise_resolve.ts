export default function promiseTimeout<T>(
    promise: Promise<T>,
    duration: number,
  ): Promise<T> {
    throw 'Not implemented';
}                       


// const p = promiseResolve(42);
// await p; // 42

// const original = new Promise((resolve) => resolve(42));
// const cast = promiseResolve(original);
// await cast; // 42


// const resolvedThenable = promiseResolve({
//     then(resolve, reject) {
//       resolve(42);
//     },
//   });
//   await resolvedThenable; // 42
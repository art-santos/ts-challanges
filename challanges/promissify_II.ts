const promisifyCustomSymbol = Symbol.for('util.promisify.custom');

type Func = (...args: any[]) => void;
type Return<T> = (this: any, ...args: any[]) => Promise<T>;
type WithSymbol<T> = { [promisifyCustomSymbol]: Return<T> };
type Param<T> = Func | WithSymbol<T>;

export default function promisify<T>(func: Param<T>): Return<T> {
  throw 'Not implemented';
}


// // Example usage in Node.js.
// const util = require('node:util');

// function doSomething(callback, foo) {
//   // ...
// }

// doSomething[util.promisify.custom] = (foo) => {
//   return getPromiseSomehow();
// };

// const promisified = util.promisify(doSomething);
// console.log(promisified === doSomething[util.promisify.custom]);
// // prints 'true'



// Example function with callback as the first argument.
// The callback has the signature `(err, value) => any`.
// function foo(callback, url, options) {
//     apiCall(url, options)
//       .then((data) => callback(null, data))
//       .catch((err) => callback(err));
//   }
  
//   foo[Symbol.for('util.promisify.custom')] = (url, options) => {
//     return new Promise((resolve, reject) => {
//       foo(
//         (err, data) => {
//           if (err) {
//             reject(err);
//           }
//           resolve(data);
//         },
//         url,
//         options,
//       );
//     });
//   };
  
//   const promisifiedFoo = foo[Symbol.for('util.promisify.custom')]; // true
//   const data = await promisifiedFoo('example.com', { foo: 1 });
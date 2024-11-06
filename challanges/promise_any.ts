export default function promiseAny<T>(iterable: Array<T>): Promise<T> {
    throw 'Not implemented!';
}


//HOW IT SHOULD LOOK LIKE || 1

// const p0 = Promise.resolve(42);
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(21);
//   }, 100);
// });

// await promiseAny([p0, p1]); // 42

//HOW IT SHOULD LOOK LIKE || 2

// const p0 = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(42);
//     }, 100);
//   });
//   const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject('Err!');
//     }, 400);
//   });
  
//   await promiseAny([p0, p1]); // 42



//HOW IT SHOULD LOOK LIKE || 3

// const p0 = new Promise((resolve) => {
//     setTimeout(() => {
//       reject(42);
//     }, 400);
//   });
//   const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject('Err!');
//     }, 100);
//   });
  
//   try {
//     await promiseAny([p0, p1]);
//   } catch (err) {
//     console.log(e instanceof AggregateError); // true
//     console.log(e.errors); // [ 42, "Err!" ]
//   }

// await promiseAny([p0, p1]); // 42
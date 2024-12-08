export default function mapAsync<T, U>(
    iterable: Array<T>,
    callbackFn: (value: T) => Promise<U>,
  ): Promise<Array<U>> {
    throw 'Not implemented';
}

//RELEVANT LINKS:

//https://www.greatfrontend.com/questions/javascript/array-map


//HOW THE CODE SHOULD LOOK LIKE:

// const asyncDouble = (x: number) =>
//     new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(x * 2);
//       }, 10);
//     });
  
//   const doubled = await mapAsync([1, 2], asyncDouble);
//   console.log(doubled); // [2, 4]
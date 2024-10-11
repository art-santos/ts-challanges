export default function promiseMerge(
    p1: Promise<unknown>,
    p2: Promise<unknown>,
  ): Promise<unknown> {
    throw 'Not implemented';
  }


//  await promiseMerge(Promise.resolve(1), Promise.resolve(2)); // 3
// await promiseMerge(Promise.resolve('abc'), Promise.resolve('def')); // 'abcdef'
// await promiseMerge(Promise.resolve([1, 2, 3]), Promise.resolve([4, 5, 6])); // [1, 2, 3, 4, 5, 6]
// await promiseMerge(Promise.resolve({ foo: 1 }), Promise.resolve({ bar: 2 })); // { foo: 1, bar: 2}

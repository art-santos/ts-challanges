export default function unionBy<T>(
    iteratee: (value: T) => any,
    ...arrays: Array<any>
  ): Array<T> {
    throw 'Not implemented!';
  }


//   unionBy((value: any) => value, [2], [1, 2]); // => [2, 1]

// unionBy(Math.floor, [2.1], [1.2, 2.3]); // => [2.1, 1.2]

// unionBy((o) => o.x, [{ x: 1 }], [{ x: 2 }, { x: 1 }]); // => [{ 'x': 1 }, { 'x': 2 }]

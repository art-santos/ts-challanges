export default function intersectionWith<T>(
    comparator: (a: T, b: T) => boolean,
    ...arrays: Array<Array<T>>
  ): Array<T> {
    throw 'Not implemented!';
  }


// intersectionWith([{ x: 1 }, { x: 2 }], [{ x: 1 }, { x: 3 }], (a, b) => a.x === b.x);
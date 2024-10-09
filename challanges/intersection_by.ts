export default function intersectionBy<T, R>(
    iteratee: (value: T) => R,
    ...arrays: Array<Array<T>>
  ): Array<T> {
    throw 'Not implemented!';
}


// intersectionBy([{ x: 1 }, { x: 2 }], [{ x: 1 }, { x: 3 }], (a) => a.x);



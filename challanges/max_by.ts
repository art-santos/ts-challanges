export default function maxBy<T>(
    array: Array<T>,
    iteratee: (value: T) => any,
  ): any {
    throw 'Not implemented!';
}

const maxByNumber = maxBy([1, 2, 3], (x) => x);
console.log(maxByNumber);
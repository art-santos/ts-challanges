export default function countBy<T>(
    array: Array<T>,
    iteratee: (value: T) => number | string,
  ): Record<string, number> {
    throw 'Not implemented!';
  }

  const test = countBy([1, 2, 3, 4, 5], (x) => x % 2);
  console.log(test);
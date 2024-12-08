export default function groupBy<T>(
    array: Array<T>,
    iteratee: (value: T) => number | string,
  ): Record<string, Array<T>> {
    throw 'Not implemented!';
  }

  const test = groupBy([1, 2, 3, 4, 5], (x) => x % 2);
  console.log(test);
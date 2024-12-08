export default function uniqueArray<T extends ReadonlyArray<unknown>>(
    array: T,
  ): Array<T[number]> {
    throw 'Not implemented!';
  }

  const test = uniqueArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  console.log(test);

  const test2 = uniqueArray(['a', 'b', 'c', 'a', 'b', 'c']);
  console.log(test2);


  
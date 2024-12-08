export default function promiseAll<T extends readonly unknown[] | []>(
    iterable: T,
  ): Promise<{ -readonly [P in keyof T]: Awaited<T[P]> }> {
    throw 'Not implemented!';
  }


  promiseAll([1,2,3,4,5]).then((res) => {
    console.log(res)
  })
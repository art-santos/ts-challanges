export default function cycle<T>(...values: Array<T>): () => T {
    throw 'Not implemented';
  }

  const gen = cycle(1, 2, 3);
  console.log(gen()); // 1
  console.log(gen()); // 2
  console.log(gen()); // 3
  console.log(gen()); // 1
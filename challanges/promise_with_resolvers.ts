export default function promiseWithResolvers<T>(): Readonly<{
    promise: Promise<T>;
    resolve: (value: T) => void;
    reject: (reason?: any) => void;
  }> {
    throw 'Not implemented';
  }

  const { promise, resolve, reject } = promiseWithResolvers<number>();
  await promise; // undefined
  resolve(42);
  await promise; // 42
  reject(new Error('Something went wrong'));
  await promise; // Error: Something went wrong
  
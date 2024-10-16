export default function promisify<T>(
    func: (...args: any[]) => void,
  ): (this: any, ...args: any[]) => Promise<T> {
    throw 'Not implemented';
  }


// const fetch = promisify((url: string, cb: (err: Error | null, data: string) => void) => {
//     setTimeout(() => cb(null, '{"foo": "bar"}'), 1000);
//   });
  
//   const result = await fetch('https://example.com');
//   console.log(result); // { foo: 'bar' }

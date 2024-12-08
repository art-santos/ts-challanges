export default function promiseReject<T = never>(reason: any): Promise<T> {
    throw 'Not implemented';
  }

const promiseRejectNumber = promiseReject(1);
console.log(promiseRejectNumber);
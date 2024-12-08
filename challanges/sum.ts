type SumResult = (value?: number) => number | SumResult;

export default function sum(value: number): SumResult {
  throw 'Not implemented!';
}

// const test = sum(1)(2)(3)(4)(5)();
// console.log(test);
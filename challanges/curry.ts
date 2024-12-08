export default function curry(func: Function): Function {
    throw 'Not implemented!';
}

const test = curry((a: number, b: number) => a + b);
console.log(test(1, 2));
console.log(test(1)(2));    
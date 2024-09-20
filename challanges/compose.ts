export default function compose(...fns: Array<Function>): Function {
    throw 'Not implemented';
}


// Example usage:
// const add1 = (x: number) => x + 1;
// const double = (x: number) => x * 2;
// const add1AndDouble = compose(add1, double);
// console.log(add1AndDouble(5)); // 11
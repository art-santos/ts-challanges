export {};

declare global {
  interface Function {
    myApply(this: Function, thisArg: any, argArray?: any[]): any;
  }
}

function multiplyAge(this: { age: number }, multiplier: number = 1) {
  return this.age * multiplier;
}

Function.prototype.myApply = function (thisArg, args = []) {
  // Set the context to the provided thisArg and invoke the function with the spread arguments
  return this.call(thisArg, ...args);
}

const mary = {
  age: 21,
};


const john = {
  age: 42,
};

// Using the custom myApply method
const appliedAge = multiplyAge.myApply(john, [2]);

console.log(appliedAge); // Output: 42

export default function curry(func: Function): Function {
    throw 'Not implemented!';
}

//HOW THE CODE SHOULD LOOK LIKE:

function multiply(...numbers: any) {
    return numbers.reduce((a:any, b:any) => a * b, 1);
  }
  const curriedMultiply = curry(multiply);
  const multiplyByThree = curriedMultiply(3);
  console.log(multiplyByThree); // 3
  console.log(multiplyByThree(4)); // 12
  
//   const multiplyByFifteen = multiplyByThree(5);
//   console.log(multiplyByFifteen); // 15
//   console.log(multiplyByFifteen(2)); // 30
  
//   console.log(curriedMultiply(1)(2)(3)(4)); // 24
//   console.log(curriedMultiply(1, 2, 3, 4)); // 24
  
export default function curry(func: Function): Function {
    throw 'Not implemented!';
  }



//   function addTwo(a, b) {
//     return a + b;
//   }
//   const curriedAddTwo = curry(addTwo);
//   curriedAddTwo(3)(4); // 7
//   curriedAddTwo(3, 4); // 7
//   const alreadyAddedThree = curriedAddTwo(3);
//   alreadyAddedThree(4); // 7


// function multiplyThree(a, b, c) {
//     return a * b * c;
//   }
//   const curriedMultiplyThree = curry(multiplyThree);
//   curriedMultiplyThree(4)(5)(6); // 120
//   curriedMultiplyThree(4)(5, 6); // 120
//   curriedMultiplyThree(4, 5)(6); // 120
//   curriedMultiplyThree(4, 5, 6); // 120
  
//   const containsFour = curriedMultiplyThree(4);
//   const containsFourMulFive = containsFour(5);
//   containsFourMulFive(6); // 120
  
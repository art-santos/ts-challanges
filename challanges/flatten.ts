type ArrayValue = any | Array<ArrayValue>;

export default function flatten(value: Array<ArrayValue>): Array<any> {
  throw 'Not implemented!';
}


//Single-level arrays are unaffected.
// flatten([1, 2, 3]); // [1, 2, 3]

//Inner arrays are flattened into a single level.
// flatten([1, [2, 3]]); // [1, 2, 3]
// flatten([
//   [1, 2],
//   [3, 4],
// ]); // [1, 2, 3, 4]

//Flattens recursively.
// flatten([1, [2, [3, [4, [5]]]]]); // [1, 2, 3, 4, 5]

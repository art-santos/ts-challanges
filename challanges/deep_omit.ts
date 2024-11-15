export default function deepOmit(val: unknown, keys: Array<string>): unknown {
    throw 'Not implemented';
}


// How the code should look like
deepOmit({ a: 1, b: 2, c: 3 }, ['b']); // { a: 1, c: 3 }
// more complicated example with nested objects:


const obj = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: 4,
  },
  f: [5, 6],
};
deepOmit(obj, ['b', 'c', 'e']); // { a: 1, f: [5, 6] }
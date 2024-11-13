export default function deepMerge(valA: unknown, valB: unknown): unknown {
    throw 'Not implemented';
}


//HOW THE CODE MUST LOOK LIKE:
deepMerge({ a: 1 }, { b: 2 }); // { a: 1, b: 2 }
deepMerge({ a: 1 }, { a: 2 }); // { a: 2 }
deepMerge({ a: 1, b: [2] }, { b: [3, 4] }); // { a: 1, b: [2, 3, 4] }
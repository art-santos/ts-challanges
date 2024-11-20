
export default function deepClone<T>(value: T): T {
    throw 'Not implemented!';
}


const obj1 = {
    num: 0,
    str: '',
    boolean: true,
    unf: undefined,
    nul: null,
    obj: { name: 'foo', id: 1 },
    arr: [0, 1, 2],
    date: new Date(),
    reg: new RegExp('/bar/ig'),
    [Symbol('s')]: 'baz',
  };
  
  const clonedObj1 = deepClone(obj1);
  clonedObj1.arr.push(3);
  obj1.arr; // Should still be [0, 1, 2]
  const obj2: any = { a: {} };
  obj2.a.b = obj2; // Circular reference
  
  const clonedObj2 = deepClone(obj2); // Should not cause a stack overflow by recursing into an infinite loop.
  
  (clonedObj2.a as any).b = 'something new';
  
  obj2.a.b === obj2; // This should still be true
  
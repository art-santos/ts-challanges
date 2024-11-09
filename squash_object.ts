export default function squashObject(obj: Object): Object {
    throw 'Not implemented!';
}


//HOW THE CODE SHOULD LOOK LIKE

// const object = {
//     a: 5,
//     b: 6,
//     c: {
//       f: 9,
//       g: {
//         m: 17,
//         n: 3,
//       },
//     },
//   };
  
//   squashObject(object); // { a: 5, b: 6, 'c.f': 9, 'c.g.m': 17, 'c.g.n': 3 }
  

//IF IT HAS ANY NULL OR UNDEFINED KEYS

// const object = {
//     a: { b: null, c: undefined },
//   };
//   squashObject(object); // { 'a.b': null, 'a.c': undefined }
  

// const object = { a: { b: [1, 2, 3], c: ['foo'] } };
// squashObject(object); // { 'a.b.0': 1, 'a.b.1': 2, 'a.b.2': 3, 'a.c.0': 'foo' }


//EMPTY KEYS SHOULD ACT LIKE IF THIS LAYER DOESN'T EXIST

// const object = {
//     foo: {
//       '': { '': 1, bar: 2 },
//     },
//   };
//   squashObject(object); // { foo: 1, 'foo.bar': 2 }
  
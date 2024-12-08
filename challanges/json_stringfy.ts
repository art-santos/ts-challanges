export default function jsonStringify(value: unknown): string {
    throw 'Not implemented!';
}



// jsonStringify({ foo: 'bar' }); // '{"foo":"bar"}'
// jsonStringify({ foo: 'bar', bar: [1, 2, 3] }); // '{"foo":"bar","bar":[1,2,3]}'
// jsonStringify({ foo: true, bar: false }); // '{"foo":true,"bar":false}'
// Other types

// jsonStringify(null); // 'null'
// jsonStringify(true); // 'true'
// jsonStringify(false); // 'false'
// jsonStringify(1); // '1'
// jsonStringify('foo'); // '"foo"'
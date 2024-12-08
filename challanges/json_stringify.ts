export default function jsonStringify(value: unknown | any): string {
    throw 'Not implemented!';
}


jsonStringify({ foo: 'bar' }); // '{"foo":"bar"}'
jsonStringify({ foo: 'bar', bar: [1, 2, 3] }); // '{"foo":"bar",bar:[1,2,3]}'
//Other types and their expected behavior:

jsonStringify(''); // undefined
jsonStringify(undefined); // undefined
jsonStringify(null); // 'null'
jsonStringify(true); // 'true'
jsonStringify(false); // 'false'
jsonStringify(1); // '1'
jsonStringify(Infinity); // 'null'
jsonStringify(NaN); // 'null'
jsonStringify('foo'); // '"foo"'
jsonStringify('"foo"') === '"\\"foo\\""'; // Double quotes present in the original input are escaped using backslashes
jsonStringify(Symbol('foo')); // undefined
jsonStringify(() => {}); // undefined
jsonStringify(['foo', 'bar']); // '["foo","bar"]'
jsonStringify(/foo/); // '{}'
jsonStringify(new Map()); // '{}'
jsonStringify(new Set()); // '{}'
export type ClassValue =
  | ClassArray
  | ClassDictionary
  | Function
  | string
  | number
  | null
  | boolean
  | undefined;
export type ClassDictionary = Record<string, any>;
export type ClassArray = Array<ClassValue>;

export default function classNames(...args: Array<ClassValue>): string {
  throw 'Not implemented!';
}

classNames('foo', 'foo'); // 'foo'

//HOW THE CODE SHOULD LOOK LIKE:

// classNames({ foo: true }, { foo: true }); // 'foo'
// classNames({ foo: true, bar: true }, { foo: false }); // 'bar'
// classNames('foo', () => 'bar'); // 'foo bar'
// classNames('foo', () => 'foo'); // 'foo'
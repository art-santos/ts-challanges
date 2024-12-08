export default function listFormat(
    items: Array<string>,
    options?: { sorted?: boolean; length?: number; unique?: boolean },
  ): string {
    throw 'Not implemented!';
  }


//   listFormat([]); // ''

// listFormat(['Bob']); // 'Bob'
// listFormat(['Bob', 'Alice']); // 'Bob and Alice'

// listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John']);
// 'Bob, Ben, Tim, Jane and John'

// listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {
//   length: 3,
// }); // 'Bob, Ben, Tim and 2 others'

// listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {
//   length: 4,
// }); // 'Bob, Ben, Tim, Jane and 1 other'

// listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {
//   length: 3,
//   sorted: true,
// }); // 'Ben, Bob, Jane and 2 others'

// listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John', 'Bob'], {
//   length: 3,
//   unique: true,
// }); // 'Bob, Ben, Tim and 2 others'

// listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {
//   length: 3,
//   unique: true,
// }); // 'Bob, Ben, Tim and 2 others'

// listFormat(['Bob', 'Ben', '', '', 'John']); // 'Bob, Ben and John'
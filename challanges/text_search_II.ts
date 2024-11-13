export default function textSearch(
    text: string,
    queries: Array<string>,
  ): string {
    throw 'Not implemented!';
}

textSearch('The Quick Brown Fox Jumps Over The Lazy Dog', ['fox']);

//CODE EXAMPLES:

// textSearch('This is Uncopyrightable!', ['copy', 'right']);
// 'This is Un<b>copyright</b>able!'
// textSearch('This is Uncopyrightable!', ['copy', 'right', 'table']);
// 'This is Un<b>copyrightable</b>!'


// textSearch('aaa', ['aa']);
// '<b>aa</b>a'
// This is because the second character cannot be used as a match again.
// textSearch('aaaa', ['aa']);
// '<b>aaaa</b>'
export default function getElementsByClassName(
    element: Element,
    classNames: string,
  ): Array<Element> {
    throw 'Not implemented!';
}


//HOW THE CODE SHOULD LOOK LIKE


// const doc = new DOMParser().parseFromString(
//     `<div class="foo bar baz">
//       <span class="bar baz">Span</span>
//       <p class="foo baz">Paragraph</p>
//       <div class="foo bar"></div>
//     </div>`,
//     'text/html',
//   );
  
//   getElementsByClassName(doc.body, 'foo bar');
//   // [div.foo.bar.baz, div.foo.bar] <-- This is an array of elements.
  
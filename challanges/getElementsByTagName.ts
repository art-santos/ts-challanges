// Extending the global namespace
declare global {
    interface Element {
      getElementsByStyle(property: string, value: string): Array<Element>;
    }
  }



export default function getElementsByTagName(
    el: Element,
    tagName: string,
  ): Array<Element> {
    throw 'Not implemented!';
  }

//   Examples

//   const doc = new DOMParser().parseFromString(
//     `<div id="foo">
//       <span>Span</span>
//       <p>Paragraph</p>
//       <div id="bar">Div</div>
//     </div>`,
//     'text/html',
//   );
  
//   getElementsByTagName(doc.body, 'div');
//   [div#foo, div#bar] <-- This is an array of elements.
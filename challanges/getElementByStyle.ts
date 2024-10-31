// Extending the global namespace
declare global {
    interface Element {
      getElementsByStyle(property: string, value: string): Array<Element>;
    }
  }


export default function getElementsByStyle(
    element: Element,
    property: string,
    value: string,
  ): Array<Element> {
    throw 'Not implemented!';
  }



//   const doc = new DOMParser().parseFromString(
//   `<div>
//   <span style="font-size: 12px">Span</span>
//   <p style="font-size: 12px">Paragraph</p>
//   <blockquote style="font-size: 14px">Blockquote</blockquote>
// </div>`,
// 'text/html',
// );

// getElementsByStyle(doc.body, 'font-size', '12px');
// [span, p] <-- This is an array of elements.
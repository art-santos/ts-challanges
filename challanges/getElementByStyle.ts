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

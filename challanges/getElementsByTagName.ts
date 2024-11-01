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


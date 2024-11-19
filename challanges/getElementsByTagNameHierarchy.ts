import { DOMParser } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";

type Document = any

export default function getElementsByTagNameHierarchy(
    document: Document,
    tagNames: string,
  ): Array<Element> {
    throw 'Not implemented!';
}


const doc = new DOMParser().parseFromString(
    `<div>
      <span id="foo">
        <span id="bar">Bar</span>
        Foo
      </span>
      <p>Paragraph</p>
      <span id="baz">Baz</span>
    </div>`,
    'text/html',
  );
  
  getElementsByTagNameHierarchy(doc, 'div span');
type Element = { tag: string; children: Array<string | Element> };

export default function serializeHTML(element: Element): string {
  throw 'Not implemented!';
}

const tree = {
    tag: 'body',
    children: [
      { tag: 'div', children: [{ tag: 'span', children: ['foo', 'bar'] }] },
      { tag: 'div', children: ['baz'] },
    ],
  };
  
  serializeHTML(tree);
  // Output:
  `<body>
    <div>
      <span>
        foo
        bar
      </span>
    </div>
    <div>
      baz
    </div>
  </body>`;

  

  
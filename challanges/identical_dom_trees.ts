declare global {
    interface Node {
        isIdenticalTo(node: Node): boolean;
    }
}


export default function identicalDOMTrees(nodeA: Node, nodeB: Node): boolean {
    throw 'Not implemented!';
}



// Examples
// Tree A and Tree B are considered the same.

// <!-- Tree A -->
// <div>Hello World</div>

// <!-- Tree B -->
// <div>Hello World</div>
// Tree C and Tree D are considered the different.


// <!-- Tree C -->
// <div class="header">Hello World</div>

// <!-- Tree D -->
// <div id="foo">Hello World</div>

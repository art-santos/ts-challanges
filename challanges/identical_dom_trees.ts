declare global {
    interface Node {
        isIdenticalTo(node: Node): boolean;
    }
}


export default function identicalDOMTrees(nodeA: Node, nodeB: Node): boolean {
    throw 'Not implemented!';
}
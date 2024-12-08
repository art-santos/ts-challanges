
export default function makeCounter(initialValue: number = 0): () => number {
    const counterObj = { count: initialValue - 1 };
    return function() {
        return ++counterObj.count;
    }
}

const counter = makeCounter()
counter()
counter()
counter()

console.log(counter())
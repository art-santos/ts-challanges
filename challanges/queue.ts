export default class Queue<T> {
    constructor() {
      throw "Not implemented!";
    }
  
    /**
     * Adds an item to the back of the queue.
     * @param {T} item The item to be pushed onto the queue.
     * @return {number} The new length of the queue.
     */
    enqueue(item: T): number {
      throw "Not implemented!";
    }
  
    /**
     * Removes an item from the front of the queue.
     * @return {T | undefined} The item at the front of the queue if it is not empty, `undefined` otherwise.
     */
    dequeue(): T | undefined {
      throw "Not implemented!";
    }
  
    /**
     * Determines if the queue is empty.
     * @return {boolean} `true` if the queue has no items, `false` otherwise.
     */
    isEmpty(): boolean {
      throw "Not implemented!";
    }
  
    /**
     * Returns the item at the front of the queue without removing it from the queue.
     * @return {T | undefined} The item at the front of the queue if it is not empty, `undefined` otherwise.
     */
    front(): T | undefined {
      throw "Not implemented!";
    }
  
    /**
     * Returns the item at the back of the queue without removing it from the queue.
     * @return {T | undefined} The item at the back of the queue if it is not empty, `undefined` otherwise.
     */
    back(): T | undefined {
      throw "Not implemented!";
    }
  
    /**
     * Returns the number of items in the queue.
     * @return {number} The number of items in the queue.
     */
    length(): number {
      throw "Not implemented!";
    }
  }
  

    const queue = new Queue();
    queue.isEmpty(); // true
    queue.enqueue(1);
    queue.enqueue(2);
    queue.length(); // 2
    queue.enqueue(3);
    queue.front(); // 1
    queue.back(); // 3
    queue.dequeue(); // 1
    queue.isEmpty(); // false
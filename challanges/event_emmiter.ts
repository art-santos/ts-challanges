interface IEventEmitter {
    on(eventName: string, listener: Function): IEventEmitter;
    off(eventName: string, listener: Function): IEventEmitter;
    emit(eventName: string, ...args: Array<any>): boolean;
  }
  
  // You are free to use alternative approaches of
  // instantiating the EventEmitter as long as the
  // default export is correct.
  export default class EventEmitter implements IEventEmitter {
    constructor() {
      throw 'Not implemented!';
    }
  
    on(eventName: string, listener: Function): IEventEmitter {
      throw 'Not implemented!';
    }
  
    off(eventName: string, listener: Function): IEventEmitter {
      throw 'Not implemented!';
    }
  
    emit(eventName: string, ...args: Array<any>): boolean {
      throw 'Not implemented!';
    }
  }



//   const emitter = new EventEmitter();

// function addTwoNumbers(a, b) {
//   console.log(`The sum is ${a + b}`);
// }
// emitter.on('foo', addTwoNumbers);
// emitter.emit('foo', 2, 5);
// > "The sum is 7"

// emitter.on('foo', (a, b) => console.log(`The product is ${a * b}`));
// emitter.emit('foo', 4, 5);
// > "The sum is 9"
// > "The product is 20"

// emitter.off('foo', addTwoNumbers);
// emitter.emit('foo', -3, 9);
 // > "The product is -27"

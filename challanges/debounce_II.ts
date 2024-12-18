interface DebouncedFunction extends Function {
    cancel: () => void;
    flush: () => void;
  }
  
  export default function debounce(
    func: Function,
    wait: number,
  ): DebouncedFunction {
    throw 'Not implemented!';
  }


//   Examples


// let i = 0;
// function increment() {
//   i++;
// }
// const debouncedIncrement = debounce(increment, 100);

// t = 0: Call debouncedIncrement().
// debouncedIncrement(); // i = 0

// t = 50: Cancel the delayed increment.
// debouncedIncrement.cancel();

// t = 100: increment() was not invoked and i is still 0.
// Flushing to instantly call the debounced function.


// let i = 0;
// function increment() {
//   i++;
// }
// const debouncedIncrement = debounce(increment, 100);

// t = 0: Call debouncedIncrement().
// debouncedIncrement(); // i = 0

// t = 50: i is still 0 because 100ms have not passed.
// t = 51:
// debouncedIncrement.flush(); // i is now 1 because flush causes() the callback to be immediately invoked.

// t = 100: i is already 1. The callback has been called before
// and won't be called again.
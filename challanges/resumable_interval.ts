interface Resumable {
    start: () => void;
    pause: () => void;
    stop: () => void;
  }
  
  export default function createResumableInterval(
    callback: Function,
    delay?: number,
    ...args: Array<any>
  ): Resumable {
    throw 'Not implemented';
  }

//HOW THE CODE SHOULD LOOK LIKE

// createResumableInterval(callback);
// createResumableInterval(callback, delay);
// createResumableInterval(callback, delay, param1);
// createResumableInterval(callback, delay, param1, param2);
// createResumableInterval(callback, delay, param1, param2, /* … ,*/ paramN);


// let i = 0;
// // t = 0:
// const interval = createResumableInterval(() => {
//   i++;
// }, 10);
// // t = 10:
// interval.start(); // i is now 1.
// // t = 20: callback executes and i is now 2.
// // t = 25:
// interval.pause();
// // t = 30: i remains at 2 because interval.pause() was called.
// // t = 35:
// interval.start(); // i is now 3.
// // t = 45: callback executes and i is now 4.
// // t = 50:
// interval.stop(); // i remains at 4.

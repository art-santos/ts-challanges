export {};

declare global {
interface Function {
    myCall(this: Function, thisArg: any, ...argArray: any[]): any;
  }
}
  
  Function.prototype.myCall = function (thisArg, ...argArray) {
    throw 'Not implemented!';
  };

const test = ()=> {}

test.myCall({})

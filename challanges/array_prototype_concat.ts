declare global {
  interface Array<T> {
    myConcat(...items: Array<T | Array<T>>): Array<T>;
  }
}

  Array.prototype.myConcat = function (...items) {
    throw 'Not implemented!';
  };


  const test = [1, 2, 3].myConcat([4, 5, 6], [7, 8, 9]);
  console.log(test);
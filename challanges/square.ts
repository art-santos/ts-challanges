interface Array<T> {
    map(arg0: (x: number) => number): unknown;
    square(): Array<number>;
  }
  

  //@ts-ignore
  Array.prototype.square = function (this: Array<T>) {
    return this.map((x: number) => x * x);
  };


  //@ts-ignore
  console.log([2,3,2].square()); // [1]
declare global {
    interface Array<T> {
        myAt(index: number): T | undefined;
    }
}
  Array.prototype.myAt = function (index: number) {
    return this[index];
  };


  export {}
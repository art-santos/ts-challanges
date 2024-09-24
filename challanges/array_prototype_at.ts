declare global {
    interface Array<T> {
        myAt(index: number): T | undefined;
    }
}
  Array.prototype.myAt = function (index: number) {
    throw 'Not implemented!';
  };

  export default Array.prototype.myAt;

  const test = [1, 2, 3, 4, 5].myAt(2);
  console.log(test);
export default function size(
    collection:
      | Array<any>
      | Object
      | Map<any, any>
      | Set<any>
      | string
      | null
      | undefined,
  ): number {
    throw 'Not implemented!';
  }



  const test = size([1, 2, 3, 4, 5]);
  console.log(test);
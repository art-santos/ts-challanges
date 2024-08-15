export default function dropWhile<T>(
    array: Array<T>,
    predicate: (value: T, index: number, array: Array<T>) => boolean,
  ): Array<T> {
    
    let arr = [...array];

    const m: Array<boolean> = arr.map(predicate);

    const li = m.lastIndexOf(true)

    const finalSlice = arr.slice(li  + 1, arr.length)

    console.log(finalSlice)
    return finalSlice
  }



   dropWhile([1,2,3,4,5], (value) => value < 6)



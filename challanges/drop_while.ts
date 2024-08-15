export default function dropWhile<T>(
    array: Array<T>,
    predicate: (value: T, index: number, array: Array<T>) => boolean,
  ): Array<T> {
    
    let arr = [...array];

    const m: Array<boolean> = arr.map(predicate);

    const li = m.indexOf(false)


    let finalSlice: Array<T> = []    
    if (li !== -1){
        finalSlice = arr.slice(li, arr.length)
    }

    console.log(li, finalSlice)
    console.log(finalSlice)
    return finalSlice
  }



   dropWhile([20, 30, 40, 5, 6],(value) => value > 3)



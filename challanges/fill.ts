export function fill<T>(
    array: Array<T>,
    value: any,
    start: number = 0,
    end: number = array.length,
  ): Array<any> {
    
    const replacedArray = array.map((x) => x = value)
    console.log("🚀 ~ replacedArray:", replacedArray)
    
    return replacedArray
}



//HOW THE CODE SHOULD LOOK LIKE





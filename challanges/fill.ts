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

const testcall = fill([1, 2, 3], 'a');

//HOW THE CODE SHOULD LOOK LIKE

// fill([1, 2, 3], 'a'); // ['a', 'a', 'a']
// fill([4, 6, 8, 10], '*', 1, 3); // [4, '*', '*', 10]
// fill([4, 6, 8, 10, 12], '*', -3, -1); // [4, 6, '*', '*', 12]




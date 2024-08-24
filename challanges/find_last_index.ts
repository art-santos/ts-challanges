export default function findLastIndex<T>(
    array: Array<T>,
    predicate: (value: T, index: number, array: Array<T>) => boolean,
    fromIndex = array.length - 1,
  ): number {
    
    const negativeArrayLength = array.length * -1
    
    const checkIsIndexOutOfBound = fromIndex < negativeArrayLength || fromIndex > array.length - 1

    if (checkIsIndexOutOfBound && fromIndex >= 0) {
      fromIndex = array.length - 1
    }

    if (checkIsIndexOutOfBound && fromIndex < 0) {
      fromIndex = 0
    }
 
  
    if (fromIndex < 0){
      fromIndex = (fromIndex * -1) - 1
    }

    console.log(fromIndex)
    const lastIndex = array.findLastIndex((value, index, array) => index >= fromIndex && predicate(value, index, array))
    console.log("🚀 ~ lastIndex:", lastIndex)
    
    return lastIndex
  }


  const arr = [5,4,3,2,1]

  findLastIndex(arr, (value) => value > 3 )
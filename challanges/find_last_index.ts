export default function findLastIndex<T>(
    array: Array<T>,
    predicate: (value: T, index: number, array: Array<T>) => boolean,
    fromIndex = array.length - 1,
  ): number {


    if (fromIndex < array.length * -1 ) {
        fromIndex = 0
    }

    if (fromIndex > array.length) {
        fromIndex = array.length - 1
    }

    //shallow copy the array
    const shallowCopy = [...array]

    //map the shallow copy to the which item matches the requirements
    const truthMap = shallowCopy.map(predicate)

    //get the first occurrency of a truth. value on the map
    console.log(fromIndex)
    const firstOccurencyIndex = truthMap.lastIndexOf(true, fromIndex)

    //if nothing is found return -1
    if(firstOccurencyIndex === -1){
        return -1
    }

    //get the first value based on the array indexes
    const firstOccurrencyValue: number = firstOccurencyIndex as number


    return firstOccurrencyValue
  }


  const arr = [1, 2, 3, 4, 5, 1]

 const lastIndex = findLastIndex(arr, (value) => value > 2)

  console.log("🚀 ~ lastIndex:", lastIndex)
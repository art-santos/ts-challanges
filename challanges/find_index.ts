export default function findIndex<T>(
    array: Array<T>,
    predicate: (value: T, index: number, array: Array<T>) => boolean,
    fromIndex = 0,
  ): number {

    //shallow copy the array
    const shallowCopy = [...array]

    //map the shallow copy to the which item matches the requirements
    const truthMap = shallowCopy.map(predicate)

    //get the first occurrency of a truth. value on the map
    const firstOccurencyIndex = truthMap.indexOf(true, fromIndex)

    //if nothing is found return -1
    if(firstOccurencyIndex === -1){
        return -1
    }

    //get the first value based on the array indexes
    const firstOccurrencyValue: number = firstOccurencyIndex as number


    return firstOccurrencyValue
  }


//   const arr = [1,2,3,4,5]

    const arr = [5, 12, 8, 130, 44]

  const getIndex = findIndex(arr, (num: number) => num >= 12, 5)
  console.log("🚀 ~ getIndex:", getIndex)


  
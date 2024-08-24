export default function findLastIndex<T>(
    array: Array<T>,
    predicate: (value: T, index: number, array: Array<T>) => boolean,
    fromIndex = array.length - 1,
  ): number {
    
    const isFromIndexNegativeOrPositive = fromIndex >= 0 ? true : false
    
    let result = 0

    if (!isFromIndexNegativeOrPositive) {
      const reversedArray = [...array].reverse()
      const reversedIndex = (fromIndex * -1) - 1
      const reversedSlicedArray = reversedArray.slice(0, reversedIndex + 1)

      const reversedFilter = reversedSlicedArray.map(predicate)
      const getReversedLastIndexOf = reversedFilter.findIndex((value) => value === true)

      result = getReversedLastIndexOf
    }

    if (isFromIndexNegativeOrPositive) {
      const newArray = [...array]
      const newIndex = (fromIndex)
      const newSlicedArray = newArray.slice(0, newIndex + 1)

      const newFilter = newSlicedArray.map(predicate)
      const getNewLastIndexOf = newFilter.findIndex((value) => value === true)

      console.log(getNewLastIndexOf)

      result = getNewLastIndexOf
    }

    console.log(result)

    return result
  }


  const arr = [5,4,3,2,1]

  findLastIndex(arr, (value) => value > 0, 10 )
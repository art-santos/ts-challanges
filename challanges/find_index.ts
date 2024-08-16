export default function findIndex<T>(
    array: Array<T>,
    predicate: (value: T, index: number, array: Array<T>) => boolean,
    fromIndex = 0,
  ): number {
    // //slice the array accordingly
    // const sliceArrayToMatchRequiredIndex = fromIndex === 0 ? [...array] : [...array].slice(fromIndex, array.length) 
    
    // //get an evaluation for each item in the array that matches the predicate requirements
    // const findFirstPositiveItem = sliceArrayToMatchRequiredIndex.map(predicate)

    // //get first index of true
    // const getFirstTruthIndex = findFirstPositiveItem.indexOf(true)

    // //get the first number from array position and reassoacite this as number
    // const firstTruthIndex = sliceArrayToMatchRequiredIndex[getFirstTruthIndex] as number

    // //returns the index of the found element, else return -1
    // return firstTruthIndex

    return 0    
  }

  


  const arr = [1,2,3,4,5]
  const getIndex = findIndex(arr, (value) => {return value > 3}, 1)
  console.log("🚀 ~ getIndex:", getIndex)


  
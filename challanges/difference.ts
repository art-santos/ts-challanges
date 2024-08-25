export default function difference<T>(
    array: Array<T>,
    values: Array<T>,
  ): Array<T> {

    let dif = []
    for (let i = 0; i <= array.length; i++){
        values.includes(array[i]) ? null : array[i] !== undefined && dif.push(array[i])
    }

    return dif
  }

  const obj = {
    1: difference([1, 2, 3, null, undefined], [2, 3]), // => [1]
    2: difference([1, 2, 3, 4], [2, 3, 1]), // => [4]
    3: difference([1, 2, 3], [2, 3, 1, 4]), // => []
    4: difference([1, , 3], [1]) // => [3]
  }

  

  console.log(obj)
export default function fill<T>(
    array: Array<T>,
    value: any,
    start: number = 0,
    end: number = array.length,
  ): Array<T> {
    
    const coords = array.map((item, i) => {
        return i
    })
    
    const rev = [...coords].reverse()

    const revCoords = rev.map((item, i) => {
        return item * -1
    })

    

    console.log(coords, revCoords)

    return []

}

const f = fill([1,2,3,4], "*", -1, -4)

console.log(f)

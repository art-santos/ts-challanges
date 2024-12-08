export default function chunk<T extends string>(array: Array<T>, size = 1)
: Array<Array<T>>|Array<T>
 {

    const result: Array<Array<T>> = [];

    for (let i = 0; i < array.length; i += size){
      console.log(i)
      result.push(array.slice(i, i + size))
    }

    return result;
}

const r = chunk(["1","2","3", "1"], 3)

console.log(r)
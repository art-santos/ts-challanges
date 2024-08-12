export default function chunk<T extends string>(array: Array<T>, size = 1)
: Array<Array<T>>|Array<T>
 {

    const result: Array<Array<T>> = [];

    for (let i = 0; i < array.length; i += size){
      result.push(array.slice(i, i + size))
    }

    return result;
}

const r = chunk([], 1)

console.log(r)
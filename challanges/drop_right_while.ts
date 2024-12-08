export default function dropRightWhile<T>(
    array: Array<T>,
    predicate: (value: T, index: number, array: Array<T>) => boolean,
): Array<T> {
    let arr = [...array];
    let n: Array<T> = [];
    const m: Array<boolean> = arr.map(predicate);

    m.map((v, i) => {
        v === false && n.push(arr[i]);
    });

    const index = m.indexOf(true);
    
    const isThereABiggerIndex =  m.indexOf(false, m.lastIndexOf(true)) === -1 ? false : true;

    let x; 

    if(isThereABiggerIndex){
       return arr
    }
    index === -1 ?  x = n.slice(0, n.length) : x = n.slice(0, index);

    return x;
}

  const i = dropRightWhile([1, ,3,4,5], (value) => value === undefined); // => []

  console.log(i)

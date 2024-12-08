export default function fromPairs<T>(
    pairs: Array<[string | number, T]>,
  ): Record<string | number, T> {
    return pairs.reduce((acc, [key,value]) => {
        acc[key] = value
        return acc
    }, {} as Record<string | number, T>)
    
  }

  const pairs = [
    ['a', 1],
    ['b', 2],
    ['c', 3],
  ];
  
  console.log(fromPairs(pairs as any)); // { 'a': 1, 'b': 2, 'c': 3 }
function scoreOfString(s: string): any {
 const t = s
  .split('')
  .map(char => char.charCodeAt(0))

  let arr = [];

  let j = 0
    
    do{
        const max = Math.max(t[j], t[j+1])
        const min = Math.min(t[j], t[j+1])
        const res = max - min
        arr.push(res);
        j++;
    }while(j<s.length-1)

    const sum = arr.reduce((pv, c) => pv + c, 0)
    
    return sum
};


const s = scoreOfString("zaz")

console.log(s)
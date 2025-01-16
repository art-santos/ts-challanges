function longestCommonPrefix(strs: string[]) {

    if(strs.length === 1){
    return strs[0]
    }

    const allEqual = arr => arr.every(val => val === arr[0]);

    if(allEqual(strs)){
        return strs[0]
    }

    const byteSize = str => new Blob([str]).size;

   for (let i = 0; i < strs.length; i++){
    let j = 0
       do {
  
        j++
       }while(j <= byteSize[strs[i]])
   }
};

console.log(longestCommonPrefix(["ab", "abc", "abcd"])); // Output: "fl"



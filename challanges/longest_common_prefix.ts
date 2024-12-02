function longestCommonPrefix(strs: string[]): string | string[] {
    
    const arr = getPrefix(strs[0])
    return arr
};


const strs = ["flower","flow","flight"]


longestCommonPrefix(strs)


//STEPS 1:
//ISOLATE THE PREFIX

function getPrefix (str: string):string[] {
    return Array.from(str)
}
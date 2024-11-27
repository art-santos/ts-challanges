function isPalindrome(x: number): boolean {

    const arr = x.toString().split("")
    const reversedArr = [...arr].reverse().join("")
    
    return arr.join("") === reversedArr

};

console.log(isPalindrome(121))
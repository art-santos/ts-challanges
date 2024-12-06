function finalValueAfterOperations(operations: string[]): number {

    
    let i = 0 
    let j = 0

    do {
        switch (operations[j]){
            case "--X":
                i--;
            break;
            case "X--":
                i--;
            break;
            case "++X":
                i++;
            break;
            case "X++":
                i++;
            break;
        } 
        j++
    }while (j < operations.length)

    return i

};





const final = finalValueAfterOperations(["--X","X++","X++"])
console.log("🚀 ~ final:", final)



/**
 * @param {Array<number>} array - Array from which the elements are all numbers.
 * @return {number} Returns mean.
 */


declare global {
    interface Array<T>{
        mean(): number
    }

    interface Object {
        divide(divider: number): number
    }

    
}


Object.prototype.divide = function (divider){
    return Number(this) / divider;
}

Array.prototype.mean = function(){
    const number = this.reduce((previousValue, currentValue) => {
        return previousValue + currentValue
    }, 0)

    const arrLength = this.length
     
    return number.divide(arrLength)
}

export default function mean(array: number[]): number {
    return array.mean()
}



  mean([1,2,3,4,5])
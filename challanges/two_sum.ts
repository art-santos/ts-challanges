function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++){
        if (nums[i] + nums[i+1] === target){
            return [i, i+1]
        } 
    }
    for (let i = 0; i < nums.length; i++){
        for (let j = 1; j < nums.length; j++){
            const n = nums[j] + nums[i]

            if (n === target){
                return [i, j]
            }
        }
    }

    return [0]
};


const res = twoSum([2,7,11,15], 9)
const res1 = twoSum([3,2,4], 6)
const res2 = twoSum([3,3], 6)
const res3 = twoSum([3,2,3], 6)
const res4 = twoSum([6,5,7,8,9,3], 10)




console.log(res, res1, res2, res3, res4)
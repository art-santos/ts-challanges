function getConcatenation(nums: number[]): number[] {
    nums.map((i) => nums.push(i))

    return nums
};

getConcatenation([1,2,1])
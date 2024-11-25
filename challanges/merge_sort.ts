export default function recursiveMergeSort(arr: Array<number>): Array<number> {
    throw 'Not implemented!';
}

const mergeSort = (arr: Array<number>) => {
    return recursiveMergeSort(arr)
}

mergeSort([9, 3, 6, 2, 1, 11]); // [1, 2, 3, 6, 9, 11]
mergeSort([12, 16, 14, 1, 2, 3]); // [1, 2, 3, 12, 14, 16]
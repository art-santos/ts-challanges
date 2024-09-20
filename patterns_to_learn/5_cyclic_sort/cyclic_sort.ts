/**
 * Cyclic Sort Patterns
 *
 * Cyclic sort is an in-place sorting algorithm that is optimal for sorting arrays where the elements are integers ranging from 1 to n (the length of the array). This pattern is particularly useful when dealing with problems where you need to sort an array with minimal space complexity. Below are key points and examples where the Cyclic Sort pattern can be applied:
 *
 * 1. **Sorting Arrays**:
 *    - Problem: Given an array containing n numbers taken from the range 1 to n, sort the array in increasing order.
 *    - Example: Implement a function that sorts an array using the cyclic sort algorithm. This function should iterate through the array, and for each element at index i, place it at its correct position i-1.
 *
 * 2. **Finding Missing Numbers**:
 *    - Problem: Given an array of n-1 integers in the range from 1 to n, find the missing number.
 *    - Example: Write a function that first sorts the array using cyclic sort and then scans the sorted array to find the missing number.
 *
 * 3. **Finding Duplicate Numbers**:
 *    - Problem: Given an array of n+1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist, and find the duplicate.
 *    - Example: Create a function that uses cyclic sort to place each number in its correct position, and then scans the array to identify any number that does not match its index, indicating a duplicate.
 *
 * 4. **Set All Numbers in Correct Order**:
 *    - Problem: Given an array where elements are in the range from 1 to n, some elements are out of order or missing. Reorder the array so that each number from 1 to n appears exactly once, replacing missing numbers with any placeholder.
 *    - Example: Develop a function that uses cyclic sort to reorder the array, and then replaces any incorrect entries (like duplicates or placeholders) with the correct missing numbers.
 *
 * Each of these problems can be efficiently solved using the Cyclic Sort pattern, which leverages the properties of the array's elements and their indices to achieve sorting with a time complexity of O(n) and a space complexity of O(1).
 *
 * The following examples will be implemented to demonstrate the practical application of the Cyclic Sort pattern in solving complex problems involving arrays with limited ranges.
 */

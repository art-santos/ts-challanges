
/**
 * Two Pointers or Iterators Pattern
 *
 * The Two Pointers or Iterators pattern is a powerful technique in algorithm design, used to efficiently solve problems that involve sequences or arrays. By using two pointers (or iterators) that can move through the sequence in single or opposite directions, this pattern helps reduce the time complexity, often from O(n^2) to O(n). Here are some key points and examples where the Two Pointers or Iterators pattern can be applied:
 *
 * 1. **Pair with Target Sum**:
 *    - Problem: Given a sorted array of integers, find a pair that adds up to a specific target number.
 *    - Example: Use two pointers, one starting at the beginning and the other at the end of the array. Move them towards each other until they sum to the target.
 *
 * 2. **Remove Duplicates from Sorted Array**:
 *    - Problem: Given a sorted array, remove the duplicates in-place such that each element appears only once and return the new length.
 *    - Example: Use two pointers, one to traverse the array and the other to only move when a non-duplicate element is found.
 *
 * 3. **Squaring a Sorted Array**:
 *    - Problem: Given a sorted array of integers, both negative and positive, return an array of the squares of each number sorted in non-decreasing order.
 *    - Example: Use two pointers to select the larger absolute value from the start or end of the array, square it, and place it in the result array from the end to the beginning.
 *
 * 4. **Dutch National Flag Problem**:
 *    - Problem: Given an array of n objects colored red, white, or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
 *    - Example: Use three pointers to manage the positions of the three different colors.
 *
 * 5. **Backspace String Compare**:
 *    - Problem: Given two strings typed into an empty text editor, where "#" means a backspace character, check if the final state of both strings is the same.
 *    - Example: Use two pointers for each string starting from the end, moving backwards and skipping characters as dictated by the '#' backspaces.
 *
 * Each of these problems can be efficiently solved using the Two Pointers or Iterators pattern, which leverages the properties of ordered data and the ability to track and compare elements with minimal overhead.
 *
 * The following examples will be implemented to demonstrate the practical application of the Two Pointers or Iterators pattern in solving complex problems involving sequences and arrays.
 */

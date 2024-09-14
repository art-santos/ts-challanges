/**
 * The "Top K Elements" pattern is a common algorithmic challenge that involves finding the K most significant elements in a dataset according to some criteria. This pattern is widely used in fields like data analysis, machine learning, and competitive programming. Here are some key points and examples where the "Top K Elements" pattern can be applied:

 * 1. **Top K Frequent Elements**:
 *    - Problem: Given a non-empty array of integers, return the k most frequent elements.
 *    - Example: Implement a function that uses a min-heap to keep track of the top k elements by frequency.

 * 2. **Kth Largest Element in an Array**:
 *    - Problem: Find the kth largest element in an unsorted array.
 *    - Example: Use a max-heap to maintain the largest k elements seen so far, and return the smallest element in the heap.

 * 3. **Top K Frequent Words**:
 *    - Problem: Given a list of words and an integer k, return the k most frequent words sorted by frequency from highest to lowest.
 *    - Example: Implement a solution using a hashmap to count frequencies and a min-heap to extract the top k frequent words.

 * 4. **K Closest Points to Origin**:
 *    - Problem: Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).
 *    - Example: Use a max-heap to keep the closest k points based on their Euclidean distance from the origin.

 * 5. **Find K Pairs with Smallest Sums**:
 *    - Problem: You are given two integer arrays nums1 and nums2 sorted in ascending order and an integer k. Define a pair (u,v) which consists of one element from the first array and one element from the second array. Find the k pairs (u1,v1),(u2,v2) ...(uk,vk) with the smallest sums.
 *    - Example: Utilize a min-heap to manage the possible pairs and their sums efficiently.

 * 6. **Top K Strongest Elements in an Array**:
 *    - Problem: Given an array of integers and a value k, return the k strongest values in the array. Strength is measured by how far the element is from the median of the array.
 *    - Example: Calculate the median of the array first, then use a max-heap to select the k elements whose absolute difference from the median is the largest.

Each of these problems requires a nuanced understanding of heap data structures (either min-heap or max-heap) and sometimes additional data structures like hashmaps for frequency counting. The choice of heap ensures that the time complexity for insertion and extraction remains efficient, typically O(log k) for each operation, where k is the size of the heap.

These examples are fundamental in understanding how to tackle problems where sorting the entire dataset is impractical due to memory or time constraints, and only the most significant elements according to some criteria are required.
 */

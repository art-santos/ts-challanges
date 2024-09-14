/**
 * The Two Heaps pattern is a method used to solve problems that require the management of a data stream where one might need to
 * continuously calculate the median of the data or manage data in a way that allows quick access to the median elements.
 * This pattern utilizes two heaps; a max-heap to manage the lower half of the data, and a min-heap to manage the upper half.
 * 
 * Key operations and characteristics include:
 * 
 * 1. Balance: The max-heap (lower half) contains the smaller half of the numbers, and the min-heap (upper half) contains the larger half.
 *    This setup allows efficient retrieval of the median:
 *    - If the heaps are of equal size, the median is the average of the roots of the two heaps.
 *    - If they are not of equal size, the median is the root of the heap with more elements.
 * 
 * 2. Insertion:
 *    - When a new number comes in, compare it to the roots of the heaps to decide where to insert it.
 *    - If the number is less than the root of the max-heap, insert it into the max-heap. If it's greater, insert it into the min-heap.
 *    - After insertion, balance the heaps if their sizes differ by more than one element.
 * 
 * 3. Efficiency:
 *    - Insertions are logarithmic in time since they involve heap insertions.
 *    - Retrieving the median is constant time, as it involves accessing the roots of the heaps.
 * 
 * This pattern is particularly useful in scenarios like running medians, income stream analysis, or any real-time analytics where
 * the median is a more robust summary statistic than the mean, which can be heavily influenced by outliers.
 */

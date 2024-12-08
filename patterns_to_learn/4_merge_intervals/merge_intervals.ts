/**
 * Merging intervals is a common algorithmic problem that involves combining overlapping intervals into one contiguous interval.
 * This technique is useful in various scenarios such as event scheduling, resource allocation, and time management systems.
 * 
 * The problem is typically presented as a list of intervals, where each interval is a pair of numbers representing the start and end times.
 * The goal is to merge all overlapping intervals and output the minimal set of intervals that cover all the times in the input.
 * 
 * For example, given the intervals [1,3], [2,6], [8,10], and [15,18], the merged intervals would be [1,6], [8,10], and [15,18].
 * 
 * The algorithm to solve this problem generally follows these steps:
 * 1. Sort the intervals based on their start times.
 * 2. Initialize a new list to hold the merged intervals.
 * 3. Iterate through the sorted intervals, and for each interval:
 *    - If the list of merged intervals is empty or if the current interval does not overlap with the last interval in the merged list,
 *      add the current interval to the merged list.
 *    - If there is an overlap, merge the current interval with the last interval in the merged list by updating the end time of the last interval
 *      in the merged list to be the maximum of the end times of the last interval and the current interval.
 * 
 * This approach ensures that all overlapping intervals are merged efficiently, and the output list contains only non-overlapping intervals.
 * The time complexity of this algorithm is O(n log n) due to the initial sort, and the space complexity is O(n) for storing the merged intervals.
 */

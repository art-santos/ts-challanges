/**
 * K-Way Merge Pattern
 *
 * The K-Way Merge pattern is an essential algorithmic strategy used to merge multiple sorted arrays or lists into a single sorted array or list. This pattern is particularly useful in scenarios such as external sorting, merging sorted files, and handling streaming data from multiple sources. Below are key points and examples where the K-Way Merge pattern can be applied:
 *
 * 1. **Merge K Sorted Lists**:
 *    - Problem: Given k sorted linked lists, merge them into one sorted linked list.
 *    - Example: Implement a function that uses a min-heap to efficiently merge these lists. The heap should initially contain the first node of each list, and as nodes are extracted and added to the merged list, the next node from the same list should be inserted into the heap.
 *
 * 2. **Merge K Sorted Arrays**:
 *    - Problem: Given k sorted arrays, merge them into a single sorted array.
 *    - Example: Similar to merging lists, use a min-heap to merge arrays. Start by inserting the first element of each array into the heap, and proceed by replacing the extracted minimum element with the next element of the same array.
 *
 * 3. **External Multi-way Merge Sort**:
 *    - Problem: Sort a large amount of data that doesn't fit into memory by dividing it into chunks, sorting each chunk, and then merging these chunks.
 *    - Example: Implement a multi-way merge function that can merge multiple chunks at once using a min-heap, ensuring that the data stream remains manageable and efficient.
 *
 * 4. **Stream Merging**:
 *    - Problem: Given multiple data streams that are each sorted, merge them into a single sorted output stream.
 *    - Example: Use a min-heap to continuously find the smallest current element from the streams. As data is consumed from a stream, new data from the same stream can be added to the heap.
 *
 * Each of these problems can be efficiently solved using the K-Way Merge pattern, which leverages the properties of a min-heap to maintain a running time complexity of O(n log k), where n is the total number of elements across all k containers.
 *
 * The following examples will be implemented to demonstrate the practical application of the K-Way Merge pattern in solving complex problems involving multiple sorted datasets.
 */

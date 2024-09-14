/**
 * Breadth-First Search (BFS) is a traversal algorithm that explores nodes in a graph level by level. 
 * It starts at the root node and explores all of the neighbor nodes at the present depth prior to moving on to nodes at the next depth level.
 * 
 * BFS can be used for both tree and graph data structures. In trees, since there are no cycles, the algorithm simplifies as there is no need to keep track of visited nodes.
 * However, in graphs, to avoid processing a node more than once and to prevent infinite loops, BFS requires tracking which nodes have been visited.
 * 
 * The algorithm uses a queue data structure to store nodes that need to be explored. Here's a step-by-step breakdown:
 * 1. Start by pushing the root node to the queue.
 * 2. While the queue is not empty:
 *    a. Dequeue the front node.
 *    b. Process the node (e.g., print its value or perform some operation).
 *    c. Enqueue all unvisited adjacent nodes to the queue and mark them as visited.
 * 
 * BFS is particularly useful for finding the shortest path on unweighted graphs, as it guarantees the minimum number of edges will be traversed.
 * It is also employed in scenarios such as network broadcasting, garbage collection algorithms, and in solving puzzles or games (like finding the number of moves needed to solve a puzzle).
 * 
 * The time complexity of BFS is O(V + E), where V is the number of vertices and E is the number of edges in the graph. The space complexity is O(V), 
 * due to the storage needed for the queue and the visited nodes tracking.
 */

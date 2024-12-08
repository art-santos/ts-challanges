/**
 * Depth-First Search (DFS) is a fundamental tree and graph traversal algorithm that explores as far as possible along each branch before backtracking.
 * It is commonly used in scenarios where one needs to explore all the possibilities until the solution is found, such as in puzzle solving, pathfinding in games, and network analysis.
 * 
 * In tree structures, DFS can be implemented in three main ways: pre-order, in-order, and post-order traversal. Each method refers to the order in which the nodes are visited:
 * 
 * 1. Pre-order Traversal:
 *    - Visit the node.
 *    - Recursively perform pre-order traversal of its left subtree.
 *    - Recursively perform pre-order traversal of its right subtree.
 * 
 * 2. In-order Traversal:
 *    - Recursively perform in-order traversal of its left subtree.
 *    - Visit the node.
 *    - Recursively perform in-order traversal of its right subtree.
 * 
 * 3. Post-order Traversal:
 *    - Recursively perform post-order traversal of its left subtree.
 *    - Recursively perform post-order traversal of its right subtree.
 *    - Visit the node.
 * 
 * DFS is particularly useful for tasks that need to explore all possible paths or configurations, such as generating permutations, solving mazes, and other backtracking problems.
 * The algorithm can be implemented using recursion or a stack, and its space complexity is O(h) where h is the height of the tree, due to the storage needed for the call stack or the explicit stack used.
 * 
 * The time complexity of DFS is O(n), where n is the number of nodes, since every node is visited exactly once.
 */

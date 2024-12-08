/**
 * Fast and slow pointers, also known as the tortoise and the hare algorithm, is a technique
 * used to solve problems that involve sequences or cycles in a linear data structure such as arrays or linked lists.
 * This approach uses two pointers at different speeds, typically one moving twice as fast as the other.
 * 
 * Common use cases:
 * 1. Detecting cycles in a linked list.
 * 2. Finding the middle of a linked list.
 * 3. Determining if a linked list is a palindrome.
 * 
 * Example of detecting a cycle in a linked list:
 * 
 * function hasCycle(head) {
 *   let slow = head;
 *   let fast = head;
 * 
 *   while (fast !== null && fast.next !== null) {
 *     slow = slow.next; // move slow pointer one step
 *     fast = fast.next.next; // move fast pointer two steps
 * 
 *     if (slow === fast) {
 *       return true; // There is a cycle in the list
 *     }
 *   }
 * 
 *   return false; // No cycle found
 * }
 */

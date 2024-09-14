/**
 * Topological Sort Patterns
 *
 * Topological sorting is a linear ordering of vertices in a directed graph where for every directed edge UV from vertex U to vertex V, U comes before V in the ordering. This concept is particularly useful in scenarios involving scheduling tasks, organizing dependencies, and more. Below are key points and examples where the Topological Sort pattern can be applied:
 *
 * 1. **Scheduling Tasks**:
 *    - Problem: You have a list of tasks and some tasks must be performed before others. Determine a valid order to complete the tasks.
 *    - Example: Implement a function that takes a list of tasks and their dependencies, and returns a valid task order if one exists.
 *
 * 2. **Course Schedule**:
 *    - Problem: Given the number of courses and a list of prerequisite pairs, find an order in which all courses can be finished.
 *    - Example: Write a function that determines if it's possible to finish all courses given the prerequisites, and if so, returns one possible order.
 *
 * 3. **Building Compilation Order**:
 *    - Problem: In software development, some libraries need to be built before others. You need to find a build order that will allow all libraries to be built.
 *    - Example: Create a function that takes a list of libraries and dependencies, and returns a list representing a valid build order.
 *
 * 4. **Organizing a Project**:
 *    - Problem: In a large project involving multiple teams, certain tasks depend on the completion of others. Establish a sequence that allows all teams to work as soon as their prerequisites are completed.
 *    - Example: Develop a function that, given a list of project tasks and their dependencies, returns an order in which all tasks can be started, respecting their dependencies.
 *
 * Each of these problems can be efficiently solved using the Topological Sort pattern, which leverages properties of directed acyclic graphs (DAGs) to sequence events in a logical and linear order.
 *
 * The following examples will be implemented to demonstrate the practical application of the Topological Sort pattern in solving complex problems involving dependencies and scheduling.
 */

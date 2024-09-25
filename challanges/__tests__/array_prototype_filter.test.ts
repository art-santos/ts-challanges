import { assert, assertThrows } from "jsr:@std/assert";
import '../array_prototype_filter.ts';

Deno.test("should throw error if not implemented", () => {
    const numbers = [1, 2, 3, 4, 5, 6];

    assertThrows(() => numbers.myFilter(() => true), "Should throw error if not implemented");
});

// Deno.test("Should filter all even numbers", () => {
//     const numbers = [1, 2, 3, 4, 5, 6];
//     const evens = numbers.myFilter(num => num % 2 === 0);
//     assert(evens.length === 3 && evens.every(num => num % 2 === 0), "Should contain only even numbers");
// });

// Deno.test("Should filter all numbers greater than 3", () => {
//     const numbers = [1, 2, 3, 4, 5, 6];
//     const greaterThanThree = numbers.myFilter(num => num > 3);
//     assert(greaterThanThree.length === 3 && greaterThanThree.every(num => num > 3), "Should contain numbers greater than 3");
// });

// Deno.test("Should return an empty array when no elements match", () => {
//     const numbers = [1, 2, 3, 4, 5, 6];
//     const result = numbers.myFilter(num => num > 10);
//     assert(result.length === 0, "Should return an empty array");
// });

// Deno.test("Should handle thisArg correctly", () => {
//     const context = { threshold: 4 };
//     const numbers = [1, 2, 3, 4, 5, 6];
//     const result = numbers.myFilter(function(num) { return num > this.threshold; }, context);
//     assert(result.length === 2 && result.every(num => num > context.threshold), "Should filter numbers greater than context threshold");
// });

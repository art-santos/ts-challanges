import uniqueArray from "../unique_array.ts";
import { assert } from "jsr:@std/assert";

Deno.test("uniqueArray should return an array with unique values", () => {
  const inputArray = [1, 2, 2, 3, 4, 4, 5, 1];
  const expectedOutput = [1, 2, 3, 4, 5];
  const result = uniqueArray(inputArray);
  assert(result.length === expectedOutput.length, "Resulting array should have the same length as expected unique array");
  assert(result.sort().every((item, index) => item === expectedOutput.sort()[index]), "Each item in the resulting array should match the unique array");
});

Deno.test("uniqueArray should handle an empty array", () => {
  const inputArray: number[] = [];
  const expectedOutput: number[] = [];
  const result = uniqueArray(inputArray);
  assert(result.length === expectedOutput.length, "Resulting array should have the same length as expected unique array");
  assert(result.every((item, index) => item === expectedOutput[index]), "Each item in the resulting array should match the unique array");
});
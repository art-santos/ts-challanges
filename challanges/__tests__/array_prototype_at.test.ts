
import { assert } from "jsr:@std/assert";
import '../array_prototype_at.ts';



Deno.test("Should return the array in the position 0", () => {
    const test = [1, 2, 3, 4, 5].myAt(0);
    console.log(test);
    assert(test === test, "Should return the array 0th element");
});
import { assertEquals } from "jsr:@std/assert"
import { fill } from "../fill.ts"



const array = [[1,2,3], [4, 6, 8, 10], [4, 6, 8, 10, 12]]


Deno.test("Uses the fill function in the first array", () => {
    const fillFirst = fill(array[0], 'a'); // ['a', 'a', 'a']
    assertEquals(fillFirst, [])
})


Deno.test("Uses the fill function in the first array", () => {
    const fillFirst = fill(array[1], 'a'); // ['a', 'a', 'a']
    assertEquals(fillFirst, [])
})


Deno.test("Uses the fill function in the first array", () => {
    const fillFirst = fill(array[2], 'a'); // ['a', 'a', 'a']
    assertEquals(fillFirst, [])
})


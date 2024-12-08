import { helloWorld } from "../hello_world.ts";
import { assert } from "jsr:@std/assert";


Deno.test("helloWorld", () => {
    assert(helloWorld() === "Hello World");
}); 
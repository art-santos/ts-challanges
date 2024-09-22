import cycle from "../cycle.ts";
import { assert } from "jsr:@std/assert";

Deno.test("cycle function cycles through elements", () => {
  const gen = cycle(1, 2, 3);
  assert(gen() === 1, "First call should return 1");
  assert(gen() === 2, "Second call should return 2");
  assert(gen() === 3, "Third call should return 3");
  assert(gen() === 1, "Fourth call should return 1 (cycle back to start)");
});

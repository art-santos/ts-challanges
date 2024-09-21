import { isBoolean, isNumber, isNull, isString, isSymbol, isUndefined } from "../type_utilities.ts";
import { assert } from "jsr:@std/assert";

Deno.test("isBoolean", () => {
    assert(isBoolean(true));
    assert(isBoolean(false));
    assert(!isBoolean('not a boolean'));
});

Deno.test("isNumber", () => {
    assert(isNumber(42));
    assert(!isNumber('42'));
});

Deno.test("isNull", () => {
    assert(isNull(null));
    assert(!isNull(undefined));
});

Deno.test("isString", () => {
    assert(isString('hello'));
    assert(!isString(123));
});

Deno.test("isSymbol", () => {
    const sym = Symbol('a symbol');
    assert(isSymbol(sym));
    assert(!isSymbol('not a symbol'));
});

Deno.test("isUndefined", () => {
    assert(isUndefined(undefined));
    assert(!isUndefined(null));
});
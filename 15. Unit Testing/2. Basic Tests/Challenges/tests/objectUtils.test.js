import { describe, it, expect } from "vitest";
import { deepMerge, deepClone, flattenObject } from "../src/objectUtils";

describe("Object Utils", () => {
  it("should deep merge objects", () => {
    const obj1 = { a: 1, b: { x: 2 } };
    const obj2 = { b: { y: 3 }, c: 4 };
    expect(deepMerge(obj1, obj2)).toEqual({ a: 1, b: { x: 2, y: 3 }, c: 4 });
  });

  it("should deep clone an object", () => {
    const obj = { a: 1, b: { c: 2 } };
    const clone = deepClone(obj);
    expect(clone).toEqual(obj);
    expect(clone).not.toBe(obj);
  });

  it("should flatten an object", () => {
    const obj = { a: 1, b: { c: 2, d: { e: 3 } } };
    expect(flattenObject(obj)).toEqual({ a: 1, "b.c": 2, "b.d.e": 3 });
  });
});

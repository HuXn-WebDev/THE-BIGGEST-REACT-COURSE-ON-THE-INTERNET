import { describe, expect, it } from "vitest";
import { add } from "../src/math";

describe("math", () => {
  it("Should add valid numbers", () => {
    // Valid inputs
    expect(add(3, 5)).toBe(8);
    expect(add(10, 20)).toBe(30);
    expect(add(0, 0)).toBe(0);
  });

  it("Should add invalid inputs", () => {
    // Invalid inputs, should throw an error
    expect(() => add(3, "5")).toThrowError("Both inputs must be numbers");
    expect(() => add("a", 5)).toThrowError("Both inputs must be numbers");
    expect(() => add(undefined, null)).toThrowError(
      "Both inputs must be numbers"
    );
  });
});

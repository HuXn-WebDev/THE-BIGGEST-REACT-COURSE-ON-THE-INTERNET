import { describe, it, expect } from "vitest";
import { factorial, gcd, fibonacci } from "../src/mathUtils";

describe("Math Utils", () => {
  it("should calculate factorial", () => {
    expect(factorial(5)).toBe(120);
    expect(() => factorial(-1)).toThrow("Number must be non-negative");
  });

  it("should calculate greatest common divisor", () => {
    expect(gcd(56, 98)).toBe(14);
    expect(gcd(101, 10)).toBe(1);
  });

  it("should generate Fibonacci sequence", () => {
    expect(fibonacci(5)).toEqual([0, 1, 1, 2, 3]);
    expect(() => fibonacci(-1)).toThrow("Number must be non-negative");
  });
});

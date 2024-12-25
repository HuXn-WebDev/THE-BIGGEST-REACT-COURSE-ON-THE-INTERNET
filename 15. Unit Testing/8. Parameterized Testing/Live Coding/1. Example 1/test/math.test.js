import { describe, it, expect } from "vitest";
import { multiply } from "../src/math";

describe("multiply function", () => {
  it.each([
    [2, 3, 6], // 2 * 3 = 6
    [4, 5, 20], // 4 * 5 = 20
    [7, 8, 56], // 7 * 8 = 56
    [1, 0, 0], // 1 * 0 = 0
    [-2, 3, -6], // -2 * 3 = -6
  ])(
    "should return correct result when multiplying %d and %d (expected: %d)",
    (a, b, expectedResult) => {
      expect(multiply(a, b)).toBe(expectedResult);
    }
  );
});

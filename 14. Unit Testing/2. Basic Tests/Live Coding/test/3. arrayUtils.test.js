import { describe, expect, it } from "vitest";
import { sum, findMax, findMin, filterEven } from "../src/arrayUtils";

describe("Array Utilities", () => {
  it("should return correct sum of array", () => {
    expect(sum([1, 2, 3])).toBe(6);
    expect(sum([-1, -2, -3])).toBe(-6);
  });

  it("should return maximum value from array", () => {
    expect(findMax([1, 2, 3])).toBe(3);
    expect(findMax([10, 5, 100, 50])).toBe(100);
  });

  it("should return minimum value from array", () => {
    expect(findMin([1, 2, 3])).toBe(1);
    expect(findMin([10, 5, 100, 50])).toBe(5);
  });

  it("should return only even numbers from array", () => {
    expect(filterEven([1, 2, 3, 4])).toEqual([2, 4]);
    expect(filterEven([5, 7, 9])).toEqual([]);
  });
});

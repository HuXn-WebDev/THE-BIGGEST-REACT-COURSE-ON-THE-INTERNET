import { describe, it, expect } from "vitest";
import {
  flattenArray,
  intersectArrays,
  removeDuplicates,
} from "../src/arrayUtils";

describe("Array Utils", () => {
  it("should flatten a nested array", () => {
    expect(flattenArray([1, [2, 3], [4, [5, 6]]])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("should find intersection of arrays", () => {
    expect(intersectArrays([1, 2, 3], [3, 4, 5])).toEqual([3]);
  });

  it("should remove duplicates from array", () => {
    expect(removeDuplicates([1, 2, 2, 3, 4, 4])).toEqual([1, 2, 3, 4]);
  });
});

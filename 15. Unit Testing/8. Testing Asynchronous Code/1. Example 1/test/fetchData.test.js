import { describe, it, expect } from "vitest";
import { fetchData } from "../src/fetchData";

describe("fetchData", () => {
  it("should return the correct message after the promise resolves", async () => {
    const result = await fetchData();
    expect(result).toBe("Data fetched successfully!");
  });
});

// Step 6: Write More Tests
// Now that we’ve refactored the code, we’ll write more tests to ensure it handles edge cases, like when the arguments are not numbers.

import { describe, it, expect } from "vitest";
import { add } from "./mathUtils";

describe("add function", () => {
  it("should add two numbers correctly", () => {
    expect(add(1, 2)).toBe(3);
  });

  it("should throw an error if arguments are not numbers", () => {
    expect(() => add(1, "2")).toThrow("Both arguments must be numbers");
    expect(() => add("1", "2")).toThrow("Both arguments must be numbers");
    expect(() => add(1, null)).toThrow("Both arguments must be numbers");
  });
});

// Step 7: Run All Tests Again
// Finally, we run all the tests to make sure everything works after the refactor.

// Summary of Steps:
// Write a Test: We wrote a test for adding two numbers.
// Run the Test: The test failed because the function didn’t exist.
// Write the Code: We wrote the add function to make the test pass.
// Run the Test Again: The test passed.
// Refactor the Code: We improved the code by adding validation for the inputs.
// Write More Tests: We wrote additional tests to check the new validation logic.
// Run All Tests: We ran all tests to ensure everything works correctly.

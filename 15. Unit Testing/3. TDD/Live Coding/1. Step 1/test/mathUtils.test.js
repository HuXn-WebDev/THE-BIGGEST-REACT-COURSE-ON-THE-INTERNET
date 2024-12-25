// Let’s implement a function that adds two numbers together.

// Step 1: Write a Test ✅
// First, we write a test for the function that we want to implement. At this point, the function doesn't exist yet, so the test will fail.

import { describe, it, expect } from "vitest";

describe("add function", () => {
  it("should add two numbers correctly", () => {
    expect(add(1, 2)).toBe(3); // This will fail because `add` is not yet defined.
  });
});

// Step 2: Run the Test ✅
// Now, we run the test, and it will fail because the add function doesn't exist yet.

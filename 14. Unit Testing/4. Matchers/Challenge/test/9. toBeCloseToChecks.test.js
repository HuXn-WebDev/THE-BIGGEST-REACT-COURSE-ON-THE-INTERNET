import { expect } from "vitest";

test("Challenge 9: toBeCloseTo matcher (Number Approximation)", () => {
  const pi = 3.14159;

  expect(pi).toBeCloseTo(3.14, 2);
  expect(pi).toBeCloseTo(3.15, 2);
});

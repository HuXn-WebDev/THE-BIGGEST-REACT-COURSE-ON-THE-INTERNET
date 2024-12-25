import { expect, it } from "vitest";

it("toBeGreaterThan matcher", () => {
  const result = 10;
  expect(result).toBeGreaterThan(5);
});

// ---------------------------------

it("toBeGreaterThanOrEqual matcher", () => {
  const result = 10;
  expect(result).toBeGreaterThanOrEqual(10);
});

// ---------------------------------

it("toBeLessThan matcher", () => {
  const result = 3;
  expect(result).toBeLessThan(5);
});

// ---------------------------------
it("toBeLessThanOrEqual matcher", () => {
  const result = 3;
  expect(result).toBeLessThanOrEqual(3);
});

// ---------------------------------

it("toBeCloseTo matcher", () => {
  const result = 3.14159;
  expect(result).toBeCloseTo(3.14, 2);
});

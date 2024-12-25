import { expect, it } from "vitest";

it("toBe matcher for strings", () => {
  const result = "Hello, world!";
  expect(result).toBe("Hello, world!");
});

// ---------------------------------------------

it("toContain matcher for strings", () => {
  const result = "Hello, world!";
  expect(result).toContain("Hello");
});

// ---------------------------------------------
it("toMatch matcher for regex", () => {
  const result = "Hello, world!";
  expect(result).toMatch(/world/);
});

// ---------------------------------------------

it("toMatchSnapshot matcher", () => {
  const result = "Hello, world!";
  expect(result).toMatchSnapshot();
});

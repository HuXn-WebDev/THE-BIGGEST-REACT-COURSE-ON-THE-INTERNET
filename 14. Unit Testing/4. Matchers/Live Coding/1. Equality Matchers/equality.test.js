import { expect, it } from "vitest";
// -----------------
it("toBe matcher", () => {
  const result = 5;
  expect(result).toBe(5);
});
// -----------------

it("toEqual matcher", () => {
  const obj1 = { name: "Alice", age: 30 };
  const obj2 = { name: "Alice", age: 30 };
  expect(obj1).toEqual(obj2);
});

// -----------------
it("toStrictEqual matcher", () => {
  const obj1 = { name: "Alice", age: 30 };
  const obj2 = { name: "Alice", age: 30 };
  expect(obj1).toStrictEqual(obj2);
});

// -----------------

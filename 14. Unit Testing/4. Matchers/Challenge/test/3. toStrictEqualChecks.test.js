import { expect } from "vitest";

test("Challenge 3: toStrictEqual matcher (Strict Deep Equality)", () => {
  const obj1 = { name: "Alice", age: 30, details: undefined };
  const obj2 = { name: "Alice", age: 30 };

  expect(obj1).toStrictEqual(obj2);
});

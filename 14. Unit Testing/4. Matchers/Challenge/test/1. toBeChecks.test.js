import { expect } from "vitest";

test("Challenge 1: toBe matcher (Strict Equality)", () => {
  const person1 = { name: "John" };
  const person2 = person1;
  const person3 = { name: "John" };

  expect(person1).toBe(person2);
  expect(person1).toBe(person3);
});

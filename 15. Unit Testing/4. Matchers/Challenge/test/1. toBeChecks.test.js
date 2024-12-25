import { expect } from "vitest";

test("Challenge 1: toBe matcher (Strict Equality)", () => {
  const person1 = { name: "John" };
  const person2 = person1; // Same reference as person1
  const person3 = { name: "John" }; // Different object, same data

  // Check if person1 and person2 are the same reference
  expect(person1).toBe(person2); // Should pass

  // Check if person1 and person3 are the same reference
  expect(person1).toBe(person3); // Should fail
});

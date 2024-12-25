import { expect, it } from "vitest";

it("toBe matcher for objects", () => {
  const obj1 = { name: "Alice" };
  const obj2 = obj1;
  expect(obj1).toBe(obj2);
});

// -----------------------------

it("toEqual matcher for objects", () => {
  const obj1 = { name: "Alice", age: 30 };
  const obj2 = { name: "Alice", age: 30 };
  expect(obj1).toEqual(obj2);
});

// -----------------------------

it("toStrictEqual matcher for objects", () => {
  const obj1 = { name: "Alice", age: 30, extra: undefined };
  const obj2 = { name: "Alice", age: 30 };
  expect(obj1).toStrictEqual(obj2);
});

// -----------------------------

it("toHaveProperty matcher for objects", () => {
  const obj = { name: "Alice", age: 30 };
  expect(obj).toHaveProperty("name");
  expect(obj).toHaveProperty("age", 30);
});

// -----------------------------

it("toBeDefined and toBeUndefined matcher for objects", () => {
  const obj = { name: "Alice", age: undefined };
  expect(obj.name).toBeDefined();
  expect(obj.age).toBeUndefined();
});

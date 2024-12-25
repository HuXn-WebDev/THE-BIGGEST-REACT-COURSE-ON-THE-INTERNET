import { expect } from "vitest";

test("Challenge 2: toEqual matcher (Deep Equality)", () => {
  const book1 = { title: "The Great Gatsby", author: "F. Scott Fitzgerald" };
  const book2 = { title: "The Great Gatsby", author: "F. Scott Fitzgerald" };
  const book3 = { title: "1984", author: "George Orwell" };

  expect(book1).toEqual(book2);
  expect(book1).toEqual(book3);
});

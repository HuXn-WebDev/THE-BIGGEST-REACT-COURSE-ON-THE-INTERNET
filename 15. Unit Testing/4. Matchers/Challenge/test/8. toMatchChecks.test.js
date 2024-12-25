import { expect } from "vitest";

test("Challenge 8: toMatch matcher (Regex Match Check)", () => {
  const email = "user@example.com";

  expect(email).toMatch(/^[\w-]+@([\w-]+\.)+[a-zA-Z]{2,7}$/);
  expect(email).toMatch(/admin/);
});

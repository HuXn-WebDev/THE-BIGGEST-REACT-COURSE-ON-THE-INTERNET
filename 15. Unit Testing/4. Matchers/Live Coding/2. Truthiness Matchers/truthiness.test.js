import { expect, it } from "vitest";

it("toBeTruthy matcher", () => {
  const value = 1;
  expect(value).toBeTruthy();
});

// ---------------------------------

test("toBeFalsy matcher", () => {
  const value = 0;
  expect(value).toBeFalsy();
});

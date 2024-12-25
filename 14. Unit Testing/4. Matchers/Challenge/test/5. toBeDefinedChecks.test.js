import { expect } from "vitest";

test("Challenge 5: toBeDefined matcher (Defined Property Check)", () => {
  const settings = { theme: "dark", language: "en", notifications: undefined };

  expect(settings.theme).toBeDefined();
  expect(settings.language).toBeDefined();
  expect(settings.notifications).toBeDefined();
});

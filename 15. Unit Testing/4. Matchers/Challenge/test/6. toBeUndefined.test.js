import { expect } from "vitest";

test("Challenge 6: toBeUndefined matcher (Undefined Property Check)", () => {
  const config = { mode: "production", debug: undefined };

  expect(config.debug).toBeUndefined();
  expect(config.mode).toBeUndefined();
});

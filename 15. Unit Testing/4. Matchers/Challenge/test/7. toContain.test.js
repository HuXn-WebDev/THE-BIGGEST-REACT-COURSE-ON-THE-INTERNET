import { expect } from "vitest";

test("Challenge 7: toContain matcher (String Containment Check)", () => {
  const sentence = "The quick brown fox jumps over the lazy dog";

  expect(sentence).toContain("fox");
  expect(sentence).toContain("cat");
});

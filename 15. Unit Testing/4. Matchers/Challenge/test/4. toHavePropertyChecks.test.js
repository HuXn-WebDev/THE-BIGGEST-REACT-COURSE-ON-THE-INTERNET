import { expect, it } from "vitest";

it("Challenge 4: toHaveProperty matcher (Property Check)", () => {
  const user = { username: "johndoe", email: "johndoe@example.com", age: 25 };

  expect(user).toHaveProperty("username");
  expect(user).toHaveProperty("email", "johndoe@example.com");
  expect(user).toHaveProperty("password");
});

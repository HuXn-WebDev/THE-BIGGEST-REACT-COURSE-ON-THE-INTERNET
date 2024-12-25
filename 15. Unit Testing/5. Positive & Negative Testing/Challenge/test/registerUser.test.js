import { describe, it, expect } from "vitest";
import { registerUser } from "../src/registerUser";

describe("registerUser - Tests", () => {
  // Positive test: valid username and password
  it("should register user successfully with valid username and password", () => {
    const result = registerUser("validUsername", "validPassword123");
    expect(result).toBe("Registration successful!");
  });

  // Negative test: username too short
  it("should throw an error if username is less than 3 characters", () => {
    expect(() => registerUser("ab", "validPassword123")).toThrow(
      "Username must be a string with at least 3 characters"
    );
  });

  // Negative test: username is not a string
  it("should throw an error if username is not a string", () => {
    expect(() => registerUser(123, "validPassword123")).toThrow(
      "Username must be a string with at least 3 characters"
    );
  });

  // Negative test: password too short
  it("should throw an error if password is less than 6 characters", () => {
    expect(() => registerUser("validUsername", "short")).toThrow(
      "Password must be a string with at least 6 characters"
    );
  });

  // Negative test: password is not a string
  it("should throw an error if password is not a string", () => {
    expect(() => registerUser("validUsername", 123456)).toThrow(
      "Password must be a string with at least 6 characters"
    );
  });
});

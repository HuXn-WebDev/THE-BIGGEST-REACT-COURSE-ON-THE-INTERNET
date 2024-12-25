import { describe, it, expect } from "vitest";
import { validatePassword } from "../src/validatePassword";

describe("validatePassword", () => {
  it("should allow a password with exactly 8 characters", () => {
    const result = validatePassword("abcdefgh");
    expect(result).toBe("Password is valid!");
  });

  it("should throw an error if password has less than 8 characters", () => {
    expect(() => validatePassword("abc")).toThrow(
      "Password must be between 8 and 16 characters."
    );
  });

  it("should allow a password with exactly 16 characters", () => {
    const result = validatePassword("abcdefghijklmnop");
    expect(result).toBe("Password is valid!");
  });

  it("should throw an error if password has more than 16 characters", () => {
    expect(() => validatePassword("abcdefghijklmnopq")).toThrow(
      "Password must be between 8 and 16 characters."
    );
  });
});

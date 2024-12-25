import { describe, it, expect } from "vitest";
import {
  reverseString,
  capitalizeWords,
  isPalindrome,
} from "../src/stringUtils";

describe("String Utils", () => {
  it("should reverse a string", () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  it("should capitalize words", () => {
    expect(capitalizeWords("hello world")).toBe("Hello World");
  });

  it("should check for palindrome", () => {
    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("hello")).toBe(false);
  });
});

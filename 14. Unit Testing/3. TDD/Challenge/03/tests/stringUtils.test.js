import { describe, it, expect } from "vitest";
import { reverseString } from "./stringUtils";

describe("reverseString function", () => {
  it("should reverse a regular string", () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  it("should return an empty string when input is empty", () => {
    expect(reverseString("")).toBe("");
  });

  it("should reverse a string with spaces", () => {
    expect(reverseString("hello world")).toBe("dlrow olleh");
  });

  it("should reverse a string with special characters", () => {
    expect(reverseString("abc@123!")).toBe("!321@cba");
  });
});

import { describe, it, expect } from "vitest";
import { isValidStringLength } from "../src/stringValidator";

describe("isValidStringLength function", () => {
  it.each([
    ["Hello", "String is valid!"], // 5 characters, valid
    ["World!", "String is valid!"], // 6 characters, valid
    ["Too long str", "String is valid!"], // 12 characters, invalid
    ["Hi", "String length must be between 5 and 10 characters."], // 2 characters, invalid
    ["Perfect", "String is valid!"], // 7 characters, valid
    ["Short", "String is valid!"], // 5 characters, valid
  ])(
    "should return correct validation message for string: %s",
    (str, expected) => {
      if (expected === "String is valid!") {
        expect(isValidStringLength(str)).toBe(expected);
      } else {
        expect(() => isValidStringLength(str)).toThrow(expected);
      }
    }
  );
});

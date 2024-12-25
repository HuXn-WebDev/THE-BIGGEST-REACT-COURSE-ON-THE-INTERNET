import { describe, expect, it } from "vitest";
import {
  toUpperCase,
  toLowerCase,
  capitalize,
  reverse,
} from "../src/stringUtils";

describe("String Utilities", () => {
  it("should return string in uppercase", () => {
    expect(toUpperCase("hello")).toBe("HELLO");
    expect(toUpperCase("world")).toBe("WORLD");
  });

  it("should return string in lowercase", () => {
    expect(toLowerCase("HELLO")).toBe("hello");
    expect(toLowerCase("WORLD")).toBe("world");
  });

  it("should capitalize first letter of string", () => {
    expect(capitalize("hello")).toBe("Hello");
    expect(capitalize("world")).toBe("World");
  });

  it("should return string reversed", () => {
    expect(reverse("hello")).toBe("olleh");
    expect(reverse("world")).toBe("dlrow");
  });
});

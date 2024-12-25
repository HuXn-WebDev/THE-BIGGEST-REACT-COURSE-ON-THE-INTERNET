import { describe, it, expect } from "vitest";
import { validateDate } from "../src/validateDate";

describe("validateDate - Boundary Tests", () => {
  const today = new Date();
  const sevenDaysAgo = new Date(today);
  sevenDaysAgo.setDate(today.getDate() - 7);

  const thirtyDaysFromNow = new Date(today);
  thirtyDaysFromNow.setDate(today.getDate() + 30);

  // Test 1: Exactly 7 days ago (valid lower boundary)
  it("should allow a date exactly 7 days ago", () => {
    const result = validateDate(sevenDaysAgo.toISOString().split("T")[0]);
    expect(result).toBe("Date is valid!");
  });

  // Test 2: 8 days ago (invalid, just outside the lower boundary)
  it("should throw an error if the date is 8 days ago", () => {
    const eightDaysAgo = new Date(sevenDaysAgo);
    eightDaysAgo.setDate(sevenDaysAgo.getDate() - 1);
    expect(() =>
      validateDate(eightDaysAgo.toISOString().split("T")[0])
    ).toThrow("Date is outside the allowed range.");
  });

  // Test 3: Exactly 30 days from now (valid upper boundary)
  it("should allow a date exactly 30 days in the future", () => {
    const result = validateDate(thirtyDaysFromNow.toISOString().split("T")[0]);
    expect(result).toBe("Date is valid!");
  });

  // Test 4: 31 days from now (invalid, just outside the upper boundary)
  it("should throw an error if the date is 31 days in the future", () => {
    const thirtyOneDaysFromNow = new Date(thirtyDaysFromNow);
    thirtyOneDaysFromNow.setDate(thirtyDaysFromNow.getDate() + 1);
    expect(() =>
      validateDate(thirtyOneDaysFromNow.toISOString().split("T")[0])
    ).toThrow("Date is outside the allowed range.");
  });

  // Test 5: Today's date (valid)
  it("should allow today's date", () => {
    const result = validateDate(today.toISOString().split("T")[0]);
    expect(result).toBe("Date is valid!");
  });

  // Test 6: 7 days in the future (valid)
  it("should allow a date 7 days in the future", () => {
    const sevenDaysInFuture = new Date(today);
    sevenDaysInFuture.setDate(today.getDate() + 7);
    const result = validateDate(sevenDaysInFuture.toISOString().split("T")[0]);
    expect(result).toBe("Date is valid!");
  });
});

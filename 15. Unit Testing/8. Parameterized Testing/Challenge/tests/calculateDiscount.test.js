import { describe, it, expect } from "vitest";
import { calculateDiscount } from "../src/discountCalculator";

describe("calculateDiscount - Parameterized Tests", () => {
  it.each([
    // Flat discount: Orders greater than $50
    [60, "flat", 55], // $60 -> $5 discount
    [100, "flat", 95], // $100 -> $5 discount

    // Percentage discount: Orders between $30 and $50
    [40, "percentage", 36], // $40 -> 10% discount = $36
    [50, "percentage", 45], // $50 -> 10% discount = $45

    // No discount: Orders less than $30
    [25, "none", 25], // $25 -> no discount
    [5, "none", 5], // $5 -> no discount
  ])(
    "should calculate the correct discounted price for totalPrice $%d and discountType '%s'",
    (totalPrice, discountType, expectedPrice) => {
      const result = calculateDiscount(totalPrice, discountType);
      expect(result).toBe(expectedPrice);
    }
  );
});

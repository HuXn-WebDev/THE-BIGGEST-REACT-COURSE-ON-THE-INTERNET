### **Parameterized Testing Challenge:**

You are tasked with implementing and testing a **discount calculator** for an e-commerce platform. The calculator applies different discounts based on the following criteria:

1. **Flat Discount**: A flat discount of $5 for orders greater than $50.
2. **Percentage Discount**: A 10% discount for orders between $30 and $50.
3. **No Discount**: No discount for orders less than $30.

The function should calculate the total price after applying the appropriate discount. The function should take the following parameters:

- `totalPrice`: The original total price of the order.
- `discountType`: The type of discount (flat, percentage, or none).

### **Requirements:**

1. Implement a function `calculateDiscount(totalPrice, discountType)`:
   - If the `totalPrice` is greater than $50, apply a flat discount of $5.
   - If the `totalPrice` is between $30 and $50 (inclusive), apply a 10% discount.
   - If the `totalPrice` is less than $30, no discount is applied.
2. Write **parameterized tests** for this function.

3. Your test should cover the following scenarios:

   - Orders above $50 (flat discount).
   - Orders between $30 and $50 (percentage discount).
   - Orders below $30 (no discount).

4. Use parameterized tests to check different values of `totalPrice` and ensure that the correct discount is applied.

### **Test Cases to Implement:**

You should use **parameterized tests** to verify that the discount is applied correctly. Here are some test cases you should include:

1. **Flat Discount for Orders Over $50:**

   - A price of $60 should return $55 after the discount.
   - A price of $100 should return $95 after the discount.

2. **Percentage Discount for Orders Between $30 and $50:**

   - A price of $40 should return $36 after the 10% discount.
   - A price of $50 should return $45 after the 10% discount.

3. **No Discount for Orders Below $30:**
   - A price of $25 should remain $25 (no discount).
   - A price of $5 should remain $5 (no discount).

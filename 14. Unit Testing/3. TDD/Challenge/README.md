# Write a function that reverses a given string.

#### **Instructions**:

1. **Write a test** for a function `reverseString(str)` that takes a string as input and returns the string in reverse order.
2. The function should return an empty string if the input is an empty string.
3. Once the tests are written, **implement the function**.
4. **Run the tests** to ensure the function works correctly.
5. **Refactor** the code if needed, ensuring that the tests still pass after each change.

---

### **Test Plan**:

Write tests for the following scenarios:

1. **Reversing a regular string**:

   - Input: `"hello"`, Output: `"olleh"`

2. **Reversing an empty string**:

   - Input: `""`, Output: `""`

3. **Reversing a string with spaces**:

   - Input: `"hello world"`, Output: `"dlrow olleh"`

4. **Reversing a string with special characters**:
   - Input: `"abc@123!"`, Output: `"!321@cba"`

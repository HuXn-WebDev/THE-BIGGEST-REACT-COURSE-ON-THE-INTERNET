### 1. Math Utils

- **`factorial(n)`**: This function calculates the factorial of a given number `n`. Write tests to verify that the function:

  - Returns the correct factorial for a valid number.
  - Throws an error when a negative number is passed.

- **`gcd(a, b)`**: This function finds the greatest common divisor (GCD) of two numbers `a` and `b`. Write tests to verify that the function:

  - Returns the correct GCD for two numbers.
  - Works correctly for different pairs of numbers (including prime numbers).
  - Handles edge cases like `a` or `b` being `0`.

- **`fibonacci(n)`**: This function generates a Fibonacci sequence up to the `n`-th term. Write tests to ensure that:
  - The Fibonacci sequence is correctly generated for a valid input `n`.
  - The function throws an error when `n` is negative.
  - The function handles edge cases (like `n = 0`).

---

### 2. String Utils

You are provided with the following string-related utility functions. Your task is to write tests for them to ensure their correctness.

- **`reverseString(str)`**: This function reverses a given string `str`. Write tests to verify that:
  - The function correctly reverses different strings.
  - It works with strings that include spaces and special characters.
- **`capitalizeWords(str)`**: This function capitalizes the first letter of each word in a string `str`. Write tests to ensure that:

  - The function capitalizes each word properly, even if the string has mixed cases.
  - It handles edge cases like strings with all uppercase letters, all lowercase letters, or punctuation.

- **`isPalindrome(str)`**: This function checks if a string `str` is a palindrome (reads the same forward and backward). Write tests to verify that:
  - It returns `true` for valid palindromes.
  - It returns `false` for non-palindromes.
  - It handles strings with special characters, spaces, and case differences.

---

### 3. Array Utils

You are provided with the following array-related utility functions. Your task is to write tests for them to ensure their correctness.

- **`flattenArray(arr)`**: This function flattens a nested array `arr`. Write tests to verify that:

  - The function correctly flattens arrays of varying depths.
  - It works with arrays containing non-array elements.
  - It handles edge cases like empty arrays and arrays with only primitive values.

- **`intersectArrays(arr1, arr2)`**: This function finds the intersection of two arrays `arr1` and `arr2`. Write tests to ensure that:

  - The function returns an array containing only the elements that are common to both arrays.
  - It handles cases where there are no common elements.
  - It works with arrays of different lengths and types of data.

- **`removeDuplicates(arr)`**: This function removes duplicate elements from an array `arr`. Write tests to ensure that:
  - The function correctly removes all duplicates, leaving only unique elements.
  - It works with arrays containing numbers, strings, or mixed data types.
  - It handles edge cases like arrays with no duplicates or arrays with only one element.

---

### 4. Object Utils

You are provided with the following object-related utility functions. Your task is to write tests for them to ensure their correctness.

- **`deepMerge(obj1, obj2)`**: This function merges two objects `obj1` and `obj2` deeply. Write tests to ensure that:

  - The function merges nested objects correctly.
  - It correctly overwrites properties of `obj1` with properties from `obj2` if there are conflicts.
  - It works with objects that have different structures (e.g., one with nested objects and the other with flat properties).

- **`deepClone(obj)`**: This function clones an object `obj` deeply. Write tests to verify that:

  - The function returns a new object that is a deep copy of the original.
  - The clone is independent of the original object (i.e., changes to the clone should not affect the original).
  - It works with nested objects and arrays inside the object.

- **`flattenObject(obj)`**: This function flattens a nested object `obj`. Write tests to ensure that:
  - The function correctly flattens nested objects into key-value pairs.
  - It handles objects with multiple levels of nesting and special characters in keys.
  - It works with objects that contain arrays and other non-object data types.

---

### Testing Details

- Write at least **three tests** for each utility function.
- Ensure that you test for **both valid inputs** (expected results) and **invalid inputs** (edge cases, such as negative numbers, empty arrays/strings, etc.).
- **Use descriptive test names** to indicate the functionality being tested.
- Tests should be **independent** of each other.
- Use **Vitest** to run the tests.

### Boundary Testing Challenge:

You are tasked with developing a **date validator** for a library system. The system needs to ensure that a user can provide valid **borrowing dates** for a book.

- The borrowing date must be within the **past 7 days** or **the next 30 days** from the current date.
- Any date outside this range should throw an error.
- The function must handle both **past** and **future dates** correctly.

#### Input:

- The function should accept a single date (in the format `YYYY-MM-DD`).

#### Output:

- The function should return `"Date is valid!"` if the date is within the allowed range.
- The function should throw an error with the message `"Date is outside the allowed range."` if the date is outside the allowed range.

### Example:

1. **Valid dates**: Any date between 7 days ago and 30 days in the future from today (inclusive).
2. **Invalid dates**: Any date before 7 days ago or after 30 days in the future.

---

### Boundary Test Cases to Implement:

1. **Test 1**: A date that is exactly **7 days ago** (valid lower boundary).
2. **Test 2**: A date that is **8 days ago** (invalid, just outside the lower boundary).
3. **Test 3**: A date that is exactly **30 days in the future** (valid upper boundary).
4. **Test 4**: A date that is **31 days in the future** (invalid, just outside the upper boundary).
5. **Test 5**: A date that is **today's date** (valid).
6. **Test 6**: A date that is **7 days in the future** (valid).

### Your Task:

1. Implement the function `validateDate(date)` in JavaScript that accepts a date string (in the format `YYYY-MM-DD`).
2. Write boundary test cases to test the function.

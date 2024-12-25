### **Challenge: Positive and Negative Testing for a User Registration Function**

Imagine you are working on a **user registration** system. You have a function `registerUser(username, password)` that takes two parameters: `username` and `password`.

The function performs the following checks:

1. The **username** must be a non-empty string with at least 3 characters.
2. The **password** must be a string with a minimum length of 6 characters.

- If both conditions are met, it returns a success message: `"Registration successful!"`.
- If either condition fails, it throws an error message.

---

### **Challenge Task**

Write both **positive** and **negative** test cases to ensure the `registerUser` function works correctly.

---

### **Positive Testing:**

In this part of the challenge, you should test the function with **valid inputs** (valid username and password) and check if it returns the expected success message.

### **Negative Testing:**

In this part of the challenge, you should test the function with **invalid inputs** (invalid username and/or password) and check if the function throws the correct error message.

### **Challenge Instructions:**

1. **Positive Test Cases**: Ensure that the function works when provided with valid username and password values.
2. **Negative Test Cases**: Ensure that the function throws appropriate error messages when:
   - The username is too short (less than 3 characters).
   - The password is too short (less than 6 characters).
   - The username or password is not a string.

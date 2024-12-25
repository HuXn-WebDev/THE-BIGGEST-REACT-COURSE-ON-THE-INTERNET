The **AAA pattern** is a simple and widely-used structure for organizing tests. It stands for:

1. **Arrange**: Set up everything needed for the test (variables, mock data, etc.).
2. **Act**: Perform the action that you want to test (e.g., call a function).
3. **Assert**: Verify that the result of the action is what you expect.

## Anology

Imagine you are baking a cake:

1. **Arrange**: Gathering all the ingredients and tools you need (flour, sugar, eggs, mixing bowl, etc.).
2. **Act**: Mixing the ingredients together and putting the cake in the oven.
3. **Assert**: Checking if the cake is baked properly by cutting into it and tasting. If it tastes good and is fully baked, you know your steps worked.

### In code:

- **Arrange** is when you gather everything you need for the test.
- **Act** is when you do the action you're testing (like calling a function).
- **Assert** is when you check if the result is what you expected (like tasting the cake to see if it's perfect).

### Example:

```js
test("adds numbers correctly", () => {
  // Arrange: Set up the data
  const a = 1;
  const b = 1;

  // Act: Perform the action (call the function)
  const result = a + b;

  // Assert: Verify the result
  expect(result).toBe(2);
});
```

- **Arrange**: We set up `a` and `b` (the data we need).
- **Act**: We perform the addition (`a + b`).
- **Assert**: We check if the result is correct (`expect(result).toBe(2)`).

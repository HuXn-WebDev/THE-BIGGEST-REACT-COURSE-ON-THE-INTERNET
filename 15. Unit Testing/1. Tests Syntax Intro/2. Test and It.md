In **Vitest**, both `test` and `it` are used to define individual test cases. They work the same way, and we can use either one to write a test.

- **`test`**: Describes a specific test case.
- **`it`**: Is another way to describe a test case. It’s just a more natural way of phrasing the test description (e.g., "it adds numbers correctly").

Both `test` and `it` take two arguments:

1. A description of what the test is checking.
2. A function that runs the actual test.

Example using `test`:

```js
test("adds numbers correctly", () => {
  expect(1 + 1).toBe(2);
});
```

Example using `it`:

```js
it("adds numbers correctly", () => {
  expect(1 + 1).toBe(2);
});
```

Both do exactly the same thing. You can choose either, but `it` is often used to make the description sound like a sentence, such as: "It should add numbers correctly."

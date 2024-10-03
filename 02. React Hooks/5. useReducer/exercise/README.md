### Exercise: Using `useReducer` in React

In this exercise, you will learn how to:

- Define a reducer function to manage state logic
- Use the `useReducer` hook to manage complex state in a React component
- Dispatch actions to update state

---

### Step 1: Setting Up the Reducer Function

1. Create a new file called `counterReducer.js`.
2. Inside this file, define a reducer function that will manage a simple counter's state.

### Step 2: Using `useReducer` Hook

1. Create a new file called `Counter.jsx`.
2. Inside this file, create a functional component called `Counter`.
3. Use the `useReducer` hook to manage the state of the counter.

### Step 3: Extending the Reducer with More Actions

1. Modify the `counterReducer.js` file to add more actions for increasing and decreasing by a specific amount.

### Step 4: Using Payloads in Actions

1. Update the `Counter.jsx` file to allow the user to increase or decrease the count by a specific value using an input field.

### Step 5: Rendering the Counter in `App.jsx`

1. In your `App.jsx` file, import and render the `Counter` component.

```jsx
import React from "react";
import Counter from "./Counter";

function App() {
  return (
    <div>
      <h1>React useReducer Example</h1>
      <Counter />
    </div>
  );
}

export default App;
```

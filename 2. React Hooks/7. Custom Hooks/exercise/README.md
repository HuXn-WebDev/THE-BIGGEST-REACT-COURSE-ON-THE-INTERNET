### Exercise: Creating and Using Custom Hooks in React

In this exercise, you will learn how to:

- Create a custom hook that encapsulates state and logic.
- Reuse the custom hook in multiple components.
- Create hooks for handling form inputs and fetch data from an API.

---

### Step 1: Create a Custom Hook for Toggling a Boolean State

1. Create a new file called `useToggle.js`.
2. Inside this file, define a custom hook `useToggle` that toggles a boolean value between `true` and `false`.

### Step 2: Use the Custom Hook in a Component

1. Create a new file called `ToggleComponent.jsx`.
2. Inside this file, create a component that uses the `useToggle` hook to toggle a message.

### Step 3: Create a Custom Hook for Form Input Management

1. Create a new file called `useInput.js`.
2. Inside this file, define a custom hook `useInput` that handles form input changes.

### Step 4: Use the `useInput` Hook in a Form Component

1. Create a new file called `FormComponent.jsx`.
2. Inside this file, create a form component that uses the `useInput` hook to manage multiple input fields.

### Step 5: Create a Custom Hook for Fetching Data from an API

1. Create a new file called `useFetch.js`.
2. Inside this file, define a custom hook `useFetch` that fetches data from an API and returns the data, loading state, and any error.

### Step 6: Use the `useFetch` Hook to Fetch Data in a Component

1. Create a new file called `FetchComponent.jsx`.
2. Inside this file, create a component that uses the `useFetch` hook to display data from an API.

### Step 7: Render All Components in `App.jsx`

1. In your `App.jsx` file, import and render the `ToggleComponent`, `FormComponent`, and `FetchComponent` components.

```jsx
import React from "react";
import ToggleComponent from "./ToggleComponent";
import FormComponent from "./FormComponent";
import FetchComponent from "./FetchComponent";

function App() {
  return (
    <div>
      <h1>React Custom Hooks Examples</h1>
      <ToggleComponent />
      <FormComponent />
      <FetchComponent />
    </div>
  );
}

export default App;
```

---

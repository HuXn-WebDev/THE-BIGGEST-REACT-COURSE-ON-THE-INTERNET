### Exercise: Mastering `useState` in React

In this exercise, you’ll learn how to use the `useState` hook for managing state in various scenarios, including basic usage, arrays, objects, and arrays of objects.

#### Step 1: Basic Usage of `useState`

1. Create a new file called `Counter.jsx`.
2. Inside this file, create a functional component called `Counter`.
3. Use `useState` to manage a simple counter state.
   - Initialize the state with a value of `0`.
   - Create a button to increment the counter by `1` when clicked.
   - Display the current value of the counter.

#### Step 2: `useState` with an Array of Data

1. Create a new file called `TodoList.jsx`.
2. Inside this file, create a functional component called `TodoList`.
3. Use `useState` to manage an array of todo items.
   - Initialize the state with an empty array.
   - Create a form to add new todo items to the list.
   - Display the list of todo items.

#### Step 3: `useState` with an Object of Data

1. Create a new file called `Profile.jsx`.
2. Inside this file, create a functional component called `Profile`.
3. Use `useState` to manage an object with user profile information.
   - Initialize the state with an object containing `name` and `age`.
   - Provide input fields to update the `name` and `age`.
   - Display the updated profile information.

#### Step 4: `useState` with an Array of Objects

1. Create a new file called `ShoppingList.jsx`.
2. Inside this file, create a functional component called `ShoppingList`.
3. Use `useState` to manage an array of objects, where each object represents a shopping item with `name` and `quantity`.
   - Initialize the state with an empty array.
   - Create a form to add new items to the list.
   - Display the list of shopping items.

#### Step 5: Render All Components in `App.jsx`

1. In your `App.jsx` file, import the `Counter`, `TodoList`, `Profile`, and `ShoppingList` components:

   ```jsx
   import Counter from "./Counter";
   import TodoList from "./TodoList";
   import Profile from "./Profile";
   import ShoppingList from "./ShoppingList";
   ```

2. Inside the `App` component, render all four components:

   ```jsx
   function App() {
     return (
       <div>
         <h1>React useState Examples</h1>
         <Counter />
         <TodoList />
         <Profile />
         <ShoppingList />
       </div>
     );
   }

   export default App;
   ```

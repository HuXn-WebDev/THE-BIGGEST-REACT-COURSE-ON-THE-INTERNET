# Typing `useReducer`

## Objective

In this exercise, you'll practice using the `useReducer` hook with TypeScript. You will create a state management system using `useReducer` and type the actions, state, and reducer function to ensure type safety.

## Instructions

### Step 1: Define State and Actions

1. Create a file named `counterReducer.ts` in the `src` directory.

2. Define the types for the state and actions for counter:

### Step 2: Create the `Counter` Component

1. Create a file named `Counter.tsx` in the `src` directory.

2. Use `useReducer` to manage the counter state and actions in the component:

### Step 3: Use the Component in `App`

1. Open `App.tsx` (or create a new component if you prefer).

2. Import and use the `Counter` component:

   ```tsx
   // src/App.tsx
   import React from "react";
   import Counter from "./Counter";

   const App: React.FC = () => {
     return (
       <div>
         <h1>React + TypeScript Exercise</h1>
         <Counter />
       </div>
     );
   };

   export default App;
   ```

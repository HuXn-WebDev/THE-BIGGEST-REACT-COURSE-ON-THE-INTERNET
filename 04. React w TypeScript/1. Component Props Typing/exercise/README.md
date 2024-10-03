# Component Props Typing

## Objective

In this exercise, you'll practice typing props for a React component using TypeScript. You will create a simple `Button` component with typed props and then use it within a parent component.

## Instructions

### Step 1: Create the `Button` Component

1. Create a new file named `Button.tsx` in the `src` directory.

2. Define a `Button` component that accepts the following props:

   - `label`: A string to display as the button's text.
   - `onClick`: A function that gets called when the button is clicked.
   - `disabled`: A boolean to indicate if the button is disabled.

### Step 2: Use the `Button` Component

1. Open `App.tsx` (or create a new component if you prefer).

2. Import and use the `Button` component, passing the appropriate props.

### Step 3: Verify Your Types

1. Make sure your TypeScript compiler is not showing any type errors.

2. Test the buttons in the browser to ensure they work as expected:
   - The first button should display "Click Me" and show an alert when clicked.
   - The second button should be disabled and should not trigger the alert.

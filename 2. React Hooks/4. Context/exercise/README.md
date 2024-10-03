### Exercise: Using Context and `useContext` in React

In this exercise, you will learn how to:

- Create a Context
- Use `useContext` to access data from the Context
- Share state and functions between components without using props

#### Step 1: Creating a Context

1. Create a new file called `UserContext.js`.
2. Inside this file, create a `UserContext` and a `UserProvider` component that will hold the shared state.

#### Step 2: Using `useContext` in Components

1. Create a new file called `UserProfile.jsx`.
2. Inside this file, create a functional component called `UserProfile`. This component will access the user data from `UserContext` using the `useContext` hook.

#### Step 3: Updating Context Data

1. Create a new file called `UpdateUser.jsx`.
2. Inside this file, create a functional component called `UpdateUser` that allows the user to update their name.

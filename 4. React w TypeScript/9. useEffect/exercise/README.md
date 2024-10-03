# useEffect Types

## Objective

Create a React component that fetches user data from an API using `useEffect`, stores the data in a state variable using `useState`, and displays the data. You'll define TypeScript types to ensure type safety throughout the component.

## Requirements

1. **Create a new React component named `UserList`.**

2. **Fetch data from the following API endpoint:**

   ```
   https://jsonplaceholder.typicode.com/users
   ```

   This endpoint returns a list of users, with each user object containing `id`, `name`, `username`, `email`, and `phone`.

3. **Define TypeScript types** for the user data. The data structure should include:

   - `id`: number
   - `name`: string
   - `username`: string
   - `email`: string
   - `phone`: string

4. **Use the `useEffect` hook** to fetch data from the API when the component mounts.

5. **Use the `useState` hook** to store the fetched data. Ensure you type the state to match the user data.

6. **Render the list of users** in a simple HTML table. Each row should display the user's `name`, `username`, `email`, and `phone`.

7. **Verify your component:**
   - Ensure that it correctly fetches the data and handles loading and error states.
   - Confirm that the user data is displayed in a table format.

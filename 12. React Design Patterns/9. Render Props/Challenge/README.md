### Challenge: Create a "Data Fetching" Component Using Render Props

You need to create a reusable `DataFetcher` component that fetches data from an API and passes the data to its child component using the Render Props pattern. The child component will receive the data and can render it however it chooses.

1. **DataFetcher Component**:

   - The `DataFetcher` component should take a URL as a prop and fetch data from that URL.
   - It should use `useEffect` to fetch the data and store it in a state.
   - While the data is being fetched, the component should show a loading spinner or message.
   - Once the data is fetched, the component should pass the data to the child through a render prop.

2. **Render Prop**:

   - The child component receives the data via the render prop and renders it however it wishes.
   - The render prop should be typed, ensuring type safety.

3. **Error Handling**:
   - If there’s an error fetching the data (e.g., network issue, invalid URL), display an error message.

### Expected Output:

1. While the data is being fetched, show a "Loading..." message.
2. Once the data is fetched, render the list of users.
3. If there's an error (e.g., wrong URL or network issue), show an error message.

### **Container Component Challenge**

Your goal is to implement a reusable data-fetching component in React that can fetch data from an external API and provide it to its child components. This should be done with proper error handling, conditional rendering, and flexibility in how data is passed down to child components.

1. **Create a `DataSource` Component**:  
   This component should take a `getDataFunc` prop that will be used to fetch data. The `getDataFunc` function can be asynchronous and will return the data. The `DataSource` component should manage the state for:

   - The fetched data.
   - An error message in case the data fetch fails.

   The component should:

   - Call `getDataFunc` when it mounts and store the fetched data in the state.
   - Display an error message if the data fetch fails.
   - Pass the fetched data down to its children as a prop.
   - The `resourceName` prop should determine the key for the data passed to the child components.

2. **Create a `ProductList` Component**:  
   This component should accept a `products` prop (an array of products) and render a list of product items. Each product should display:

   - Title
   - Description
   - Price
   - Image

   If the `products` prop is `null` or `undefined`, the component should display a loading message.

3. **Inside the `App` Component**:  
   The `App` component should use the `DataSource` component to fetch data from the external API. Use a function that returns the data-fetching promise (for example, using `axios`) and pass this function to the `DataSource` component.

4. **Use the `DataSource` Component with `ProductList`**:  
   Inside `App`, use the `DataSource` component to fetch data from an API endpoint like `https://fakestoreapi.com/products`. Pass the `products` data to the `ProductList` component as a prop.

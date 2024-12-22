## **Challenge: Build a Product Display Application**

### **Challenge 1: Container Component - Build `RenderList`**

Your first challenge is to create a **container component** that can dynamically render a list of items based on the props it receives. In this case, you'll be rendering a list of products.

#### Steps:

1. Create a new component named `RenderList.tsx`.
2. This component should accept the following props:

   - `data`: An array of items (products).
   - `resourceName`: The name of the resource for the items (e.g., `"product"`).
   - `dataToRender`: The component that should be used to render each item (e.g., `ProductInfo`).

3. In the component:

   - Use the `.map()` method to iterate over the `data` array.
   - For each item in the list, pass the individual item to the `dataToRender` component as a prop (using `resourceName` to determine the key).

   **Expected Outcome:**

   - The `RenderList` component should be capable of rendering any array of data passed to it using a dynamic rendering component.

---

### **Challenge 2: Presentational Component - Build `ProductInfo`**

Now, you need to create a **presentational component** that will display the details of each individual product. The goal here is to make the UI clean and reusable for any product object passed to it.

#### Steps:

1. Create a new component named `ProductInfo.tsx`.
2. This component will receive a `product` prop, which is an object containing:

   - `name`: Product name (string)
   - `description`: Product description (string)
   - `price`: Product price (string)
   - `rating`: Product rating (number)
   - `imageUrl`: Product image URL (string)

3. Inside the component:

   - Display the product's `imageUrl` as an image.
   - Display the `name`, `description`, and `price` in styled elements.
   - Render the `rating` as a series of stars (5 stars total). You can use the Unicode star character (`&#9733;`) and fill in the stars based on the rating.

---

### **Challenge 3: Product Data - Use Sample Data Which Is Already Provided**

---

### **Challenge 4: Main App Component - Render Lists for Each Category**

#### Steps:

1. In `App.tsx`, import the `RenderList` component and the data arrays (`electronics`, `clothing`, `homeGoods`).
2. Render the `RenderList` component for each category (electronics, clothing, and homeGoods).

   - For each category, pass the respective data array to the `RenderList` component via the `data` prop.
   - Pass `"product"` as the `resourceName` prop to dynamically pass each product.
   - Pass `ProductInfo` as the `dataToRender` prop to render the individual product details.

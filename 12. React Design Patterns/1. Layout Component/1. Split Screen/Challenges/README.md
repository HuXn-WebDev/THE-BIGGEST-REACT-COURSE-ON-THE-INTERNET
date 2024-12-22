### Challenge: Building a Dashboard Layout with Layout Component

1. **Create the `Header` Component**

   - The `Header` component will contain the dashboard's title and a profile/logout button.
   - Use Tailwind for styling to create a header with a background color and proper alignment.

   **Task:**

   - Create a `Header.tsx` file in the `src/components` folder.
   - Implement the following structure:
     - A header with a background color.
     - A title on the left side ("My Dashboard").
     - A profile button and a logout button aligned to the right.

2. **Create the `Footer` Component**

   - The `Footer` component will be a simple footer with a copyright message.
   - It should be styled to stick at the bottom of the page.

   **Task:**

   - Create a `Footer.tsx` file in the `src/components` folder.
   - Add the text: `&copy; 2025 My Dashboard App`.

3. **Create the `Sidebar` Component**

   - The `Sidebar` component will be a vertical sidebar on the left side.
   - Include a list of links for "Home", "Settings", and "Profile".

   **Task:**

   - Create a `Sidebar.tsx` file in the `src/components` folder.
   - Use Tailwind to style the sidebar with a background color, padding, and a simple list of links.
   - Add hover effects to the links.

4. **Create the `Content` Component**

   - The `Content` component will display the main dashboard content with some stats (e.g., Total Users and Revenue).
   - Use Tailwind CSS grid to layout the stats in two columns.

   **Task:**

   - Create a `Content.tsx` file in the `src/components` folder.
   - Display two stats cards: one for "Total Users" and one for "Revenue".
   - Make the cards visually distinct using Tailwind CSS classes.

5. **Create the `SplitScreen` Component**

   - The `SplitScreen` component will manage the layout between the sidebar and content area.
   - This component should accept two children: the left side (sidebar) and the right side (content). The widths of each side should be controlled through props.

   **Task:**

   - Create a `SplitScreen.tsx` file in the `src/components` folder.
   - The component should accept `children` (two elements), `leftWeight`, and `rightWeight` as props.
   - The widths of the left and right sections should be dynamically set based on the `leftWeight` and `rightWeight` props.

---

### Step 3: Assemble the Layout in `App.tsx`

1. **Import and Use the Components in `App.tsx`**

   - In the `App.tsx` file, import all the components you've created so far: `Header`, `Footer`, `Sidebar`, `Content`, and `SplitScreen`.

   **Task:**

   - Use the `Header` at the top of the page.
   - Use `SplitScreen` to structure the layout, passing the `Sidebar` as the left child and the `Content` as the right child.
   - Set the `leftWeight` to `3` and `rightWeight` to `60` (or adjust as necessary to get the desired layout).
   - Use the `Footer` component at the bottom of the page.

2. **Ensure Responsiveness**

   - Adjust the layout to be responsive. Ensure that the sidebar is properly aligned with the content and doesn't overlap.
   - Use Tailwind's responsive utilities to adjust the layout on different screen sizes.

   **Task:**

   - Ensure the app is responsive. On smaller screens (e.g., mobile), the sidebar should collapse or be hidden, and the content should take up the full width.

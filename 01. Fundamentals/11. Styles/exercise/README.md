### Exercise: Styling Components in React

In this exercise, you'll learn how to apply styles using different methods in React components, including inline styles, style objects, and React icons.

#### Step 1: Create a `StyledCard` Component with Inline Styles

1. Create a new file called `StyledCard.jsx`.
2. Inside this file, create a functional component called `StyledCard`.
3. Use inline styles to style the component:

   - Set the background color to light blue.
   - Set padding to `20px`.
   - Set border radius to `10px`.
   - Set text color to dark blue.

4. Render a `<div>` with a title and description inside it.

#### Step 2: Create a `ProfileCard` Component with Separate Style Object

1. Create a new file called `ProfileCard.jsx`.
2. Inside this file, create a functional component called `ProfileCard`.
3. Define a `styles` object to hold the CSS properties:

   - Set the background color to light gray.
   - Set padding to `15px`.
   - Set border radius to `8px`.
   - Set text color to black.

4. Apply the `styles` object to the `<div>` using the `style` attribute.

5. Render a `<div>` with a title and description inside it.

#### Step 3: Create a `IconComponent` Using React Icons

1. Install `react-icons` if you haven’t already:

   ```bash
   npm install react-icons
   ```

2. Create a new file called `IconComponent.jsx`.
3. Inside this file, create a functional component called `IconComponent`.
4. Import an icon from `react-icons`, such as `FaBeer` from `react-icons/fa`.

5. Style the icon using inline styles:

   - Set the font size to `30px`.
   - Set the color to gold.

6. Render the icon with a title.

#### Step 4: Render All Components in `App.jsx`

1. In your `App.jsx` file, import the `StyledCard`, `ProfileCard`, and `IconComponent` components:

   ```jsx
   import StyledCard from "./StyledCard";
   import ProfileCard from "./ProfileCard";
   import IconComponent from "./IconComponent";
   ```

2. Inside the `App` component, render all three components:

   ```jsx
   function App() {
     return (
       <div>
         <StyledCard />
         <ProfileCard />
         <IconComponent />
       </div>
     );
   }

   export default App;
   ```

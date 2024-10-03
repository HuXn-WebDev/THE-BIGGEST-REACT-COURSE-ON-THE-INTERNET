### Exercise: Conditional Rendering in React

In this exercise, you will practice different ways to render JSX conditionally in React components.

#### Step 1: Create a `Weather` Component with `if`, `else if`, and `else`

1. Create a new file called `Weather.jsx`.
2. Inside this file, create a functional component called `Weather`.
3. The component should:
   - Take a `temperature` prop.
   - Use `if`, `else if`, and `else` statements to conditionally render different messages based on the temperature value:
     - If the temperature is below 15, display: "It's cold outside!"
     - If the temperature is between 15 and 25, display: "It's nice outside!"
     - If the temperature is above 25, display: "It's hot outside!"

#### Step 2: Create a `UserStatus` Component with the `&&` Operator

1. Create a new file called `UserStatus.jsx`.
2. Inside this file, create a functional component called `UserStatus`.
3. The component should:
   - Take two boolean props `loggedIn`, `isAdmin`
   - Use the `&&` operator to display a message for Admin & Normal User:
     - If `loggedIn` is `true` and `isAdmin` display: "Welcome Admin!"
     - If it's just `loggedIn` and not admin then display "Welcome User".

#### Step 3: Create a `Greeting` Component with a Ternary Operator

1. Create a new file called `Greeting.jsx`.
2. Inside this file, create a functional component called `Greeting`.
3. The component should:
   - Take a `timeOfDay` prop (e.g., `"morning"`, `"afternoon"`, or `"evening"`).
   - Use the ternary operator to conditionally display different greetings based on the time of day:
     - If `timeOfDay` is `"morning"`, display: "Good morning!"
     - If `timeOfDay` is `"afternoon"`, display: "Good afternoon!"

#### Step 4: Render the Components in `App.jsx`

1. In your `App.jsx` file, import the `Weather`, `UserStatus`, and `Greeting` components:

   ```jsx
   import Weather from "./Weather";
   import UserStatus from "./UserStatus";
   import Greeting from "./Greeting";
   ```

2. Inside the `App` component, render each component with different props to test the conditional rendering logic.

Example:

```jsx
function App() {
  return (
    <div>
      <h1>Conditional Rendering in React</h1>

      {/* Weather component */}
      <Weather temperature={10} />
      <Weather temperature={20} />
      <Weather temperature={30} />

      {/* UserStatus component */}
      <UserStatus loggedIn={true} />
      <UserStatus loggedIn={false} />

      {/* Greeting component */}
      <Greeting timeOfDay="morning" />
      <Greeting timeOfDay="afternoon" />
      <Greeting />
    </div>
  );
}

export default App;
```

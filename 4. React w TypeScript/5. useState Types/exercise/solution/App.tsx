import { useState } from "react";
import UserProfile from "./components/UserProfile";
import TodoList from "./components/TodoList";

const App = () => {
  // Define a state variable for a counter
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>

      <UserProfile />
      <TodoList />
    </div>
  );
};

export default App;

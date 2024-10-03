import { useState } from "react";

const ExampleOne = () => {
  // Use a function to compute the initial state
  const [count, setCount] = useState(() => {
    // This function will only run on the initial render
    const initialCount = 10;
    return initialCount;
  });

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default ExampleOne;

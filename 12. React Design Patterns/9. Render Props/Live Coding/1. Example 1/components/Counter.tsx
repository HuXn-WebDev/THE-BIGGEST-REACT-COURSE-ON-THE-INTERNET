import { useState } from "react";

function Counter({ render }: any) {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <div>
      <button onClick={increment}>Increment</button>
      {render(count)} {/* Render the count passed from the parent */}
    </div>
  );
}

export default Counter;

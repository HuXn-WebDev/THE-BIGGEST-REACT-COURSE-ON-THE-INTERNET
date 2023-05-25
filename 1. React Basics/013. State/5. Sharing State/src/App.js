import { useState } from "react";
import ComponentTwo from "./ComponentTwo";
import ComponentOne from "./ComponentOne";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <section>
      <ComponentOne count={count} onClickHandler={() => setCount(count + 1)} />
      <ComponentTwo count={count} onClickHandler={() => setCount(count + 1)} />
    </section>
  );
};

export default App;

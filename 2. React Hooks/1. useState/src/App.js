// State can hold any kind of JavaScript value, including objects. But you shouldn’t change objects that you hold in the React state directly. Instead, when you want to update an object, you need to create a new one (or make a copy of an existing one), and then set the state to use that copy.

// First we have to import the useState hook if you wanna use state in functional component.
import { useState } from "react";

const App = () => {
  // --------------------------------------------
  // You can store any kind of JavaScript value in state. 👇
  // const [initalValue, setInitalValue] = useState(0);
  // const [initalValue, setInitalValue] = useState("HuXn");
  // const [initalValue, setInitalValue] = useState(["one", "two", "three"]);
  // const [initalValue, setInitalValue] = useState({
  //   one: "Alex",
  //   two: "John",
  //   three: "HuXn",
  // });
  // --------------------------------------------

  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  return (
    <section>
      <h1>{counter}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </section>
  );
};

export default App;

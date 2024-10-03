// useRef is use to manage any kind of DOM manipulations.
import { useRef } from "react";

function App() {
  const inputElement = useRef(null);

  const focusInput = () => {
    inputElement.current.focus();
    inputElement.current.value = "HuXn";
  };

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={() => focusInput()}>Focus & write HuXn</button>
    </>
  );
}

export default App;

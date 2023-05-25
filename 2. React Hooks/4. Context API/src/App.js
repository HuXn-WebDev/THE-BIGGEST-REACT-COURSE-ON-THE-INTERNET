// 1. Importing (createContext)
import { createContext } from "react";
import ComponentA from "./ComponentA";

// 2. Creating instance of (createContext)
export const Data = createContext();
export const Data1 = createContext();

const App = () => {
  const name = "HuXn";
  const age = 19;

  return (
    <>
      {/* 3. Wrapping our components into Provider component */}
      <Data.Provider value={name}>
        <Data1.Provider value={age}>
          <ComponentA />
        </Data1.Provider>
      </Data.Provider>
    </>
  );
};

export default App;

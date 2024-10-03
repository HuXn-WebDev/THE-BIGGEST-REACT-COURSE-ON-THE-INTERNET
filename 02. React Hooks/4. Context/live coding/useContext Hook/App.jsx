import ComponentA from "./ComponentA";

// 1. Importing (createContext)
import { createContext } from "react";

// 2. Creating instance of (createContext)
export const Data = createContext();
export const Data1 = createContext();

const App = () => {
  const name = "HuXn";
  const Age = 18;

  return (
    <>
      <Data.Provider value={name}>
        <Data1.Provider value={Age}>
          <ComponentA />
        </Data1.Provider>
      </Data.Provider>
    </>
  );
};

export default App;

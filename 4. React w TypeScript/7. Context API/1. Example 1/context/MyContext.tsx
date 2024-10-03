import { createContext, type ReactNode, useState, FC } from "react";

// Define a type for your context data
type MyContextData = {
  value: string;
  setValue: (newValue: string) => void;
};

// Create a context with an initial value
const MyContext = createContext<MyContextData | undefined>(undefined);

// Create a provider component
type MyContextProviderProps = {
  children: ReactNode;
};

export const MyContextProvider: FC<MyContextProviderProps> = ({ children }) => {
  const [value, setValue] = useState<string>("");

  const contextValue: MyContextData = {
    value,
    setValue,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

export default MyContext;

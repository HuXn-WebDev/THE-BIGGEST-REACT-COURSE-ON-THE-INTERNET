import React, { createContext, useState, ReactNode } from "react";

interface RandomNumberContextType {
  num: number[];
  addNumber: (n: number) => void;
}

export const RandomNumberContext = createContext<
  RandomNumberContextType | undefined
>(undefined);

interface NumberProviderProps {
  children: ReactNode;
}

export const NumberProvider: React.FC<NumberProviderProps> = ({ children }) => {
  const [num, setNum] = useState<number[]>([]);

  const addNumber = (n: number) => {
    setNum((prevNum) => [...prevNum, n]);
  };

  return (
    <RandomNumberContext.Provider value={{ num, addNumber }}>
      {children}
    </RandomNumberContext.Provider>
  );
};

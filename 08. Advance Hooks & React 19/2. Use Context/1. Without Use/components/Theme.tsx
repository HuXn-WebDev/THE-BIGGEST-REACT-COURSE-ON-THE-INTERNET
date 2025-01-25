
import { createContext, ReactNode, useContext, useState } from "react";
import Card from "./Card";

type Theme = "light" | "dark"

interface ThemeContextType{
    theme:Theme;
    toggleTheme:()=>void;
}


export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider:React.FC<{children:ReactNode}> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((prevTheme)=>prevTheme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const Theme = () => {
  return (
    <ThemeProvider>
      <Card />
    </ThemeProvider>
  );
};


export const useTheme =():ThemeContextType=>{
    const context =useContext(ThemeContext)
    if(!context){
        throw new Error("useTheme must be provided within a ThemeProvider")
    }

    return context
}

export default Theme;

import { createContext, useState } from "react";

// Create a Context
const UserContext = createContext();

// Create a Provider component
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "John Doe" });

  const updateUser = (newName) => {
    setUser({ name: newName });
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };

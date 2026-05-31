import { createContext, useState } from "react";

export const userContext = createContext();

export const UserContextProvider = (props) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  return (
    <userContext.Provider value={{ user, setUser }}>
      {props.children}
    </userContext.Provider>
  );
};
import { useState } from "react";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState({
    id: 0,
    name: "",
    email: ""
  });

  return (
    <UserContext.Provider
      value={{
        user, setUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

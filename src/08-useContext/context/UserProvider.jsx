import { UserContext } from "./UserContext";

const user = {
  id: 123,
  name: "Gerard",
  email: "gerard@gerardgg.com"
}

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider
      value={{
        hello: "world", user
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

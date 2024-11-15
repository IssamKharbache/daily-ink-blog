import { createContext, useEffect, useState } from "react";
import { lookInLocalStorage } from "../common/session";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [userAuth, setUserAuth] = useState({});

  useEffect(() => {
    let userInStorage = lookInLocalStorage("user");
    if (userInStorage) {
      setUserAuth(JSON.parse(userInStorage));
    } else {
      setUserAuth({ access_token: null });
    }
  }, []);

  return (
    <UserContext.Provider value={{ userAuth, setUserAuth }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;

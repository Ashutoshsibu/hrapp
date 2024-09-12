import React, { createContext, useContext, useEffect, useState } from "react";
const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);
function AuthContext({ children }) {
    const [isLogged, setIsLogged] = useState("sdsds");
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  return (
    <GlobalContext.Provider
      value={{
        isLogged,
        setIsLogged,
        user,
        setUser,
        loading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default AuthContext

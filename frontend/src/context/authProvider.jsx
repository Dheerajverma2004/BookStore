import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();
export default function authProvider({ children }) {
  const initialAuthUser = localStorage.getItem("Users");
  //state management
  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined
  );
  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

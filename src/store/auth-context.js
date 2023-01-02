import React from "react";
import { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {}
})

export function AuthContextProvider (props) {
    const [token, setToken] = useState(null)
    const isLoggedIn = !!token

    const loginHandler = (token) => {
        setToken(token)
      
    }

    const logoutHandler = () => {
        setToken(null)
    }

    const contextValue = {
      token: token,
      isLoggedIn: isLoggedIn,
      login: loginHandler,
      logout: logoutHandler
    }
    return (
        <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
    )
}

export default AuthContext;

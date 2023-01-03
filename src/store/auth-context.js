import React from "react";
import { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  expireTime:0
});

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();

  const remainingTime = adjExpirationTime - currentTime;
  return remainingTime;
};

export function AuthContextProvider(props) {
  const intialToken = localStorage.getItem("token");
  const [token, setToken] = useState(intialToken);
  const [expireTime, setExpireTime] = useState(0)
  const isLoggedIn = !!token; 

  const loginHandler = (token, expirationTime) => {
    const remainingTime = calculateRemainingTime(expirationTime);
    setToken(token);
    localStorage.setItem("token", token);
    setExpireTime(remainingTime)
    setTimeout(logoutHandler, remainingTime);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const contextValue = {
    token: token,
    isLoggedIn: isLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    expireTime: expireTime,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;

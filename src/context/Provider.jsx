import React, { createContext, useReducer } from "react";

import AuthReducer from "./reducers/auth.reducer";

const loginInitState = {
  message: null,
  loggedIn: !!localStorage.getItem("token"),
  loading: false,
  username: localStorage.getItem("username"),
};

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [loginState, loginDispatch] = useReducer(AuthReducer, loginInitState);

  return (
    <GlobalContext.Provider
      value={{
        loginState,
        loginDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

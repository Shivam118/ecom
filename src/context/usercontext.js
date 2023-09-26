import React, { createContext, useContext } from "react";
import { useReducer } from "react";
import reducer from "../reducer/userReducer";

const UserContext = createContext();

const initialState = {
  user: {
    name: "",
  },
  login: {
    email: "",
    password: "",
  },
  signup: {
    name: "",
    email: "",
    password: "",
  },
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const set = (token) => {
    localStorage.setItem("authToken", token);
  };

  const onChangeLogin = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "ON_CHANGE_LOGIN", payload: { name, value } });
  };

  const onChangeSignup = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "ON_CHANGE_SIGNUP", payload: { name, value } });
  };

  const SubmitLogin = async () => {
    console.log(state);
    if (
      state.login.email === "test@test.com" &&
      state.login.password === "Test@12345"
    ) {
      set("12345");
    }
  };

  const SubmitSignUp = async () => {};

  const getUser = async () => {};

  return (
    <UserContext.Provider
      value={{
        ...state,
        set,
        onChangeLogin,
        onChangeSignup,
        SubmitLogin,
        SubmitSignUp,
        getUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};

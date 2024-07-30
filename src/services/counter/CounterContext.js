import { Children, createContext, useState } from "react";

export const CounterContextConsumer = createContext();

export const CounterContextProvider = ({ children }) => {
  const [userName, setUserName] = useState("Vijay");

  return (
    <CounterContextConsumer.Provider
      value={{
        userName,
        setUserName,
      }}
    >
      {children}
    </CounterContextConsumer.Provider>
  );
};

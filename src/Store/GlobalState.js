import React, { useReducer } from "react";
import { reducer } from "./Reducer";

export const store = React.createContext();
export const GlobalState = (props) => {
  const [StateData, dispatchData] = useReducer(reducer, {
    item: [],
    total: 0,
    add: () => {},
    remove: () => {},
  });
  return (
    <store.Provider value={{ StateData, dispatchData }}>
      {props.children}
    </store.Provider>
  );
};

import { createContext, useReducer } from "react";
import initialState from "./InitialState";
import reducers from "../Reducers";
import actionss from "../Actions";

export const StateContext = createContext(initialState);

const State = (props) => {
  const [state, dispatch] = useReducer(reducers, initialState);
  const actions = actionss(dispatch, state, props);

  return (
    <StateContext.Provider value={{ actions, state }}>
      {props.children}
    </StateContext.Provider>
  );
};

export default State;

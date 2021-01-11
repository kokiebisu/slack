import * as React from "react";
import { createContext, useReducer, useContext } from "react";

type Dispatch = (action: Action) => void;
type Action = { type: "toggle_skip" };

type State = {
  skip: boolean;
};
type ToggleProviderProps = { children: React.ReactNode };

const ToggleStateContext = createContext<State | undefined>(undefined);
const ToggleDispatchContext = createContext<Dispatch | undefined>(undefined);

const toggleReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "toggle_skip":
      return { ...state, skip: !state.skip };
    default:
      return state;
  }
};

const ToggleProvider = ({ children }: ToggleProviderProps) => {
  const [state, dispatch] = useReducer(toggleReducer, {
    skip: false,
  });
  return (
    <ToggleStateContext.Provider value={state}>
      <ToggleDispatchContext.Provider value={dispatch}>
        {children}
      </ToggleDispatchContext.Provider>
    </ToggleStateContext.Provider>
  );
};

const useToggleState = () => {
  const context = useContext(ToggleStateContext);
  if (!context) {
    throw new Error("useToggleState must be used within a NewTeamProvider");
  }
  return context;
};

const useToggleDispatch = () => {
  const context = useContext(ToggleDispatchContext);
  if (!context) {
    throw new Error("useToggleDispatch must be used within a NewTeamProvider");
  }
  return context;
};

export { useToggleDispatch, useToggleState, ToggleProvider };

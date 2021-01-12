import * as React from "react";
import { createContext, useReducer, useContext } from "react";

type Dispatch = (action: Action) => void;
type Action = { type: "select_channel" };

type State = {
  selected: string;
};
type ClientProviderProps = { children: React.ReactNode };

const ClientStateContext = createContext<State | undefined>(undefined);
const ClientDispatchContext = createContext<Dispatch | undefined>(undefined);

const clientReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "select_channel":
      return { ...state, selected: "channel" };
    default:
      return state;
  }
};

const ClientProvider = ({ children }: ClientProviderProps) => {
  const [state, dispatch] = useReducer(clientReducer, {
    selected: "channel",
  });
  return (
    <ClientStateContext.Provider value={state}>
      <ClientDispatchContext.Provider value={dispatch}>
        {children}
      </ClientDispatchContext.Provider>
    </ClientStateContext.Provider>
  );
};

const useClientState = () => {
  const context = useContext(ClientStateContext);
  if (!context) {
    throw new Error("useClientState must be used within a ClientProvider");
  }
  return context;
};

const useClientDispatch = () => {
  const context = useContext(ClientDispatchContext);
  if (!context) {
    throw new Error("useClientDispatch must be used within a ClientProvider");
  }
  return context;
};

export { useClientDispatch, useClientState, ClientProvider };

import * as React from 'react';
import { createContext, useReducer, useContext } from 'react';

type Dispatch = (action: Action) => void;
type Action =
  | { type: 'add_team'; payload: string }
  | { type: 'add_teamid'; payload: string }
  | { type: 'add_channel'; payload: string };
type State = { team: string; teamid: string; channel: string };
type ClientProviderProps = { children: React.ReactNode };

const ClientStateContext = createContext<State | undefined>(undefined);
const ClientDispatchContext = createContext<Dispatch | undefined>(undefined);

const clientReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'add_team':
      return { ...state, team: action.payload };
    case 'add_teamid':
      return { ...state, teamid: action.payload };
    case 'add_channel':
      return { ...state, channel: action.payload };
    default:
      return state;
  }
};

const ClientProvider = ({ children }: ClientProviderProps) => {
  const [state, dispatch] = useReducer(clientReducer, {
    team: '',
    teamid: '',
    channel: '',
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
    throw new Error('useClientState must be used within a NewTeamProvider');
  }
  return context;
};

const useClientDispatch = () => {
  const context = useContext(ClientDispatchContext);
  if (!context) {
    throw new Error('useClientDispatch must be used within a NewTeamProvider');
  }
  return context;
};

export { ClientProvider, useClientState, useClientDispatch };

import * as React from 'react';
import { createContext, useReducer, useContext } from 'react';

type Dispatch = (action: Action) => void;
type Action =
  | { type: 'add_team'; payload: string }
  | { type: 'add_channel'; payload: string };
type State = { team: string; channel: string };
type NewTeamProviderProps = { children: React.ReactNode };

const NewTeamStateContext = createContext<State | undefined>(undefined);
const NewTeamDispatchContext = createContext<Dispatch | undefined>(undefined);

const newTeamReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'add_team':
      return { ...state, team: action.payload };
    case 'add_channel':
      return { ...state, channel: action.payload };
    default:
      return state;
  }
};

const NewTeamProvider = ({ children }: NewTeamProviderProps) => {
  const [state, dispatch] = useReducer(newTeamReducer, {
    team: '',
    channel: '',
  });

  return (
    <NewTeamStateContext.Provider value={state}>
      <NewTeamDispatchContext.Provider value={dispatch}>
        {children}
      </NewTeamDispatchContext.Provider>
    </NewTeamStateContext.Provider>
  );
};

const useNewTeamState = () => {
  const context = useContext(NewTeamStateContext);
  if (!context) {
    throw new Error('useNewTeamState must be used within a NewTeamProvider');
  }
  return context;
};

const useNewTeamDispatch = () => {
  const context = useContext(NewTeamDispatchContext);
  if (!context) {
    throw new Error('useNewTeamDispatch must be used within a NewTeamProvider');
  }
  return context;
};

export { NewTeamProvider, useNewTeamState, useNewTeamDispatch };

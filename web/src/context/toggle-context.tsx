import * as React from 'react';
import { createContext, useReducer, useContext } from 'react';

type Dispatch = (action: Action) => void;
type Action =
  | { type: 'toggle_menu' }
  | {
      type: 'toggle_channel';
    }
  | {
      type: 'toggle_invite';
    }
  | {
      type: 'toggle_landing';
    };

type State = {
  menu: boolean;
  channel: boolean;
  invite: boolean;
  landing: boolean;
};
type ToggleProviderProps = { children: React.ReactNode };

const ToggleStateContext = createContext<State | undefined>(undefined);
const ToggleDispatchContext = createContext<Dispatch | undefined>(undefined);

const toggleReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'toggle_menu':
      return { ...state, menu: !state.menu };
    case 'toggle_channel':
      return {
        ...state,
        channel: !state.channel,
      };
    case 'toggle_invite':
      return {
        ...state,
        invite: !state.invite,
      };
    case 'toggle_landing':
      return {
        ...state,
        landing: !state.landing,
      };
    default:
      return state;
  }
};

const ToggleProvider = ({ children }: ToggleProviderProps) => {
  const [state, dispatch] = useReducer(toggleReducer, {
    menu: false,
    channel: false,
    invite: false,
    landing: false,
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
    throw new Error('useToggleState must be used within a NewTeamProvider');
  }
  return context;
};

const useToggleDispatch = () => {
  const context = useContext(ToggleDispatchContext);
  if (!context) {
    throw new Error('useToggleDispatch must be used within a NewTeamProvider');
  }
  return context;
};

export { useToggleDispatch, useToggleState, ToggleProvider };

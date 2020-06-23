import { Dispatch } from 'react';

export type Action =
  | { type: 'add_fullname'; payload: string }
  | { type: 'add_email'; payload: string }
  | { type: 'add_password'; payload: string }
  | { type: 'add_errorlog'; payload: string }
  | { type: 'loading' };

export type State = {
  fullname: string;
  email?: string;
  password: string;
  errorlog: string;
  loading: boolean;
};

export const inputReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'add_fullname':
      return { ...state, fullname: action.payload };
    case 'add_email':
      return { ...state, fullname: action.payload };
    case 'add_password':
      return { ...state, password: action.payload };
    case 'add_errorlog':
      return { ...state, errorlog: action.payload };
    case 'loading':
      return { ...state, loading: !state.loading };
    default:
      return state;
  }
};

export interface Props {
  fullname: string;
  email?: string;
  password: string;
  modifyFullname: Dispatch<Action>;
  modifyEmail?: Dispatch<Action>;
  modifyPassword: Dispatch<Action>;
  invite?: boolean;
}

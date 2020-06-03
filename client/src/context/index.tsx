import * as React from 'react';
import { NewTeamProvider } from './newTeam-context';

interface Props {
  children: React.ReactNode;
}

export const ContextProvider = ({ children }: Props) => {
  return <NewTeamProvider>{children}</NewTeamProvider>;
};

import * as React from 'react';

// Context Providers
import { ToggleProvider } from 'context/toggle-context';

interface Props {
  children: React.ReactNode;
}

export const ContextProvider = ({ children }: Props) => {
  return <ToggleProvider>{children}</ToggleProvider>;
};

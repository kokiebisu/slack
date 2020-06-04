import * as React from 'react';

// Context Providers
import { ClientProvider } from './client-context';

interface Props {
  children: React.ReactNode;
}

export const ContextProvider = ({ children }: Props) => {
  return <ClientProvider>{children}</ClientProvider>;
};

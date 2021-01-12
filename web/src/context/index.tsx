import * as React from "react";

// Context Providers
import { ToggleProvider } from "context/toggle-context";
import { ClientProvider } from "./client-context";

interface Props {
  children: React.ReactNode;
}

export const ContextProvider = ({ children }: Props) => {
  return (
    <ClientProvider>
      <ToggleProvider>{children}</ToggleProvider>
    </ClientProvider>
  );
};

import React from "react";

/** variants */

import { GetStartedLayout } from "./layout.getstarted";
import { WorkspaceLayout } from "./layout.workspace";

export interface LayoutProps {
  variant: string;
  [property: string]: any;
}

export const Layout: React.FC<LayoutProps> = ({ variant, ...props }) => {
  const variants: { [variant: string]: JSX.Element } = {
    workspace: <WorkspaceLayout {...props} />,
    getstarted: <GetStartedLayout {...props} />,
  };
  return (
    <div style={{ height: "100vh" }} data-testid={`${variant}-layout`}>
      {variants[variant]}
    </div>
  );
};

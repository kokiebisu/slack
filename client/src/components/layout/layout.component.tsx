import React from "react";

/** variants */
import { CenterLayout } from "./layout.center";
import { GetStartedLayout } from "./layout.getstarted";
import { WorkspaceLayout } from "./layout.workspace";

export interface LayoutProps {
  variant?: string;
  [property: string]: any;
}

export const Layout: React.FC<LayoutProps> = ({
  variant = "center",
  ...props
}) => {
  const variants = {
    center: <CenterLayout {...props} />,
    workspace: <WorkspaceLayout {...props} />,
    getstarted: <GetStartedLayout {...props} />,
  };
  return <div data-testid={`${variant}-layout`}>{variants[variant]}</div>;
};

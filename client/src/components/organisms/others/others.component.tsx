import React from "react";
import { WorkspaceOthers } from "./others.workspace";

export interface OthersProps {
  variant?: string;
  [property: string]: any;
}

export const Others: React.FC<OthersProps> = ({
  variant = "workspace",
  ...props
}) => {
  const variants = {
    workspace: <WorkspaceOthers {...props} />,
  };
  return <div data-testid={`${variant}-others`}>{variants[variant]}</div>;
};

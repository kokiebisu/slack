import React from "react";

/** variants */
import { LandingHeader } from "components/organisms/header/header.landing";
import { CreateHeader } from "components/organisms/header/header.create";
import { SignInHeader } from "components/organisms/header/header.signin";
import { WorkspaceHeader } from "components/organisms/header/header.workspace";

export interface HeaderProps {
  variant?: string;
  [x: string]: any;
}

export const Header: React.FC<HeaderProps> = ({
  variant = "landing",
  ...props
}) => {
  const variants = {
    landing: <LandingHeader {...props} />,
    create: <CreateHeader {...props} />,
    signin: <SignInHeader {...props} />,
    workspace: <WorkspaceHeader {...props} />,
  };
  return <div>{variants[variant]}</div>;
};

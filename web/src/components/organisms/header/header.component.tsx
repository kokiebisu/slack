import React from "react";

/** variants */
import { LandingHeader } from "components/organisms/header/header.landing";
import { CreateHeader } from "components/organisms/header/header.create";
import { SignInHeader } from "components/organisms/header/header.signin";
import { WorkspaceHeader } from "components/organisms/header/header.workspace";
import { FindHeader } from "./header.find";

export interface HeaderProps {
  variant: string;
  [property: string]: any;
}

export const Header: React.FC<HeaderProps> = ({ variant, ...props }) => {
  const variants: { [variant: string]: JSX.Element } = {
    landing: <LandingHeader {...props} />,
    create: <CreateHeader {...props} />,
    signin: <SignInHeader {...props} />,
    workspace: <WorkspaceHeader {...props} />,
    find: <FindHeader {...props} />,
  };
  return <div data-testid={`${variant}-header`}>{variants[variant]}</div>;
};

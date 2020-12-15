import React from "react";

/** variants */
import { LandingHeader } from "components/organisms/header/header.landing";
import { CreateHeader } from "components/organisms/header/header.create";
import { SignInHeader } from "components/organisms/header/header.signin";
import { WorkspaceHeader } from "components/organisms/header/header.workspace";
import { FindHeader } from "./header.find";

export const Header: React.FC<{ variant?: string; [x: string]: any }> = ({
  variant = "landing",
  ...props
}) => {
  const variants = {
    landing: <LandingHeader {...props} />,
    create: <CreateHeader {...props} />,
    signin: <SignInHeader {...props} />,
    workspace: <WorkspaceHeader {...props} />,
    find: <FindHeader {...props} />,
  };
  return <div data-testid={`${variant}-header`}>{variants[variant]}</div>;
};

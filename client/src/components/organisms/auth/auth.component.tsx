import React from "react";

import * as b from "global/blocks";

/** variants */
import { SignInAuth } from "./auth.signin";
import { GetStartedAuth } from "./auth.getstarted";
import { SignUpAuth } from "./auth.signup";
import { FindAuth } from "./auth.find";
import { ConfirmAuth } from "./auth.confirm";
import { InvitedAuth } from "./auth.invited";
import { WorkspacesAuth } from "./auth.workspaces";

export interface AuthProps {
  variant?: string;
  extendsTo?: any;
  [property: string]: any;
}

export const Auth: React.FC<AuthProps> = ({
  variant = "signin",
  extendsTo,
  width,
  ...props
}) => {
  const variants = {
    signin: <SignInAuth {...props} />,
    getstarted: <GetStartedAuth {...props} />,
    signup: <SignUpAuth {...props} />,
    find: <FindAuth {...props} />,
    confirm: <ConfirmAuth {...props} />,
    invited: <InvitedAuth {...props} />,
    workspaces: <WorkspacesAuth {...props} />,
  };
  return (
    <b.Box data-testid={`${variant}-auth`} style={extendsTo} width={width}>
      {variants[variant]}
    </b.Box>
  );
};

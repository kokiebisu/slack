import React from "react";

/** variants */
import { SignInAuth } from "./auth.signin";
import { GetStartedAuth } from "./auth.getstarted";
import { SignUpAuth } from "./auth.signup";
import { FindAuth } from "./auth.find";
import { ConfirmAuth } from "./auth.confirm";
import { InvitedAuth } from "./auth.invited";

export interface AuthProps {
  variant?: string;
  extendsTo?: any;
  [property: string]: any;
}

export const Auth: React.FC<AuthProps> = ({
  variant = "signin",
  extendsTo,
  ...props
}) => {
  const variants = {
    signin: <SignInAuth {...props} />,
    getstarted: <GetStartedAuth {...props} />,
    signup: <SignUpAuth {...props} />,
    find: <FindAuth {...props} />,
    confirm: <ConfirmAuth {...props} />,
    invited: <InvitedAuth {...props} />,
  };
  return (
    <div data-testid={`${variant}-auth`} style={extendsTo}>
      {variants[variant]}
    </div>
  );
};

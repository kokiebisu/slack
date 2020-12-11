import React from "react";

/** variants */
import { SignInAuth } from "./auth.signin";

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
  };
  return (
    <div data-testid={`${variant}-auth`} style={extendsTo}>
      {variants[variant]}
    </div>
  );
};

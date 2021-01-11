import React from "react";
import { EmailDialog } from "./dialog.email";

/** variants */
import { ErrorDialog } from "./dialog.error";
import { PasswordDialog } from "./dialog.password";

export interface DialogProps {
  variant?: string;
  [property: string]: any;
}

export const Dialog: React.FC<DialogProps> = ({
  variant = "error",
  ...props
}) => {
  const variants: { [variant: string]: JSX.Element } = {
    error: <ErrorDialog {...props} />,
    password: <PasswordDialog {...props} />,
    email: <EmailDialog {...props} />,
  };
  return <div data-testid={`${variant}-dialog`}>{variants[variant]}</div>;
};

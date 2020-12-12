import React from "react";

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
  const variants = {
    error: <ErrorDialog {...props} />,
    password: <PasswordDialog {...props} />,
  };
  return <div data-testid={`${variant}-dialog`}>{variants[variant]}</div>;
};

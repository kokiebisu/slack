import React from "react";
import { PasswordInput } from "./input.password";

/** variants */
import { PlainInput } from "./input.plain";

export interface InputProps {
  variant?: string;
  extendsTo?: any;
  [property: string]: any;
}

export const Input: React.FC<InputProps> = ({
  variant = "plain",
  extendsTo,
  ...props
}) => {
  const variants = {
    plain: <PlainInput {...props} />,
    password: <PasswordInput {...props} />,
  };
  return (
    <div data-testid={`${variant}-input`} style={extendsTo}>
      {variants[variant]}
    </div>
  );
};

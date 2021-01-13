import React from "react";

import { ModalInput } from "./input.modal";
import { PasswordInput } from "./input.password";
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
  const variants: { [property: string]: any } = {
    plain: <PlainInput {...props} />,
    password: <PasswordInput {...props} />,
    modal: <ModalInput {...props} />,
  };
  return (
    <div data-testid={`${variant}-input`} style={extendsTo}>
      {variants[variant]}
    </div>
  );
};

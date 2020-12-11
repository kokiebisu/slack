import React from "react";

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
  };
  return <div data-testid={`${variant}-input`}>{variants[variant]}</div>;
};

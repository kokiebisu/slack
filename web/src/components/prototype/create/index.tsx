import React from "react";
import { NameCreate } from "./create.name";

export interface PrototypeInterface {
  variant: string;
  [property: string]: any;
}

export const Prototype: React.FC<PrototypeInterface> = ({ variant, ...props }) => {
  const variants: { [variant: string]: any } = {
    name: <NameCreate />,
  };

  return variants[variant];
};

import React from "react";
import { SwitchToggle } from "./toggle.switch";
import { MenuToggle } from "./toggle.menu";

export interface ToggleProps {
  variant: string;
  [property: string]: any;
}

export const Toggle: React.FC<ToggleProps> = ({ variant, ...props }) => {
  const variants: { [variant: string]: JSX.Element } = {
    switch: <SwitchToggle {...props} />,
    menu: <MenuToggle {...props} />,
  };
  return variants[variant];
};

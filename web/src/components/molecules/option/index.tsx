import React from "react";
import { MenuOption } from "./option.menu";
import { ProfileOption } from "./option.profile";
import { StatusOption } from "./option.status";

export const Option: React.FC<{
  variant: string;
  [property: string]: any;
}> = ({ variant, ...props }) => {
  const variants: { [variant: string]: JSX.Element } = {
    profile: <ProfileOption {...props} />,
    menu: <MenuOption {...props} />,
    status: <StatusOption {...props} />,
  };

  return <div>{variants[variant]}</div>;
};

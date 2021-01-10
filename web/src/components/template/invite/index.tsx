import React from "react";

import { AfterInvite } from "./invite.after";
import { BeforeInvite } from "./invite.before";

export const Template: React.FC<{
  variant: string;
  [property: string]: any;
}> = ({ variant, ...props }) => {
  const variants: { [variant: string]: JSX.Element } = {
    after: <AfterInvite {...props} />,
    before: <BeforeInvite {...props} />,
  };
  return <div>{variants[variant]}</div>;
};

import React from "react";

import * as b from "../../../global/blocks";

/** variants */
import { SignUpAuth } from "./auth.signup";
import { FindAuth } from "./auth.find";
import { InvitedAuth } from "./auth.invited";
import { WorkspacesAuth } from "./auth.workspaces";
import { css } from "styled-components";

export interface PrototypeProps {
  variant: string;
  extendsTo?: any;
  [property: string]: any;
}

export const Prototype: React.FC<PrototypeProps> = ({
  variant = "signin",
  extendsTo,
  width,
  ...props
}) => {
  const variants: {
    [variant: string]: {
      component: JSX.Element;
      [property: string]: any;
    };
  } = {
    signup: {
      component: <SignUpAuth {...props} />,
    },
    find: {
      component: <FindAuth {...props} />,
    },
    invited: {
      component: <InvitedAuth {...props} />,
    },
    workspaces: {
      component: <WorkspacesAuth {...props} />,
    },
  };
  return (
    <b.Box
      data-testid={`${variant}-auth`}
      extends={variants[variant].extendsTo}
      style={extendsTo}
      width={width}
    >
      {variants[variant].component}
    </b.Box>
  );
};

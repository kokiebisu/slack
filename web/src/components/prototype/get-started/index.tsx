import React from "react";
import * as b from "global/blocks";
import { css } from "styled-components";
import { CreateGetStarted } from "./getstarted.create";
import { ConfirmDigitGetStarted } from "./getstarted.confirmdigit";

export interface PrototypeProps {
  variant: string;
  extendsTo?: any;
  [property: string]: any;
}

export const Prototype: React.FC<PrototypeProps> = ({
  variant,
  extendsTo,
  ...props
}) => {
  const variants: {
    [variant: string]: { component: JSX.Element; extendsTo: any };
  } = {
    create: {
      component: <CreateGetStarted {...props} />,
      extendsTo: css`
        max-width: 400px;
      `,
    },
    confirmdigit: {
      component: <ConfirmDigitGetStarted {...props} />,
      extendsTo: css`
        max-width: 700px;
      `,
    },
  };
  return (
    <b.Box
      data-testid={`${variant}-getstarted`}
      extends={variants[variant].extendsTo}
      style={extendsTo}
    >
      {variants[variant].component}
    </b.Box>
  );
};

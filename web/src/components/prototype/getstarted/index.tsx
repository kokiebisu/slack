import React from "react";
import * as b from "global/blocks";
import { css } from "styled-components";
import { CreateGetStarted } from "./getstarted.create";
import { ConfirmDigitGetStarted } from "./getstarted.confirmdigit";

export const Prototype: React.FC<{
  variant: string;
  extendsTo?: any;
  [property: string]: any;
}> = ({ variant, extendsTo, ...props }) => {
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

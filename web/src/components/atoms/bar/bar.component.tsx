import React from "react";
import * as b from "global/blocks";

/** variants */
import { ValidationBar } from "./bar.validation";

export interface BarProps {
  variant?: string;
  [property: string]: any;
}

export const Bar: React.FC<BarProps> = ({
  variant = "validation",
  ...props
}) => {
  const variants: { [variant: string]: any } = {
    validation: <ValidationBar {...props} />,
  };
  return <b.Box data-testid={`${variant}-bar`}>{variants[variant]}</b.Box>;
};

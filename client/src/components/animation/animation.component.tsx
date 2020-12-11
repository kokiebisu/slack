import React from "react";

/** variants */
import { LoadingAnimation } from "./animation.loading";

export interface AnimationProps {
  variant?: string;
  extendsTo?: {
    [value: string]: string;
  };
  [x: string]: any;
}

export const Animation: React.FC<AnimationProps> = ({
  variant = "loading",
  extendsTo,
  ...props
}) => {
  const variants = {
    loading: <div>animation</div>,
  };
  return <div data-testid={`${variant}-animation`}>{variants[variant]}</div>;
};

import React from "react";

/** variants */
import { ChoosePrototype } from "./landing.choose";
import { SoftwarePrototype } from "./landing.software";
import { TogetherPrototype } from "./landing.together";
import { BannerPrototype } from "./landing.banner";

export interface PrototypeProps {
  variant?: string;
  [x: string]: any;
}

export const Prototype: React.FC<PrototypeProps> = ({
  variant = "together",
  ...props
}) => {
  const variants = {
    together: <TogetherPrototype {...props} />,
    software: <SoftwarePrototype {...props} />,
    choose: <ChoosePrototype {...props} />,
    banner: <BannerPrototype {...props} />,
  };
  return <div data-testid={`landing--${variant}`}>{variants[variant]}</div>;
};

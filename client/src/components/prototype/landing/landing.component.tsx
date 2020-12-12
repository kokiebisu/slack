import React from "react";

/**
 * Templates
 */
import { ChooseTemplate } from "./landing.choose";
import { SoftwareTemplate } from "./landing.software";
import { TogetherTemplate } from "./landing.together";

export interface PrototypeTemplate {
  variant?: string;
  [x: string]: any;
}

export const Prototype: React.FC<TemplateProps> = ({
  variant = "together",
  ...props
}) => {
  const variants = {
    together: <TogetherTemplate {...props} />,
    software: <SoftwareTemplate {...props} />,
    choose: <ChooseTemplate {...props} />,
  };
  return <div>{variants[variant]}</div>;
};

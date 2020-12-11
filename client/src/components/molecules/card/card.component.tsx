import React from "react";

/** variants */
import { LaunchCard } from "./card.launch";
import { PolicyCard } from "./card.policy";

export interface CardProps {
  variant?: string;
  [x: string]: any;
}

export const Card: React.FC<CardProps> = ({ variant = "launch", ...props }) => {
  const variants = {
    launch: <LaunchCard {...props} />,
    policy: <PolicyCard {...props} />,
  };
  return <div data-testid={`${variant}-card`}>{variants[variant]}</div>;
};

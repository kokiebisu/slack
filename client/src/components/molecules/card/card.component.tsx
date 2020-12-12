import React from "react";

/** variants */
import { LaunchCard } from "./card.launch";
import { PolicyCard } from "./card.policy";
import { AvailableCard } from "./card.available";

export interface CardProps {
  variant?: string;
  [x: string]: any;
}

export const Card: React.FC<CardProps> = ({ variant = "launch", ...props }) => {
  const variants = {
    launch: <LaunchCard {...props} />,
    policy: <PolicyCard {...props} />,
    available: <AvailableCard {...props} />,
  };
  return <div data-testid={`${variant}-card`}>{variants[variant]}</div>;
};

import React from "react";

/** variants */

import { AvailableCard } from "./card.available";
import { ActivityCard } from "./card.activity";
import { MessageCard } from "./card.message";

export interface CardProps {
  variant?: string;
  [x: string]: any;
}

export const Card: React.FC<CardProps> = ({ variant = "launch", ...props }) => {
  const variants = {
    available: <AvailableCard {...props} />,
    activity: <ActivityCard {...props} />,
    message: <MessageCard {...props} />,
  };
  return <div data-testid={`${variant}-card`}>{variants[variant]}</div>;
};

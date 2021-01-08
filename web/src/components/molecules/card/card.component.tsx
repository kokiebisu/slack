import React from "react";

/** variants */

import { AvailableCard } from "./card.available";
import { ActivityCard } from "./card.activity";
import { MessageCard } from "./card.message";

export interface CardProps {
  variant?: string;
  extendsTo?: any;
  [x: string]: any;
}

export const Card: React.FC<CardProps> = ({
  variant = "launch",
  extendsTo,
  ...props
}) => {
  const variants = {
    available: <AvailableCard {...props} />,
    activity: <ActivityCard {...props} />,
    message: <MessageCard {...props} />,
  };
  return (
    <div data-testid={`${variant}-card`} style={{ ...extendsTo }}>
      {variants[variant]}
    </div>
  );
};

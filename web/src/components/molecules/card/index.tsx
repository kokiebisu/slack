import React from "react";

import { AvailableCard } from "./card.available";
import { ActivityCard } from "./card.activity";
import { MessageCard } from "./card.message";

export interface CardProps {
  variant: string;
  extendsTo?: any;
  [property: string]: any;
}

export const Card: React.FC<CardProps> = ({ variant, extendsTo, ...props }) => {
  const variants: { [variant: string]: JSX.Element } = {
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

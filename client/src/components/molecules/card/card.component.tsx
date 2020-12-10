import React from 'react';

/**
 * Components
 */
import { LaunchCard } from './card.launch';
import { PolicyCard } from './card.policy';

/**
 * Props
 */
import { CardProps } from './props';

export const Card: React.FC<CardProps> = ({ type = 'launch', ...props }) => {
  const types = {
    launch: <LaunchCard {...props} />,
    policy: <PolicyCard {...props} />,
  };
  return types[type];
};

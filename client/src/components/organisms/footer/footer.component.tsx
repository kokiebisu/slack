import React from 'react';
import { LandingFooter } from './footer.landing';
import { FooterProps } from './props';

export const Footer: React.FC<FooterProps> = ({
  type = 'landing',
  ...props
}) => {
  const types = {
    landing: <LandingFooter {...props} />,
  };
  return types[type];
};

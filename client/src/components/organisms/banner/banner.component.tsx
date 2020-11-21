import React from 'react';
import { LandingBanner } from './banner.landing';
import { BannerProps } from './props';

export const Banner: React.FC<BannerProps> = ({
  type = 'landing',
  ...props
}) => {
  const types = {
    landing: <LandingBanner {...props} />,
  };
  return types[type];
};

import React from 'react';

/**
 * Components
 */
import { LandingBanner } from './banner.landing';

/**
 * Props
 */
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

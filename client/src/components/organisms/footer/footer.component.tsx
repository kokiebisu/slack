import React from 'react';

/**
 * Components
 */
import { SignInFooter } from 'components/organisms/footer/footer.signin';
import { LandingFooter } from 'components/organisms/footer/footer.landing';

/**
 * Props
 */
import { FooterProps } from './props';

export const Footer: React.FC<FooterProps> = ({
  type = 'landing',
  ...props
}) => {
  const types = {
    landing: <LandingFooter {...props} />,
    signin: <SignInFooter {...props} />,
  };
  return types[type];
};

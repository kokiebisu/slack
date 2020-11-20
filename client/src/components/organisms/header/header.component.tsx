import React from 'react';
import { LandingHeader } from './header.landing';
import { HeaderProps } from './props';

export const Header: React.FC<HeaderProps> = ({
  type = 'landing',
  ...props
}) => {
  const types = {
    landing: <LandingHeader {...props} />,
  };
  return <div>{types[type]}</div>;
};

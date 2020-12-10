import React from 'react';

/**
 * Components
 */
import { LandingHeader } from 'components/organisms/header/header.landing';
import { CreateHeader } from './header.create';

/**
 * Props
 */
import { HeaderProps } from './props';

export const Header: React.FC<HeaderProps> = ({
  type = 'landing',
  ...props
}) => {
  const types = {
    landing: <LandingHeader {...props} />,
    create: <CreateHeader {...props} />,
  };
  return <div>{types[type]}</div>;
};

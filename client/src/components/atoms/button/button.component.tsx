import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

/**
 * Components
 */
import { PrimaryButton } from './button.primary';
import { NavButton } from './button.nav';
import { TransparentButton } from './button.transparent';
import { HamburgerButton } from './button.hamburger';
import { SocialMediaButton } from './button.socialmedia';

/**
 * Props
 */
import { ButtonProps } from './props';

export const Button: React.FC<ButtonProps> = ({ to, type, ...props }) => {
  const types = {
    primary: <PrimaryButton {...props} />,
    nav: <NavButton {...props} />,
    transparent: <TransparentButton {...props} />,
    hamburger: <HamburgerButton {...props} />,
    socialmedia: <SocialMediaButton {...props} />,
  };
  if (to) {
    return <Link to={to}>{types[type]}</Link>;
  }
  return <motion.div>{types[type]}</motion.div>;
};

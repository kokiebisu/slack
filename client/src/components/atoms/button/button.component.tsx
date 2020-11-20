import React from 'react';
import { Link } from 'react-router-dom';
import { PrimaryButton } from './button.primary';
import { ButtonProps } from './props';
import { motion } from 'framer-motion';

export const Button: React.FC<ButtonProps> = ({ to, type, ...props }) => {
  const types = {
    primary: <PrimaryButton {...props} />,
  };
  if (to) {
    return <Link to={to}>{types[type]}</Link>;
  }
  return <motion.div>{types[type]}</motion.div>;
};

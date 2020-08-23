import React from 'react';
import { motion } from 'framer-motion';
import { ElementProps } from 'atoms';

export interface BoxProps extends ElementProps {}

export const Box: React.FC<BoxProps> = ({ children, className, ...props }) => (
  <motion.div className={className} {...props}>
    {children}
  </motion.div>
);

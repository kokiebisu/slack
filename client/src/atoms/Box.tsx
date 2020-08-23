import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface ElementProps {
  children?: React.ReactNode;
  className?: string;
}

export default ({ children, ...props }: ElementProps) => (
  <motion.div {...props}>{children}</motion.div>
);

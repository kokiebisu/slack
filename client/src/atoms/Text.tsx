import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface Props {
  content: string;
}

const Element = styled(motion.p)`
  margin: 0;
`;

export default ({ content, ...props }: Props) => {
  return <Element {...props}>{content}</Element>;
};

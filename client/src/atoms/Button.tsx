import React from 'react';
import styled from 'styled-components';

interface ElementProps extends StyledProps {
  children: React.ReactNode;
  className?: string;
}

interface StyledProps {
  size?: 'sm' | 'md' | 'lg';
}

const Element = styled(motion.button)<StyledProps>`
    ${({ size }) =>
      size === 'sm' &&
      css`
        padding: 5px 10px;
      `}
    ${({ size }) =>
      size === 'md' &&
      css`
        padding: 10px 20px;
      `}
    ${({ size }) =>
      size === 'lg' &&
      css`
        padding: 15px 30px;
      `}
`;

export default ({ children, ...props }: ElementProps) => (
  <Element {...props}>{children}</Element>
);

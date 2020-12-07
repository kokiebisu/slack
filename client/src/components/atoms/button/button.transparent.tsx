import React from 'react';
import styled from 'styled-components';

/**
 * Props
 */
import { TransparentButtonProps } from './props';

export const TransparentButton: React.FC<TransparentButtonProps> = ({
  title = 'Transparent Button',
  onPress,
}) => {
  return <Wrapper onClick={onPress}>{title}</Wrapper>;
};

const Wrapper = styled.button`
  white-space: nowrap;
  display: inline-block;
  padding: 8px 13px;
  border-radius: 3px;
  color: ${({ theme }) => theme.colors.gray__dark};
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
    border-color: ${({ theme }) => theme.colors.gray};
    text-decoration: underline;
  }
`;

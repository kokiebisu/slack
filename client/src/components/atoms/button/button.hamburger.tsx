import React from 'react';
import styled from 'styled-components';

/**
 * Props
 */
import { HamburgerButtonProps } from './props';

/**
 * Assets
 */
import { Hamburger } from 'assets/svg';

/**
 * Colors
 */
import { main } from 'global/colors';

export const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  onPress = () => alert('hamburger button pressed'),
}) => {
  return (
    <Wrapper onClick={onPress}>
      <Hamburger width={25} fill={main.colors.black} />
    </Wrapper>
  );
};

const Wrapper = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

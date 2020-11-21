import { Hamburger } from 'assets/svg';
import { main } from 'global/colors';
import React from 'react';
import styled from 'styled-components';
import { HamburgerButtonProps } from './props';

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

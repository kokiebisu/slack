import { Hamburger } from 'assets/svg';
import React from 'react';
import { HamburgerButtonProps } from './props';

export const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  onPress = () => alert('hamburger button pressed'),
}) => {
  return (
    <button onClick={onPress}>
      <Hamburger width={15} />
    </button>
  );
};

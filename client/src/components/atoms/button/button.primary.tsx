import React from 'react';
import { PrimaryButtonProps } from './props';
import styled from 'styled-components';
import { size } from '../../../global/sizes';

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title = 'Primary Button',
  onPress = () => alert('You pressed'),
  inverse = false,
  size = 'sm',
}) => {
  return (
    <Wrapper inverse={inverse} className={` ${size}`} onClick={onPress}>
      {title}
    </Wrapper>
  );
};

export const Wrapper = styled.button`
  font-size: 14px;
  font-family: 'CircularPro-Bold';
  letter-spacing: 1px;
  width: 100%;
  text-transform: uppercase;
  border: 1px solid
    ${({ inverse, theme }: { inverse: boolean; theme: any }) =>
      inverse ? theme.colors.primary__light : 'transparent'};
  background-color: ${({ inverse, theme }: { inverse: boolean; theme: any }) =>
    inverse ? 'transparent' : theme.colors.primary__light};
  color: ${({ inverse, theme }: { inverse: boolean; theme: any }) =>
    inverse ? theme.colors.primary__light : theme.colors.white};

  @media ${size.lg} {
    width: auto;
    padding: 0 40px;
  }

  &.inverse {
    margin-top: 15px;
    margin-left: 0px;
    @media ${size.lg} {
      margin-top: 0;
      margin-left: 15px;
    }
  }

  &.sm {
    padding: 13px 13px;
    border-radius: 5px;
  }

  &.lg {
    padding: 20px;
    height: 60px;
    border-radius: 3px;
  }
`;

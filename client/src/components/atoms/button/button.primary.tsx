import React from 'react';
import { PrimaryButtonProps } from './props';
import styled from 'styled-components';
import { size } from '../../../global/sizes';

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title = 'Primary Button',
  onPress = () => alert('You pressed'),
  inverse = false,
}) => {
  return (
    <Wrapper
      className={inverse ? `button__border` : `button__filled`}
      onClick={onPress}>
      {title}
    </Wrapper>
  );
};

export const Wrapper = styled.button`
  font-size: 14px;
  font-family: 'CircularPro-Bold';
  border-radius: 3px;
  letter-spacing: 1px;
  width: 100%;
  padding: 20px 0;
  text-transform: uppercase;
  height: 60px;
  @media ${size.lg} {
    width: auto;
    padding: 0 40px;
  }

  &.button__filled {
    background-color: ${({ theme }) => theme.colors.primary__light};
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid transparent;
  }

  &.button__border {
    margin-top: 15px;
    margin-left: 0px;
    @media ${size.lg} {
      margin-top: 0;
      margin-left: 15px;
    }
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.primary__light};
    color: ${({ theme }) => theme.colors.primary__light};
  }
`;

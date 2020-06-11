import * as React from 'react';
import { useState } from 'react';
import * as b from '../../../styles/blocks';
import styled from 'styled-components';

interface Props {}

export const Switch: React.FC<Props> = ({ isOn, ...props }) => {
  return (
    <Wrapper
      variants={wrapperVariants}
      className={isOn ? `animate` : `initial`}
      {...props}>
      <Inner
        variants={innerVariants}
        className={isOn ? `animate` : `initial`}
      />
    </Wrapper>
  );
};

const wrapperVariants = {
  animate: {
    backgroundColor: 'green',
  },
  initial: {
    backgroundColor: 'gray',
  },
};

const innerVariants = {
  animate: {
    x: 100,
  },
  initial: {
    x: 0,
  },
};

const Wrapper = styled(b.Button)`
  width: 50px;
  height: 30px;
  border-radius: 100px;
  padding: 5px;
  display: flex;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &.switch {
    &.on {
      background-color: ${({ theme }) => theme.colors.green};
      justify-content: flex-end;
    }

    &.off {
      background-color: ${({ theme }) => theme.colors.white__dark};
      justify-content: flex-start;
    }
  }
`;

const Inner = styled(b.Box)`
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 200px;
  box-shadow: 1px 2px 3px rgb(0, 0, 0, 0.02);
`;

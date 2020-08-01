import styled from 'styled-components';
import * as b from 'styles/blocks';

import { size } from 'styles/sizes';

export const Wrapper = styled(b.Box)`
  height: 100vh;
  display: grid;
  grid-template-rows: 70px auto;
`;

export const InnerWrapper = styled(b.Box)`
  width: 100%;
  height: 100%;
`;

export const Left = styled(b.Box)`
  width: 100%;

  @media ${size.md} {
    display: block;
    width: 50%;
    padding-right: 58px;
  }

  & > div {
    justify-content: center;
    align-items: center;

    @media ${size.md} {
      justify-content: flex-end;
    }
  }
`;

export const Right = styled(b.Box)`
  display: none;
  background-color: ${({ theme }) => theme.colors.white__dark};

  @media ${size.md} {
    display: block;
    width: 50%;
  }
`;

export const LeftWrapper = styled(b.Box)`
  max-width: 400px;
`;

export const Input = styled(b.Input)`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gray__dark};
  border-radius: 7px;
  padding: 15px 0px 15px 15px;
`;

export const NextButton = styled(b.Button)`
  width: 100%;
  padding: 12px 0;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.white};
  font-family: 'SlackLato-Bold';
  font-size: 18px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary__lighter};
  }
`;

export const Policy = styled(b.Box)`
  span {
    color: ${({ theme }) => theme.colors.blue__light};
  }
`;

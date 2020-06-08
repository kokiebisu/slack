import styled from 'styled-components';
import * as b from '../../../styles/blocks';

// Breakpoints
import { landing } from '../../../styles/sizes';

export const Wrapper = styled.section`
  padding: 110px 0;
  background-color: ${({ theme }) => theme.colors.primary__light};
`;

export const Buttons = styled(b.Flex)`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${landing.mmd} {
    flex-direction: row;
  }
`;

export const ButtonWrapper = styled(b.Box)`
  margin-right: 0;
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: center;

  @media ${landing.mmd} {
    margin-bottom: 0;
    display: inline-block;
    margin-right: 5px;
    width: auto;
  }
`;

export const Button = styled(b.Button)`
  text-align: center;
  padding: 20px 35px;
  border-radius: 5px;
  width: 85%;

  @media ${landing.sm} {
    width: 80%;
  }

  @media ${landing.md} {
    width: 65%;
  }

  @media ${landing.mmd} {
    display: flex;
    width: auto;
  }

  &.white {
    background-color: white;
    border: 1px solid ${({ theme }) => theme.colors.primary__light};

    &:hover {
      padding: 19px 34px;
      border: 2px solid ${({ theme }) => theme.colors.primary__light};
    }
  }

  &.purple {
    background-color: ${({ theme }) => theme.colors.primary__light};
    border: 1px solid ${({ theme }) => theme.colors.white};

    &:hover {
      padding: 19px 34px;
      border: 2px solid ${({ theme }) => theme.colors.white};
    }
  }
`;

export const SectionName = styled(b.Text)`
  font-size: 6vw;

  @media ${landing.sm} {
    font-size: 5.5vw;
  }

  @media ${landing.md} {
    font-size: 4.5vw;
  }
`;

import styled from 'styled-components';
import * as b from 'global/blocks';

// Breakpoints
import { size } from 'global/sizes';

export const Wrapper = styled.section`
  padding: 110px 0;
  background-color: ${({ theme }) => theme.colors.primary__light};
`;

export const Header = styled(b.Box)`
  & p {
    font-family: 'Larsseit-Bold';
    font-size: 6vw;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;

    @media ${size.xs} {
      font-size: 5.5vw;
    }

    @media ${size.sm} {
      font-size: 4.5vw;
    }
  }
`;

export const Buttons = styled(b.Box)`
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media ${size.md} {
      flex-direction: row;
    }
  }
`;

export const Button = styled(b.Box)`
  margin-right: 0;
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: center;

  @media ${size.md} {
    margin-bottom: 0;
    display: inline-block;
    margin-right: 5px;
    width: auto;
  }

  & > button {
    text-align: center;
    padding: 20px 35px;
    border-radius: 5px;
    width: 85%;

    @media ${size.xs} {
      width: 80%;
    }

    @media ${size.sm} {
      width: 65%;
    }

    @media ${size.md} {
      display: flex;
      width: auto;
    }

    & p {
      font-family: 'CircularPro-Bold';
      font-size: 14px;
      text-transform: uppercase;
    }

    &.button__filled {
      background-color: white;
      border: 1px solid ${({ theme }) => theme.colors.primary__light};

      & > p {
        color: ${({ theme }) => theme.colors.primary__light};
      }

      &:hover {
        padding: 19px 34px;
        border: 2px solid ${({ theme }) => theme.colors.primary__light};
      }
    }

    &.button__transparent {
      background-color: ${({ theme }) => theme.colors.primary__light};
      border: 1px solid ${({ theme }) => theme.colors.white};

      & > p {
        color: ${({ theme }) => theme.colors.white};
      }

      &:hover {
        padding: 19px 34px;
        border: 2px solid ${({ theme }) => theme.colors.white};
      }
    }
  }
`;

export const SectionName = styled(b.Text)``;

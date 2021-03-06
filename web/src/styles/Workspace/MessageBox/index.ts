import styled from 'styled-components';
import * as b from 'global/blocks';
import { size } from 'global/sizes';

export const Wrapper = styled(b.Box)`
  position: fixed;
  z-index: 500;
  bottom: 0;

  width: 100vw;

  padding: 0 20px;
  background-color: ${({ theme }) => theme.colors.white};

  & > div {
    height: 100%;
  }

  @media ${size['7xs']} {
    width: calc(100vw - 220px);
  }

  @media ${size.llg} {
    width: calc(100vw - 256px);
  }

  & div {
    &.slate {
      /* width: 100%; */
    }
  }
`;

export const Content = styled(b.Box)`
  border-radius: 5px;
  height: inherit;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  display: grid;
  grid-template-rows: auto 39px;
`;

export const CommandDescription = styled(b.Box)`
  & p {
    font-size: 10px;
    font-family: 'SlackLato-Regular';
    color: ${({ theme }) => theme.colors.gray};
    & span {
      font-family: 'SlackLato-Bold';
    }
  }
`;

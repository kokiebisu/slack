import styled from 'styled-components';
import * as b from 'global/blocks';

export const Wrapper = styled(b.Box)`
  height: 100%;
`;

export const Content = styled(b.Box)`
  max-width: 420px;
  text-align: center;
`;

export const IconWrapper = styled(b.Box)`
  &.clipboard {
    svg {
      width: 26px;
      height: 26px;
      path {
        fill: ${({ theme }) => theme.colors.primary__light};
      }
    }
  }
`;

export const Title = styled(b.Box)`
  & > p {
    font-size: 17px;
    font-family: 'SlackLato-Bold';
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const Description = styled(b.Box)`
  & > p {
    font-size: 15px;
    font-family: 'SlackLato-Regular';
    color: ${({ theme }) => theme.colors.gray__light};
  }
`;

export const NewMessage = styled(b.Button)`
  display: inline-block;
  border: 1px solid ${({ theme }) => theme.colors.gray__lighter};
  & > p {
    font-size: 15px;
    font-family: 'SlackLato-Regular';
    color: ${({ theme }) => theme.colors.black__light};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.white__dark};
  }
`;

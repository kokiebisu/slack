import styled from 'styled-components';
import * as b from 'global/blocks';

export const Wrapper = styled(b.Box)``;

export const Header = styled(b.Box)`
  margin-bottom: 10px;

  & > p {
    font-size: 14px;
    font-family: 'SlackLato-Bold';
  }
`;

export const ChannelInput = styled(b.Box)`
  width: 100%;
  margin-bottom: 10px;

  & > input {
    width: 100%;
    padding: 7px 3px;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.gray__light};
  }
`;

export const IconWrapper = styled(b.Box)`
  &.link {
    & > svg {
      width: 14px;
      height: 14px;
      path {
        fill: ${({ theme }) => theme.colors.blue__light};
      }
    }
  }
`;

export const Description = styled(b.Box)`
  margin-bottom: 25px;
  & > p {
    font-size: 14px;
    font-family: 'SlackLato-Regular';
    color: ${({ theme }) => theme.colors.gray__light};
    & > span {
      font-family: 'SlackLato-Bold';
    }
  }
`;

export const Share = styled(b.Box)`
  & p {
    font-size: 14px;
    font-family: 'SlackLato-Regular';
    color: ${({ theme }) => theme.colors.blue__light};
  }
`;

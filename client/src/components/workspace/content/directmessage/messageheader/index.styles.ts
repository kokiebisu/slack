import styled from 'styled-components';
import * as b from '../../../../../styles/blocks';

export const Wrapper = styled(b.Box)`
  width: 100%;
  padding: 10px 0;

  & > div {
    padding: 0 20px;
  }
`;

export const Profile = styled(b.Box)`
  position: relative;

  width: 58px;
  height: 58px;
  border-radius: 5px;
`;

export const IconWrapper = styled(b.Box)`
  &.avatar {
    position: absolute;
    bottom: -4px;
    left: 50%;
    transform: translateX(-50%);
    & > svg {
      width: 48px;
      height: 48px;
      path {
        fill: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;

export const Header = styled(b.Box)`
  & > p {
    font-family: 'SlackLato-Bold';
    font-size: 15px;
  }
`;

export const Description = styled(b.Box)`
  margin-top: 15px;
  & > p {
    font-family: 'SlackLato-Regular';
    font-size: 18px;
    line-height: 1.4;

    & > span {
      color: ${({ theme }) => theme.colors.blue};
      background-color: ${({ theme }) => theme.colors.blue__0};
    }
  }
`;

import styled from 'styled-components';
import * as b from 'styles/blocks';

export const Profile = styled(b.Box)`
  position: relative;

  width: 36px;
  height: 36px;
  border-radius: 5px;
`;

export const IconWrapper = styled(b.Box)`
  &.avatar {
    position: absolute;
    bottom: -4px;
    left: 50%;
    transform: translateX(-50%);
    & > svg {
      width: 30px;
      height: 30px;
      path {
        fill: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;

export const Top = styled(b.Box)`
  & div {
    &.sender_name {
      font-size: 15px;
      font-family: 'SlackLato-Black';
    }

    &.sent_time {
      font-size: 12px;
      font-family: 'SlackLato-Light';
    }
  }

  & p {
    word-break: break-all;
  }
`;

import styled from 'styled-components';
import * as b from '../../../../../styles/blocks';

export const Profile = styled(b.Box)`
  width: 36px;
  height: 36px;
  background-color: red;
  border-radius: 5px;
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
`;

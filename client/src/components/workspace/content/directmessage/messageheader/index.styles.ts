import styled from 'styled-components';
import * as b from '../../../../../styles/blocks';

export const Wrapper = styled(b.Box)`
  background-color: red;
  width: 100%;
  height: 100px;

  & > div {
    padding: 0 20px;
  }
`;

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

import styled from 'styled-components';
import * as b from '../../../../../styles/blocks';

import { size } from '../../../../../styles/sizes';

export const Wrapper = styled(b.Box)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const IconWrapper = styled(b.Box)`
  &.person {
    bottom: 0.8px;
    svg {
      width: 10px;
      height: 10px;
      path {
        fill: ${({ theme }) => theme.colors.gray__light};
      }
    }
  }

  &.pin {
    svg {
      width: 10px;
      height: 10px;
      path {
        fill: ${({ theme }) => theme.colors.gray__light};
      }
    }
  }
`;

export const Seperator = styled(b.Box)`
  height: 10px;
  width: 1.2px;
  background-color: ${({ theme }) => theme.colors.gray__light};
  margin: 0 4px;
`;

export const Descriptions = styled(b.Box)`
  & span {
    width: 80px;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  @media ${size['12xs']} {
    width: auto;
  }
`;

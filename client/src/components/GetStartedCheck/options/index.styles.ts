import styled from 'styled-components';
import * as b from '../../../styles/blocks';

export const Wrapper = styled(b.Box)`
  p {
    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.colors.blue};
      text-decoration: underline;
    }
  }
`;

export const Option = styled(b.Box)`
  &.option {
    & > p {
      font-family: 'SlackLato-Regular';
      font-size: 15px;
    }
  }
`;

export const IconWrapper = styled(b.Box)`
  position: relative;
  &.gmail {
    bottom: 2px;
    svg {
      width: 20px;
      height: 20px;
      path {
      }
    }
  }

  &.outlook {
    bottom: 1px;
    svg {
      width: 20px;
      height: 20px;
      path {
      }
    }
  }
`;

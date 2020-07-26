import * as b from '../../../../styles/blocks';
import styled from 'styled-components';

export const Wrapper = styled(b.Box)`
  .header {
    padding: 25px;
    margin-bottom: 7px;
  }
  .content {
    padding-right: 5px;
  }
`;

export const IconWrapper = styled(b.Box)`
  &.logo {
    svg {
      width: 100px;
      height: auto;
    }
  }
  &.arrow {
    svg {
      width: 10px;
    }
  }
`;

export const IconButtonWrapper = styled(b.Button)`
  svg {
    width: 14px;
  }
`;

export const Option = styled(b.Box)`
  padding: 17px 25px;
  p {
    font-family: 'SlackLato-Regular';
    font-size: 17px;
  }
`;

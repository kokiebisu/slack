import styled from 'styled-components';
import * as b from 'styles/blocks';

export const IconWrapper = styled(b.Box)`
  &.socialmedia {
    svg {
      width: 20px;
      height: 20px;
      path {
        fill: ${({ theme }) => theme.colors.gray};
      }
    }
  }

  &.twitter {
    &:hover {
      path {
        fill: ${({ theme }) => theme.colors.blue__lighter};
      }
    }
  }

  &.facebook {
    &:hover {
      path {
        fill: ${({ theme }) => theme.colors.blue};
      }
    }
  }

  &.linkedin {
    &:hover {
      path {
        fill: ${({ theme }) => theme.colors.blue};
      }
    }
  }

  &.youtube {
    &:hover {
      path {
        fill: ${({ theme }) => theme.colors.red__light};
      }
    }
  }
`;

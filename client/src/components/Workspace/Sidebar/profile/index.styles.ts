import styled from 'styled-components';
import * as b from '../../../../styles/blocks';

export const Wrapper = styled(b.Box)`
  height: 100%;
  padding: 0 15px;
  display: grid;
  align-items: center;
  grid-template-columns: auto min-content;

  &:hover {
    cursor: pointer;
  }
`;

export const IconWrapper = styled(b.Box)`
  .bottomarrow {
    svg {
      width: 8px;
      height: 8px;
      path {
        fill: ${({ theme }) => theme.colors.white};
      }
    }
  }

  &.write {
    svg {
      width: 16px;
      height: 16px;
      path {
        fill: ${({ theme }) => theme.colors.primary__lighter};
      }
    }
  }
`;

export const StatusIcon = styled(b.Box)`
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.green__lighter};
  margin-right: 4px;
`;

export const Name = styled(b.Text)`
  color: ${({ theme }) => theme.colors.pink__lighter};

  &.hovered {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const Avatar = styled(b.Box)`
  display: grid;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background: ${({ theme }) => theme.colors.white};
  width: 35px;
  height: 35px;
`;

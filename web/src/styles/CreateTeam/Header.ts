import styled from 'styled-components';
import * as b from 'global/blocks';

export const Wrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 99;

  & > div {
    background-color: ${({ theme }) => theme.colors.white};
    height: 70px;
    border-bottom: 0.5px solid ${({ theme }) => theme.colors.gray__light};
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  }
`;

export const IconWrapper = styled(b.Box)`
  position: relative;
  top: 2px;

  &.namelogo {
    svg {
      width: 100px;
      height: 60px;
      path {
        &:nth-child(2) {
          fill: ${({ theme }) => theme.colors.blue__lighter};
        }
        &:nth-child(3) {
          fill: ${({ theme }) => theme.colors.green__lighter};
        }
        &:nth-child(4) {
          fill: ${({ theme }) => theme.colors.yellow};
        }
        &:nth-child(5) {
          fill: ${({ theme }) => theme.colors.red};
        }
      }
    }
  }
`;

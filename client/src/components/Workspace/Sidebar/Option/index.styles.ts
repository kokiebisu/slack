import styled from 'styled-components';
import * as b from 'global/blocks';

export const Wrapper = styled(b.Button)`
  padding: 5px 15px;
  width: 100%;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.primary__dark};
  }

  &:focus {
    background: ${({ theme }) => theme.colors.blue__light};
    outline: 0;

    p {
      color: white;
    }

    path {
      fill: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const IconWrapper = styled(b.Box)`
  position: relative;
  top: 2px;
  margin-right: 8px;

  svg {
    width: 15px;
    height: 15px;

    path {
      fill: ${({ theme }) => theme.colors.pink__lighter};
    }
  }
`;

export const TextWrapper = styled(b.Box)`
  position: relative;
  top: 2px;
`;

export const Title = styled(b.Text)`
  color: ${({ theme }) => theme.colors.pink__lighter};
`;

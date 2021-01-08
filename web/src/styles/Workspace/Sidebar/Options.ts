import styled from "styled-components";
import * as b from "global/blocks";

export const OptionsWrapper = styled(b.Box)`
  position: relative;
  margin: 5px 0;
  padding: 5px 0;
`;

export const ShowLessWrapper = styled(b.Button)`
  padding: 5px 15px;
  width: 100%;

  &:hover {
    path {
      fill: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const TextWrapper = styled(b.Box)`
  position: relative;
  top: 2px;
`;

export const IconWrapper = styled(b.AnimatedBox)`
  margin-right: 8px;

  svg {
    width: 15px;
    height: 15px;
    path {
      fill: ${({ theme }) => theme.colors.pink__lighter};
    }
  }
`;

export const Title = styled(b.Text)`
  color: ${({ theme }) => theme.colors.pink__lighter};

  &.hovered {
    color: ${({ theme }) => theme.colors.white};
  }
`;

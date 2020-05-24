import styled, { css } from 'styled-components';
import * as b from '../../styles/blocks';

export const Title = styled(b.Text)`
  font-size: 5vw;
  line-height: 40px;

  @media (min-width: 768px) {
    font-size: 42px;
    line-height: 55px;
  }

  @media (min-width: 1163px) {
    font-size: 46px;
  }
`;

export const Link = styled(b.Anchor)`
  text-transform: none;

  &.hovered {
    color: #1264a3;
    border-bottom: 1px solid #1264a3;
    cursor: pointer !important;
  }

  ${({ fontSize }) =>
    fontSize &&
    css`
      font-size: ${fontSize}px;
    `}

  ${({ fontFamily }) =>
    fontFamily &&
    css`
      font-family: ${fontFamily};
    `}
`;

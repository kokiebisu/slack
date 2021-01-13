import styled from 'styled-components';
import * as b from 'global/blocks';

// Breakpoints
import { size } from 'global/sizes';

export const Wrapper = styled(b.Box)`
  display: none;

  & > div {
    padding: 10px;
    min-width: 380px;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.1);
  }

  @media ${size.md} {
    display: block;
    position: absolute;
    top: 80px;
    right: calc(5%);
    border-radius: 3px;
  }
`;

export const LaunchOptionLink = styled(b.Anchor)`
  &:hover {
    text-decoration: underline;
  }
`;

export const OtherOption = styled(b.Box)`
  text-align: center;
  & > a {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.blue};
    font-family: 'CircularPro-Book';

    &:hover {
      text-decoration: underline;
    }
  }
`;

import styled from 'styled-components';
import * as b from 'global/blocks';

export const Wrapper = styled(b.Box)`
  &:hover {
    color: #1264a3;
  }

  & p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray__dark};
    font-family: 'CircularPro-Bold';
  }

  & > a {
    text-decoration: none;
  }
`;

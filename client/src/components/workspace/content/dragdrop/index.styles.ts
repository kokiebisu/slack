import styled from 'styled-components';
import * as b from '../../../../styles/blocks';

export const Wrapper = styled(b.Box)`
  background-color: rgba(255, 255, 255, 0.9);
`;

export const Title = styled(b.Box)`
  & p {
    font-family: 'SlackLato-Black';
    font-size: 28px;
  }
`;

export const Description = styled(b.Box)`
  & p {
    font-family: 'SlackLato-Regular';
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray__light};
  }
`;

import styled from 'styled-components';
import * as b from '../../../../styles/blocks';

export const Wrapper = styled(b.Box)`
  background-color: rgba(255, 255, 255, 0.9);
  & > div {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 600;
`;

export const Title = styled(b.Box)`
  & p {
    font-family: 'SlackLato-Black';
    font-size: 28px;
  }
`;

export const Description = styled(b.Box)`
  margin: 15px 0;
  & p {
    font-family: 'SlackLato-Regular';
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray__light};
  }
`;

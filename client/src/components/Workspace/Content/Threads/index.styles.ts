import styled from 'styled-components';
import * as b from 'global/blocks';

export const Wrapper = styled(b.Box)`
  height: 100%;
  text-align: center;
`;

export const IconWrapper = styled(b.Box)`
  margin: 5px 0;

  &.leaf {
    img {
      width: 60px;
      height: 60px;
    }
  }
`;

export const Title = styled(b.Box)`
  & > p {
    font-size: 17px;
    font-family: 'SlackLato-Bold';
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const Description = styled(b.Box)`
  & > p {
    font-size: 15px;
    font-family: 'SlackLato-Regular';
    color: ${({ theme }) => theme.colors.gray__light};
  }
`;

export const LearnButton = styled(b.Box)`
  & > p {
    font-size: 15px;
    font-family: 'SlackLato-Regular';
    color: ${({ theme }) => theme.colors.blue__light};
  }
`;

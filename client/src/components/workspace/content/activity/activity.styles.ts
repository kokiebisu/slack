import styled from 'styled-components';
import * as b from '../../../../styles/blocks';

export const Wrapper = styled(b.Box)`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.white__dark};
  padding: 15px;
  border-radius: 15px;
  margin-bottom: 25px;
`;

export const IconWrapper = styled(b.Box)`
  img {
    width: 30px;
    height: 30px;
  }
`;

export const Content = styled(b.Box)`
  display: grid;
  grid-template-columns: 50px auto;
`;

export const Name = styled(b.Box)`
  position: relative;
  bottom: 1px;
`;

export const Time = styled(b.Box)`
  p {
    color: ${({ theme }) => theme.colors.gray__light};
    font-family: 'SlackLato-Regular';
    font-size: 13px;
  }
`;

export const Message = styled(b.Box)`
  text-align: left;

  p {
    color: ${({ theme }) => theme.colors.black__light};
    font-family: 'SlackLato-Regular';
    font-size: 13px;
  }
`;

export const ToolBoxWrapper = styled(b.Box)`
  background-color: ${({ theme }) => theme.colors.white};
  position: absolute;
  top: 10px;
  right: 10px;
`;

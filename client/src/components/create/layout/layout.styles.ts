import styled from 'styled-components';
import * as b from '../../../styles/blocks';

import { size } from '../../../styles/sizes';

export const Wrapper = styled(b.Box)`
  height: 100vh;
  display: grid;
  grid-template-rows: 70px auto;
`;

export const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 99;
`;

export const HeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  height: 70px;
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.gray__light};
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
`;

export const InnerWrapper = styled(b.Box)`
  width: 100%;
  height: 100%;
`;

export const Left = styled(b.Box)`
  width: 100%;

  @media ${size.md} {
    display: block;
    width: 50%;
    padding-right: 58px;
  }

  & > div {
    justify-content: center;
    align-items: center;

    @media ${size.md} {
      justify-content: flex-end;
    }
  }
`;

export const Right = styled(b.Box)`
  display: none;
  background-color: ${({ theme }) => theme.colors.white__dark};

  @media ${size.md} {
    display: block;
    width: 50%;
  }
`;

export const LeftWrapper = styled(b.Box)`
  max-width: 400px;
`;

export const RightWrapper = styled(b.Box)`
  width: 350px;
  height: 325px;

  & > div {
    height: 100%;
    display: grid;
    grid-template-columns: 125px auto;
    opacity: ${({ opacity }) => `${opacity}`};
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
  }
`;

export const TeamWrapper = styled(b.Box)`
  height: 35px;
`;

export const ChannelWrapper = styled(b.Box)`
  display: flex;
  align-items: center;
  height: 20px;
`;

export const LeftMock = styled(b.Box)`
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary__lighter};
  padding: 18px 0;

  & > div {
    height: 100%;
  }
`;

export const Line = styled(b.Box)`
  height: 2px;
  width: 100%;
  border-radius: 9999px;
  background-color: ${({ theme }) => theme.colors.white__dark};
`;

export const BulletSection = styled(b.Box)`
  margin-top: 12px;
`;

export const BulletPoint = styled(b.Box)`
  width: 5px;
  height: 5px;
  border-radius: 9999px;
  background-color: ${({ theme }) => theme.colors.pink__light};
`;

export const RightMock = styled(b.Box)`
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 18px 15px;

  & > div {
    height: 100%;
  }
`;

export const Input = styled(b.Input)`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gray__dark};
  border-radius: 7px;
  padding: 15px 0px 15px 15px;
`;

export const NextButton = styled(b.Button)`
  width: 100%;
  padding: 12px 0;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.white};
  font-family: 'SlackLato-Bold';
  font-size: 18px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary__lighter};
  }
`;

export const Policy = styled(b.Box)`
  span {
    color: ${({ theme }) => theme.colors.blue__light};
  }
`;

export const SectionTitle = styled(b.Box)`
  height: 30px;
`;

export const ContentWrapper = styled(b.Box)`
  display: grid;
  grid-template-rows: repeat(3, 30px);
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

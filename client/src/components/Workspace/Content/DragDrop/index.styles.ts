import styled, { keyframes } from 'styled-components';
import * as b from '../../../../styles/blocks';

const dragdrop = require('../../../../assets/img/dragdrop.png');

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

export const ImageWrapper = styled(b.Box)`
  width: 500px;
  height: 200px;
`;

export const Images = styled(b.Box)`
  position: relative;
  width: 171px;
  height: 171px;
`;

const cardAnimation1 = keyframes`
  0% {
    transform: scale(.5) rotate(-10deg) translateX(0) 
  }
  100% {
    transform: scale(1) rotate(0deg) translateY(0px);
  }
`;

const cardAnimation2 = keyframes`
  0% {
    transform: scale(.5) rotate(15deg) translateX(0) 
  }
  100% {
    transform: scale(1) rotate(0deg) translateX(-20px);
  }
`;

const cardAnimation3 = keyframes`
  0% {
    transform: scale(.5) rotate(5deg) translateY(0) 
  }
  100% {
    transform: scale(1) rotate(0deg) translateY(-30px);
  }
`;

export const Image = styled(b.Box)`
  position: absolute;
  background-image: url(${dragdrop});
  background-repeat: no-repeat;
  background-size: 100px 358px;

  &.first {
    background-position: 0 0;
    width: 100px;
    height: 89px;
    left: 65px;
    top: 62px;
    animation: ${cardAnimation1} 0.12s ease-in-out forwards;
  }

  &.second {
    background-position: 0 -273px;
    width: 92px;
    height: 77px;
    left: 25px;
    top: 55px;
    animation: ${cardAnimation2} 0.12s ease-in-out forwards;
  }

  &.third {
    background-position: 0 -189px;
    width: 92px;
    height: 77px;
    left: 35px;
    top: 50px;
    animation: ${cardAnimation3} 0.12s ease-in-out forwards;
  }
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

import styled, { css } from 'styled-components';
import * as b from '../../../styles/blocks';

// Breakpoints
import { landing } from '../../../styles/sizes';

export const Wrapper = styled.section`
  padding-top: 50px;
  padding-bottom: 30px;
`;

export const ContentWrapper = styled(b.Flex)`
  display: block;

  @media ${landing.sm} {
    display: flex;
  }
`;

export const BannerLeft = styled(b.Box)`
  width: 100%;
  @media ${landing.sm} {
    width: 45%;
  }
`;

export const Buttons = styled(b.Flex)`
  display: block;
  @media ${landing.lg} {
    display: flex;
  }
`;

export const ButtonWrapper = styled(b.Box)`
  margin-top: 15px;
  margin-left: 0px;

  @media ${landing.lg} {
    margin-top: 0;
    margin-left: 15px;
  }
`;

export const Button = styled(b.Button)`
  font-size: 14px;
  font-family: 'CircularPro-Bold';
  border-radius: 3px;
  letter-spacing: 1px;
  width: 100%;
  padding: 20px 0;

  @media ${landing.lg} {
    width: auto;
    height: 60px;
    padding: 20px 40px;
  }
`;

export const BannerRight = styled(b.Box)`
  width: 100%;
  margin-top: 20px;
  @media ${landing.sm} {
    width: 55%;
    margin-top: 0;
  }
`;

export const ImageWrapper = styled(b.Flex)`
  img {
    width: 100%;
  }
`;

export const Link = styled(b.Anchor)`
  text-transform: none;

  &.hovered {
    color: #1264a3;
    border-bottom: 1px solid #1264a3;
    cursor: pointer !important;
  }

  ${({ fontFamily }) =>
    fontFamily &&
    css`
      font-family: ${fontFamily};
    `}
`;

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

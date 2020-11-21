import * as React from 'react';

// Blocks
import * as b from 'global/blocks';

// Svgs
import { NoNameLogo } from 'assets/svg/Logo';

// Styles
import { Wrapper, Content, Copyright } from 'styles/Footer/Landing';

// Components
import { SocialMedias } from 'components/Footer/Landing/SocialMedias';
import { Sections } from 'components/Footer/Landing/Sections';
import { LandingFooterProps } from './props';

// Svgs
import { Globe } from 'assets/svg';
import { BottomArrow } from 'assets/svg';
import styled, { css } from 'styled-components';

// Components
import { Option } from 'components/Footer/Landing/Option';
import { size } from 'global/sizes';
import { Button } from 'components/atoms/button/button.component';

export const LandingFooter: React.FC<LandingFooterProps> = () => {
  const options = [
    { name: 'Status', url: '/' },
    { name: 'Privacy & Terms', url: '/' },
    { name: 'Contact Us', url: '/' },
  ];

  return (
    <Wrapper>
      <b.Box className='footer__logo'>
        <b.Container>
          <Content className='logo'>
            <b.Flex>
              <Logo>
                <NoNameLogo width={65} />
              </Logo>
              <Sections />
            </b.Flex>
          </Content>
        </b.Container>
      </b.Box>
      <b.Box className='footer__options'>
        <Content className='options' py={4}>
          <b.Container>
            <b.Flex>
              <OptionsWrapper>
                <b.Flex alignItems='center'>
                  <b.Flex>
                    {options.map((option, index) => {
                      return (
                        <b.Box mr={3}>
                          <Button
                            type='transparent'
                            to={option.url}
                            title={option.name}
                          />
                        </b.Box>
                      );
                    })}
                  </b.Flex>
                  <ChangeRegionButton>
                    <b.Flex alignItems='center'>
                      <IconWrapper className='globe' mr={1}>
                        <Globe />
                      </IconWrapper>
                      <b.Text>Change Region</b.Text>
                      <b.Box ml={2}>
                        <IconWrapper className='bottom__arrow'>
                          <BottomArrow />
                        </IconWrapper>
                      </b.Box>
                    </b.Flex>
                  </ChangeRegionButton>
                </b.Flex>
              </OptionsWrapper>
              <SocialMedias />
            </b.Flex>
          </b.Container>
        </Content>
      </b.Box>
      <b.Box className='footer__copyright'>
        <b.Container>
          <Copyright>
            © Copyright 2020 Slack Technologies, Inc. All rights reserved.
            Various trademarks held by their respective owners.
          </Copyright>
        </b.Container>
      </b.Box>
    </Wrapper>
  );
};

const OptionsWrapper = styled(b.Box)`
  & > div {
    flex-direction: column;
    @media ${size.sm} {
      flex-direction: row;
    }
  }
`;

const ChangeRegionButton = styled(b.Button)`
  margin: 30px 0;

  & p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray};
    font-family: 'CircularPro-Bold';
  }

  & > div {
    & > div {
      &:nth-child(3) {
        display: none;
        @media ${size.sm} {
          display: block;
        }
      }
    }
  }

  &:hover {
    & p {
      color: ${({ theme }) => theme.colors.blue};
    }

    & > div {
      & > div {
        &:nth-child(1) {
          & > svg {
            path {
              fill: ${({ theme }) => theme.colors.blue} !important;
            }
          }
        }
        &:nth-child(3) {
          & > div {
            & > svg {
              path {
                fill: ${({ theme }) => theme.colors.blue} !important;
              }
            }
          }
        }
      }
    }
  }

  @media ${size.sm} {
    margin: 0px;
  }
`;

const IconWrapper = styled(b.Box)`
  position: relative;
  &.bottom__arrow {
    bottom: 2px;
    svg {
      width: 8px;
      height: 8px;
      path {
        fill: ${({ theme }) => theme.colors.gray};
      }
    }
  }

  &.globe {
    top: 2px;
    svg {
      width: 16px;
      height: 16px;
      path {
        fill: ${({ theme }) => theme.colors.gray};
      }
    }
  }
`;

const Link = styled(b.Anchor)`
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

const ArrowWrapper = styled(b.Box)``;

const Logo = styled(b.Box)`
  width: 100%;
  margin-bottom: 30px;
  @media ${size.md} {
    width: 35%;
    margin-bottom: 0;
  }
`;

const OptionWrapper = styled(b.Box)`
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

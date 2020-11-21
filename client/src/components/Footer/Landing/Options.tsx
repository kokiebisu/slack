import * as React from 'react';

import styled, { css } from 'styled-components';

// Breakpoints
import { size } from 'global/sizes';
// Blocks
import * as b from 'global/blocks';

// Components
import { Option } from 'components/Footer/Landing/Option';

// Svgs
import { Globe } from 'assets/svg';
import { BottomArrow } from 'assets/svg';

export const Options = () => {
  const options = [
    { name: 'Status', url: '/' },
    { name: 'Privacy & Terms', url: '/' },
    { name: 'Contact Us', url: '/' },
  ];
  return (
    <OptionsWrapper>
      <b.Flex alignItems='center'>
        <b.Flex>
          {options.map((option, index) => {
            return <Option key={index} {...option} />;
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

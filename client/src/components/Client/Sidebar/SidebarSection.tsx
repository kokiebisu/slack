import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

// Blocks
import * as b from '../../../styles/blocks';

// Svgs
import { Play, Close } from '../../../assets/svg';
import { Plus } from '../../../assets/svg/Plus';

// Breakpoints
import { home } from '../../../styles/sizes';

interface Props {
  title: string;
  subtitle?: string;
  onReveal: () => void;
}

export const SidebarSection: React.FC<Props> = ({
  title,
  subtitle,
  children,
  onReveal,
}) => {
  const [clicked, setClicked] = useState(false);

  const [hovered, setHovered] = useState({
    subtitle: false,
  });

  const arrow = {
    initial: {
      y: 2,
      rotate: 0,
    },
    animate: {
      y: 3,
      rotate: 90,
    },
  };

  return (
    <Wrapper>
      <TopColumnWrapper
        onClick={() => {
          setClicked(!clicked);
          onReveal();
        }}>
        <TitleWrapper alignItems='center' justifyContent='space-between'>
          <b.Flex alignItems='center'>
            <IconWrapper
              className='play'
              animate={clicked ? 'animate' : 'initial'}
              variants={arrow}
              mr={2}>
              <Play />
            </IconWrapper>
            <TitleContainer>
              <b.Text
                fontFamily='SlackLato-Light'
                color='pink__lighter'
                fontSize={15}>
                {title}
              </b.Text>
            </TitleContainer>
          </b.Flex>
          <IconWrapper className='plus'>
            <Plus />
          </IconWrapper>
        </TitleWrapper>
      </TopColumnWrapper>
      <ContentWrapper>{children}</ContentWrapper>
      {subtitle && (
        <SubtitleWrapper my={1} py={2} pl={2}>
          <b.Flex alignItems='center' justifyContent='space-between'>
            <b.Flex>
              <IconWrapper className='smallplus' pr={2}>
                <Plus />
              </IconWrapper>
              <b.Box>
                <b.Text
                  fontFamily='SlackLato-Light'
                  color='pink__lighter'
                  fontSize={15}>
                  {subtitle}
                </b.Text>
              </b.Box>
            </b.Flex>
            {hovered.subtitle && (
              <IconWrapper className='close'>
                <Close />
              </IconWrapper>
            )}
          </b.Flex>
        </SubtitleWrapper>
      )}
    </Wrapper>
  );
};

const Wrapper = styled(b.Box)`
  padding: 10px 0;
  cursor: pointer;
`;

const TopColumnWrapper = styled(b.Button)`
  width: 100%;
  height: 25px;
  padding: 0 18px 0 20px;

  &:focus {
    outline: 0;
  }

  @media ${home.lg} {
    padding: 0 30px 0 20px;
  }
`;

const TitleWrapper = styled(b.Flex)`
  position: relative;
`;

const TitleContainer = styled(b.Box)`
  position: relative;
  bottom: 2px;
`;

const ContentWrapper = styled(b.Box)`
  padding: 0 20px;
`;

const IconWrapper = styled(b.Box)`
  position: relative;

  &.play {
    bottom: 6px;
    svg {
      width: 8px;
      height: 8px;
      path {
        fill: ${({ theme }) => theme.colors.pink__lighter};
      }
    }
  }

  &.close {
    bottom: 3px;
    right: 7px;
    svg {
      width: 12px;
      height: 12px;
      path {
        fill: ${({ theme }) => theme.colors.purple};
      }
    }

    &:hover {
      path {
        fill: ${({ theme }) => theme.colors.white};
      }
    }

    @media ${home.lg} {
      bottom: 2px;
      right: 18px;
    }
  }

  &.plus {
    position: absolute;
    right: -2px;
    bottom: 3px;
    border-radius: 5px;
    padding: 6px 8px 4px 7px;
    svg {
      width: 14px;
      height: 14px;
      path {
        fill: ${({ theme }) => theme.colors.pink__light};
      }
    }

    &:hover {
      background: ${({ theme }) => theme.colors.primary__lighter};
    }
  }

  &.smallplus {
    bottom: 2.75px;

    svg {
      width: 8px;
      height: 8px;
      path {
        fill: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;

const SubtitleWrapper = styled(b.Box)`
  padding: 7px 19px 3px 28.5px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary__dark};
  }
`;

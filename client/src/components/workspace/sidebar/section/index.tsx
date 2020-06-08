import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

// Blocks
import * as b from '../../../../styles/blocks';

// Svgs
import { Play, Close } from '../../../../assets/svg';
import { Plus } from '../../../../assets/svg/Plus';

// Breakpoints
import { home } from '../../../../styles/sizes';

// Styles
import {
  Wrapper,
  TopColumnWrapper,
  TitleWrapper,
  IconWrapper,
  TitleContainer,
  ContentWrapper,
  SubtitleWrapper,
} from './section.styles';

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
            <IconWrapper className='close'>
              <Close />
            </IconWrapper>
          </b.Flex>
        </SubtitleWrapper>
      )}
    </Wrapper>
  );
};

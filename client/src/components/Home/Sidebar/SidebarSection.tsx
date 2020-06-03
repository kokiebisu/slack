import * as React from 'react';
import { useState, ReactPortal } from 'react';
import styled from 'styled-components';
import * as b from '../../../styles/blocks';

import { Play, Close } from '../../../assets/svg';
import { Plus } from '../../../assets/svg/Plus';
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
    plus: false,
    close: false,
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
            <PlayWrapper
              animate={clicked ? 'animate' : 'initial'}
              variants={arrow}
              mr={2}>
              <Play width={8} height={8} color='#CFC3CF' />
            </PlayWrapper>
            <TitleContainer>
              <b.Text
                fontFamily='SlackLato-Light'
                color='#CFC3CF'
                fontSize={15}>
                {title}
              </b.Text>
            </TitleContainer>
          </b.Flex>
          <PlusWrapper
            className={hovered.plus ? `hovered` : ``}
            onMouseEnter={() => setHovered({ ...hovered, plus: true })}
            onMouseLeave={() => setHovered({ ...hovered, plus: false })}>
            <Plus width={14} height={14} color='#CFC3CF' />
          </PlusWrapper>
        </TitleWrapper>
      </TopColumnWrapper>
      <ContentWrapper>{children}</ContentWrapper>
      {subtitle ? (
        <SubtitleWrapper
          className={hovered.subtitle ? `hovered` : ``}
          onMouseEnter={() => setHovered({ ...hovered, subtitle: true })}
          onMouseLeave={() => setHovered({ ...hovered, subtitle: false })}
          my={1}
          py={2}
          pl={2}>
          <b.Flex alignItems='center' justifyContent='space-between'>
            <b.Flex>
              <b.Box pr={2} style={{ bottom: 2.75 }}>
                <Plus width={8} height={8} color='white' />
              </b.Box>
              <b.Box>
                <b.Text
                  fontFamily='SlackLato-Light'
                  color='#CFC3CF'
                  fontSize={15}>
                  {subtitle}
                </b.Text>
              </b.Box>
            </b.Flex>
            {hovered.subtitle ? (
              <CloseWrapper
                onMouseEnter={() => setHovered({ ...hovered, close: true })}
                onMouseLeave={() => setHovered({ ...hovered, close: false })}>
                <Close
                  width={12}
                  height={12}
                  color={hovered.close ? `white` : `#978198`}
                />
              </CloseWrapper>
            ) : null}
          </b.Flex>
        </SubtitleWrapper>
      ) : null}
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

const PlayWrapper = styled(b.Box)`
  position: relative;
  bottom: 6px;
`;

const SubtitleWrapper = styled(b.Box)`
  padding: 7px 19px 3px 28.5px;

  &.hovered {
    background-color: #350d36 !important;
  }
`;

const PlusWrapper = styled(b.Box)`
  position: absolute;
  right: -2px;
  bottom: 3px;
  border-radius: 5px;
  padding: 6px 8px 4px 7px;
  &.hovered {
    background: #532754 !important;
  }
`;

const CloseWrapper = styled(b.Box)`
  position: relative;
  bottom: 3px;
  right: 7px;

  @media ${home.lg} {
    bottom: 2px;
    right: 18px;
  }
`;

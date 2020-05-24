import React, { useState } from 'react';
import styled from 'styled-components';
import { Box, Flex, Text, Button } from '../../../styles/blocks';

import { Play, Plus, Close } from '../../../assets/svg/SidebarSections';
import { home } from '../../../styles/sizes';

export const SidebarSection = ({ title, subtitle, children, onReveal }) => {
  const [clicked, setClicked] = useState(false);

  const [hovered, setHovered] = useState({
    subtitle: false,
    plus: false,
    close: false,
  });

  const arrow = {
    initial: {
      rotate: 0,
    },
    animate: {
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
          <Flex alignItems='center'>
            <PlayWrapper
              animate={clicked ? 'animate' : 'initial'}
              variants={arrow}
              mr={2}>
              <Play width={8} height={8} color='#CFC3CF' />
            </PlayWrapper>
            <TitleContainer>
              <Text fontFamily='Segoe' color='#CFC3CF' fontSize={15}>
                {title}
              </Text>
            </TitleContainer>
          </Flex>
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
          <Flex alignItems='center' justifyContent='space-between'>
            <Flex>
              <Box pr={2} style={{ bottom: 4 }}>
                <Plus width={8} height={8} color='white' />
              </Box>
              <Box>
                <Text fontFamily='Segoe' color='#CFC3CF' fontSize={15}>
                  {subtitle}
                </Text>
              </Box>
            </Flex>
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
          </Flex>
        </SubtitleWrapper>
      ) : null}
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  padding: 10px 0;
  cursor: pointer;
`;

const TopColumnWrapper = styled(Button)`
  width: 100%;
  height: 25px;
  padding: 0 18px 0 20px;
  @media ${home.lg} {
    padding: 0 30px 0 20px;
  }
`;

const TitleWrapper = styled(Flex)`
  position: relative;
`;

const TitleContainer = styled(Box)`
  position: relative;
  bottom: 2px;
`;

const ContentWrapper = styled(Box)`
  padding: 0 20px;
`;

const PlayWrapper = styled(Box)`
  position: relative;
  bottom: 6px;
`;

const SubtitleWrapper = styled(Box)`
  padding: 7px 19px 3px 28.5px;

  &.hovered {
    background-color: #350d36 !important;
  }
`;

const PlusWrapper = styled(Box)`
  position: absolute;
  right: -2px;
  bottom: 3px;
  border-radius: 5px;
  padding: 6px 8px 4px 7px;
  &.hovered {
    background: #532754 !important;
  }
`;

const CloseWrapper = styled(Box)`
  position: relative;
  bottom: 3px;
  right: 7px;

  @media ${home.lg} {
    bottom: 2px;
    right: 18px;
  }
`;

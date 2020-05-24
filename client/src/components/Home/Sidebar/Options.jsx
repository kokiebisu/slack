import React, { useState } from 'react';
import styled from 'styled-components';

import { Box } from '../../../styles/blocks';
import { Option } from './Option';

import { ShowLess } from '../../../assets/svg/SidebarOptions';

// Blocks
import { Flex, Text, Button } from '../../../styles/blocks';

export const Options = () => {
  const [display, setDisplay] = useState(true);
  const [hovered, setHovered] = useState(false);

  const arrow = {
    initial: {
      y: 0,
      rotate: 0,
      transition: {
        duration: 0.3,
      },
    },
    animate: {
      y: -2.5,
      rotate: 180,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <OptionsWrapper>
      <Box>
        <Option name='threads' link='threads' />
        <Option name='mentions & reactions' link='activity-page' />
        {display ? (
          <>
            <Option name='drafts' link='drafts' />
            <Option name='saved items' link='saved-page' />
            <Option name='channel browser' link='browse-channels' />
            <Option name='people' link='browse-people' />
            <Option name='apps' link='apps' />
            <Option name='files' link='browse-files' />
          </>
        ) : null}

        <ShowLessWrapper
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setDisplay(!display)}>
          <Flex>
            <Icon
              animate={display ? 'initial' : 'animate'}
              style={{ top: 1 }}
              variants={arrow}>
              <ShowLess
                width={15}
                height={15}
                color={hovered ? `white` : `#CFC3CF`}
              />
            </Icon>
            <TextWrapper>
              <Title
                className={hovered ? `hovered` : ``}
                fontFamily='Segoe'
                fontSize={15}>
                Show less
              </Title>
            </TextWrapper>
          </Flex>
        </ShowLessWrapper>
      </Box>
    </OptionsWrapper>
  );
};

const OptionsWrapper = styled(Box)`
  position: relative;
  margin: 5px 0;
  padding: 5px 0;
`;

const ShowLessWrapper = styled(Button)`
  padding: 5px 15px;
  width: 100%;
`;

const TextWrapper = styled(Box)`
  position: relative;
  top: 2px;
`;

const Icon = styled(Box)`
  margin-right: 8px;
`;

const Title = styled(Text)`
  color: #cfc3cf;

  &.hovered {
    color: white !important;
  }
`;

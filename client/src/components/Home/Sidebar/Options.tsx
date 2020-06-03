import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

import { Option } from './Option';

import { ShowLess } from '../../../assets/svg';

// Blocks
import * as b from '../../../styles/blocks';

interface Props {}

export const Options: React.FC<Props> = () => {
  const [display, setDisplay] = useState(true);
  const [hovered, setHovered] = useState(false);

  const arrow = {
    initial: {
      y: 3,
      rotate: 0,
      transition: {
        duration: 0.3,
      },
    },
    animate: {
      y: 0,
      rotate: 180,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <OptionsWrapper>
      <b.Box>
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
          <b.Flex>
            <Icon animate={display ? 'initial' : 'animate'} variants={arrow}>
              <ShowLess
                width={15}
                height={15}
                color={hovered ? `white` : `#CFC3CF`}
              />
            </Icon>
            <TextWrapper>
              <Title
                className={hovered ? `hovered` : ``}
                fontFamily='SlackLato-Light'
                fontSize={15}>
                Show less
              </Title>
            </TextWrapper>
          </b.Flex>
        </ShowLessWrapper>
      </b.Box>
    </OptionsWrapper>
  );
};

const OptionsWrapper = styled(b.Box)`
  position: relative;
  margin: 5px 0;
  padding: 5px 0;
`;

const ShowLessWrapper = styled(b.Button)`
  padding: 5px 15px;
  width: 100%;
`;

const TextWrapper = styled(b.Box)`
  position: relative;
  top: 2px;
`;

const Icon = styled(b.Box)`
  margin-right: 8px;
`;

const Title = styled(b.Text)`
  color: #cfc3cf;

  &.hovered {
    color: white !important;
  }
`;

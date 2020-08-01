import * as React from 'react';
import { useState } from 'react';

// Blocks
import * as b from 'styles/blocks';

// Svgs
import { Play, Close } from 'assets/svg';
import { Plus } from 'assets/svg/Plus';

import { useToggleDispatch } from 'context/toggle-context';

// Styles
import {
  Wrapper,
  TopColumnWrapper,
  TitleWrapper,
  IconWrapper,
  TitleContainer,
  SubtitleWrapper,
  IconButtonWrapper,
} from 'components/Workspace/Sidebar/Section/index.styles';

interface Props {
  title: string;
  subtitle?: React.ReactNode;
  onReveal: () => void;
}

export const SidebarSection: React.FC<Props> = ({
  title,
  subtitle,
  children,
  onReveal,
}) => {
  const [clicked, setClicked] = useState(false);

  const dispatch = useToggleDispatch();

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
      <TopColumnWrapper>
        <TitleWrapper alignItems='center' justifyContent='space-between'>
          <b.Flex alignItems='center'>
            <IconWrapper
              className='play'
              animate={clicked ? 'animate' : 'initial'}
              variants={arrow}
              mr={2}>
              <Play />
            </IconWrapper>
            <TitleContainer
              onClick={(e) => {
                setClicked(!clicked);
                onReveal();
              }}>
              <b.Text
                fontFamily='SlackLato-Light'
                color='pink__lighter'
                fontSize={15}>
                {title}
              </b.Text>
            </TitleContainer>
          </b.Flex>
          <IconButtonWrapper
            className='plus'
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.preventDefault();
              dispatch({
                type: 'toggle_channel',
              });
            }}>
            <Plus />
          </IconButtonWrapper>
        </TitleWrapper>
      </TopColumnWrapper>
      <b.Box>{children}</b.Box>
      {subtitle && (
        <SubtitleWrapper my={1} py={2} pl={2}>
          <b.Flex alignItems='center' justifyContent='space-between'>
            <b.Flex>
              <IconButtonWrapper className='smallplus' pr={2}>
                <Plus />
              </IconButtonWrapper>
              <b.Box>{subtitle}</b.Box>
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

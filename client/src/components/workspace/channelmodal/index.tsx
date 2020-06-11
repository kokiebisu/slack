import * as React from 'react';
import { useState } from 'react';

// Blocks
import * as b from '../../../styles/blocks';

// Styles
import styled from 'styled-components';

// Svgs
import { Close, Info } from '../../../assets/svg';

import {
  Wrapper,
  Title,
  Container,
  Header,
  IconButtonWrapper,
  Description,
  SectionHeader,
  StyledInput,
  Hint,
  PrivateOption,
  LearnMore,
  LearnButton,
} from './channelmodal.styles';
import { Switch } from './switch';

export const ChannelModal = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <Wrapper>
      <b.Flex justifyContent='center' alignItems='center'>
        <Container>
          <Header>
            <b.Flex justifyContent='space-between'>
              <Title>
                <b.Text>Create a private channel</b.Text>
              </Title>
              <IconButtonWrapper className='close'>
                <Close />
              </IconButtonWrapper>
            </b.Flex>
          </Header>
          <Description>
            <b.Text>
              Channels are where your team communicates. They’re best when
              organized around a topic — #marketing, for example.
            </b.Text>
          </Description>
          <SectionHeader>
            <b.Text>Name</b.Text>
          </SectionHeader>
          <b.Box>
            <StyledInput />
          </b.Box>
          <SectionHeader>
            <b.Text>Description (optional)</b.Text>
          </SectionHeader>
          <b.Box>
            <StyledInput />
          </b.Box>
          <Hint>
            <b.Text>What's this channel about?</b.Text>
          </Hint>
          <PrivateOption>
            <b.Flex alignItems='center' justifyContent='space-between'>
              <b.Box>
                <b.Box className='title'>
                  <b.Text>Make Private</b.Text>
                </b.Box>
                <b.Box className='description'>
                  <b.Text>
                    <b.Span>This can’t be undone.</b.Span> A private channel
                    cannot be made public later on.
                  </b.Text>
                </b.Box>
              </b.Box>
              <b.Box>
                <Switch isOn={isOn} onClick={() => setIsOn(!isOn)} />
              </b.Box>
            </b.Flex>
          </PrivateOption>
          <b.Box>
            <b.Flex justifyContent='space-between' alignItems='center'>
              <LearnMore>
                <b.Flex alignItems='center'>
                  <IconButtonWrapper className='info'>
                    <Info />
                  </IconButtonWrapper>
                  <b.Box>
                    <b.Text>Learn more</b.Text>
                  </b.Box>
                </b.Flex>
              </LearnMore>
              <LearnButton>Create</LearnButton>
            </b.Flex>
          </b.Box>
        </Container>
      </b.Flex>
    </Wrapper>
  );
};

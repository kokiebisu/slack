import * as React from 'react';

// Blocks
import * as b from '../../../styles/blocks';

// Styles
import styled from 'styled-components';

// Svgs
import { Close } from '../../../assets/svg';

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
} from './channelmodal.styles';

export const ChannelModal = () => {
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
            <b.Flex>
              <b.Box>
                <b.Box className='title'>
                  <b.Text>Make Private</b.Text>
                </b.Box>
                <b.Box className='description'>
                  <Span className='warning'>This can’t be undone.</Span> A
                  private channel cannot be made public later on.
                </b.Box>
              </b.Box>
              <b.Box>switch</b.Box>
            </b.Flex>
          </PrivateOption>
          <b.Box>
            <b.Flex>
              <b.Box>
                <b.Flex>
                  <b.Box>I</b.Box>
                  <b.Box>Learn more</b.Box>
                </b.Flex>
              </b.Box>
              <b.Box>
                <b.Button>Learn</b.Button>
              </b.Box>
            </b.Flex>
          </b.Box>
        </Container>
      </b.Flex>
    </Wrapper>
  );
};

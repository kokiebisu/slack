import React from 'react';
import * as b from '../../../../../styles/blocks';

// Styles
import {
  Header,
  Title,
  IconWrapper,
  Footer,
  SendButton,
  Description,
  Content,
  ContentHeader,
  Line,
} from './index.styles';

// Svg
import { PaperPlaneLight } from '../../../../../assets/svg';

// Components
import { Sent } from '../Sent';

interface Props {
  input: { email: string; name: string; done: boolean };
  dispatchToggle: any;
}

export const After: React.FC<Props> = ({ input, dispatchToggle }) => {
  return (
    <>
      <Header>
        <b.Flex justifyContent='space-between'>
          <Title>
            <b.Text>Invites sent</b.Text>
          </Title>
        </b.Flex>
      </Header>
      <Description>
        <b.Text>
          You've invited <span>1 Member</span> to your workspace
        </b.Text>
      </Description>
      <Content>
        <ContentHeader>
          <b.Flex>
            <b.Box className='content__section'>
              <b.Text>Email Address</b.Text>
            </b.Box>
            <b.Box className='content__section'>
              <b.Text>Name</b.Text>
            </b.Box>
          </b.Flex>
        </ContentHeader>
        <Line />
        <Sent email={input.email} name={input.name} />
      </Content>
      <Footer>
        <b.Flex alignItems='center' justifyContent='space-between'>
          <b.Box>
            <b.Flex>
              <IconWrapper className='paper-plane' mr={2}>
                <PaperPlaneLight />
              </IconWrapper>
              <b.Box>
                <b.Text>See past invites</b.Text>
              </b.Box>
            </b.Flex>
          </b.Box>
          <SendButton
            onClick={() => {
              dispatchToggle({ type: 'toggle_invite' });
            }}>
            Done
          </SendButton>
        </b.Flex>
      </Footer>
    </>
  );
};

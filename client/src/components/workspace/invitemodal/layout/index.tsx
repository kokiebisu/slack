import React from 'react';
import { useReducer } from 'react';

// Blocks
import * as b from '../../../../styles/blocks';

// Styles
import {
  Wrapper,
  Container,
  Header,
  Title,
  IconButtonWrapper,
  PricingPlans,
  IconWrapper,
  EmailInputs,
  EmailInputHeader,
  AddOptions,
  AddOptionText,
  Footer,
  SendButton,
} from './index.styles';

// Svg
import { Close, UserPlus } from '../../../../assets/svg';
import { PlusCircle } from '../../../../assets/svg/Plus';
import { GoogleLogo } from '../../../../assets/svg/Logo';
import { PaperPlaneLight } from '../../../../assets/svg';

// Context
import { useToggleDispatch } from '../../../../context/toggle-context';
import { EmailInput } from '../emailinput';

// Components
import { DefaultChannels } from '../defaultchannels';

// Query
import { useSendInvitationMutation } from '../../../../generated/graphql';

// Types
type State = { email: string; name: string };
type Action =
  | { type: 'add_email'; payload: string }
  | { type: 'add_name'; payload: string };

// Reducer
const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'add_email':
      return { ...state, email: action.payload };
    case 'add_name':
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

export const InviteModal = () => {
  const dispatchToggle = useToggleDispatch();

  const [input, dispatchInput] = useReducer(reducer, {
    email: '',
    name: '',
  });

  const [send] = useSendInvitationMutation();

  return (
    <Wrapper>
      <b.Flex justifyContent='center' alignItems='center'>
        <Container animate={{ y: 0 }} initial={{ y: 15 }}>
          <Header>
            <b.Flex justifyContent='space-between'>
              <Title>
                <b.Text>Invite people to dsaf</b.Text>
              </Title>
              <IconButtonWrapper
                className='close'
                onClick={() => dispatchToggle({ type: 'toggle_invite' })}>
                <Close />
              </IconButtonWrapper>
            </b.Flex>
          </Header>
          <PricingPlans py={3} px={3}>
            <b.Flex>
              <IconWrapper className='user-plus'>
                <UserPlus />
              </IconWrapper>
              <b.Box>
                <b.Text>
                  Workspaces with paid plans can also invite <span>guests</span>
                  , like contractors, vendors, or clients.{' '}
                  <a href='/pricing'>See pricing plans</a>
                </b.Text>
              </b.Box>
            </b.Flex>
          </PricingPlans>
          <EmailInputs>
            <b.Box>
              <b.Flex>
                <EmailInputHeader>
                  <b.Text>Email Address</b.Text>
                </EmailInputHeader>
                <EmailInputHeader>
                  <b.Text>Name (optional)</b.Text>
                </EmailInputHeader>
              </b.Flex>
            </b.Box>
            <EmailInput input={input} addInput={dispatchInput} />
          </EmailInputs>
          <AddOptions>
            <b.Box>
              <b.Flex alignItems='center'>
                <IconWrapper className='plus-circle' mr={2}>
                  <PlusCircle />
                </IconWrapper>
                <AddOptionText>
                  <b.Text>
                    <span onClick={() => console.log('add another')}>
                      Add another
                    </span>{' '}
                    or{' '}
                    <span onClick={() => console.log('add google directory')}>
                      add many at once
                    </span>
                  </b.Text>
                </AddOptionText>
              </b.Flex>
            </b.Box>
            <b.Box>
              <b.Flex alignItems='center'>
                <IconWrapper className='google' mr={2}>
                  <GoogleLogo />
                </IconWrapper>
                <AddOptionText>
                  <b.Text>
                    <span>Add from Google Directory</span>
                  </b.Text>
                </AddOptionText>
              </b.Flex>
            </b.Box>
          </AddOptions>
          <DefaultChannels />
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
                onClick={async () => {
                  const response = await send({
                    variables: { email: input.email, name: input.name },
                  });
                  if (response.data?.sendInvitation.errorlog) {
                    console.log('there was an error');
                  }
                  if (response.data?.sendInvitation.ok) {
                    dispatchToggle({ type: 'toggle_invite' });
                  }
                }}>
                Send Invitations
              </SendButton>
            </b.Flex>
          </Footer>
        </Container>
      </b.Flex>
    </Wrapper>
  );
};

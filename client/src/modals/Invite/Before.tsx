import React from 'react';
import * as b from 'global/blocks';

import {
  Header,
  Title,
  IconButtonWrapper,
  EmailInputs,
  SendButton,
  PricingPlans,
  Footer,
  IconWrapper,
  AddOptionText,
  EmailInputHeader,
  AddOptions,
} from 'components/Workspace/InviteModal/Before/index.styles';
import { GoogleLogo } from 'assets/svg/Logo';
import { UserPlus, Close, PaperPlaneLight } from 'assets/svg';
import { EmailInput } from 'components/Workspace/InviteModal/EmailInput';
import { DefaultChannels } from 'components/Workspace/InviteModal/DefaultChannels';
import { PlusCircle } from 'assets/svg';
import { useSendInvitationMutation } from 'generated/graphql';
import { useParams } from 'react-router-dom';
import { ErrorDialog } from 'components/shared/ErrorDialog';

interface Props {
  dispatchToggle: any;
  input: any;
  dispatchInput: any;
  finish: any;
}

export const Before: React.FC<Props> = ({
  dispatchToggle,
  input,
  dispatchInput,
  finish,
}) => {
  const { teamId } = useParams();

  const [send] = useSendInvitationMutation();

  return (
    <>
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
              Workspaces with paid plans can also invite <span>guests</span>,
              like contractors, vendors, or clients.{' '}
              <a href='/pricing'>See pricing plans</a>
            </b.Text>
          </b.Box>
        </b.Flex>
      </PricingPlans>
      {input.error && <ErrorDialog width='full' error={input.error} />}
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
              if (!input.email || !input.name || !teamId) {
                dispatchInput({
                  type: 'give_error',
                  payload:
                    'Add at least one email address before sending invitations.',
                });
                return;
              }
              const response = await send({
                variables: { email: input.email, name: input.name, teamId },
              });

              if (response.data?.sendInvitation.errorlog) {
                console.log('there was an error');
              }
              finish();
            }}>
            Send Invitations
          </SendButton>
        </b.Flex>
      </Footer>
    </>
  );
};

import React from 'react';

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
} from './index.styles';

// Svg
import { Close, UserPlus } from '../../../../assets/svg';

// Context
import { useToggleDispatch } from '../../../../context/toggle-context';
import { EmailInput } from '../emailinput';

export const InviteModal = () => {
  const dispatchToggle = useToggleDispatch();

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
            <EmailInput />
          </EmailInputs>
        </Container>
      </b.Flex>
    </Wrapper>
  );
};

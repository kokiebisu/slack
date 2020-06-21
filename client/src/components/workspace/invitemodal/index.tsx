import React from 'react';

// Blocks
import * as b from '../../../styles/blocks';

// Styles
import {
  Wrapper,
  Container,
  Header,
  Title,
  IconButtonWrapper,
} from './index.styles';
import { Close } from '../../../assets/svg';
import { useToggleDispatch } from '../../../context/toggle-context';

export const index = () => {
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
          {/* Paid Plans */}
        </Container>
      </b.Flex>
    </Wrapper>
  );
};

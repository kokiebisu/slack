import * as React from 'react';
import * as b from '../../../styles/blocks';
import { Link } from 'react-router-dom';

import { Wrapper } from './confirmEmail.styles';
import { LogoCenterLayout } from '../../shared/LogoCenter/layout';
import { Options } from '../options';

export const ConfirmEmail = () => {
  return (
    <LogoCenterLayout>
      <b.Box py={4}>
        <b.Flex flexDirection='column' alignItems='center'>
          <Wrapper>
            <b.Box>
              <b.Box>
                <b.Text
                  fontSize={48}
                  color='black__light'
                  fontFamily='Larsseit-Bold'
                  textAlign='center'>
                  Check your email!
                </b.Text>
              </b.Box>
              <b.Box pt={2} pb={4}>
                <b.Text
                  lineHeight={1.5}
                  textAlign='center'
                  color='gray'
                  fontFamily='SlackLato-Regular'
                  fontSize={20}>
                  We’ve emailed a special link to . Click the link to confirm
                  your address and get started. Wrong email? Please{' '}
                  <Link to='/get-started/find'>re-enter your address</Link>.
                </b.Text>
              </b.Box>
              <Options />
            </b.Box>
          </Wrapper>
        </b.Flex>
      </b.Box>
    </LogoCenterLayout>
  );
};

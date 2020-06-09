import * as React from 'react';
import { useState } from 'react';

import * as b from '../../../styles/blocks';

import { LogoCenterLayout } from '../../shared/LogoCenter/layout';

// Styles
import { Wrapper, EmailInput, ConfirmButton } from './layout.styles';

import { useTeamsByEmailMutation } from '../../../generated/graphql';
import { ErrorDialog } from '../errordialog';
import { Confirm } from '../confirm';
import { useHistory } from 'react-router-dom';

interface Props {}

export const GetStartedFind: React.FC<Props> = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const [getTeams, { loading }] = useTeamsByEmailMutation();

  return (
    <LogoCenterLayout>
      <b.Box py={4}>
        <b.Flex flexDirection='column' alignItems='center'>
          <Wrapper>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const { data: { teamsByEmail } = {} } = await getTeams({
                  variables: { email },
                });
                if (!loading && (teamsByEmail || !teamsByEmail!.ok)) {
                  setError(teamsByEmail!.message);
                }
                history.push('/your-workspaces', {
                  state: { teams: teamsByEmail?.teams },
                });
              }}>
              <b.Box>
                <b.Box>
                  <b.Text
                    fontSize={48}
                    color='black__light'
                    fontFamily='Larsseit-Bold'
                    textAlign='center'>
                    Let’s find your team
                  </b.Text>
                </b.Box>
                <b.Box pt={2} pb={4}>
                  <b.Text
                    lineHeight={1.5}
                    textAlign='center'
                    color='gray'
                    fontFamily='SlackLato-Regular'
                    fontSize={20}>
                    Enter the email you usually collaborate with
                  </b.Text>
                </b.Box>
                <b.Box>
                  <b.Flex justifyContent='center'>
                    <EmailInput
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      border='1px solid gray'
                      borderRadius={3}
                      placeholder='name@work-email.com'
                    />
                  </b.Flex>
                </b.Box>
                <ErrorDialog error={error} />
                <b.Box>
                  <Confirm loading={loading} />
                </b.Box>
              </b.Box>
            </form>
          </Wrapper>
        </b.Flex>
      </b.Box>
    </LogoCenterLayout>
  );
};

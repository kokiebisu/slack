import * as React from 'react';
import { useParams, Link, Redirect } from 'react-router-dom';

// Blocks
import * as b from 'global/blocks';

// Queries
import { useVerifyUserByTokenQuery } from 'generated/graphql';

// Styles
import { Wrapper } from 'styles/GetStartedCheck';

// Components
import { LogoCenterLayout } from 'components/shared/LogoCenter/layout';
import { Options } from 'components/GetStartedCheck/Options';

export const ConfirmEmail = () => {
  const { token } = useParams();
  const { data, loading } = useVerifyUserByTokenQuery({
    variables: { token },
  });
  return (
    <>
      {token && !loading && data!.verifyUserByToken.ok ? (
        <>
          <Redirect to={`/your-workspaces/${token}`} />
        </>
      ) : (
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
                      We’ve emailed a special link to . Click the link to
                      confirm your address and get started. Wrong email? Please{' '}
                      <Link to='/get-started/find'>re-enter your address</Link>.
                    </b.Text>
                  </b.Box>
                  <Options />
                </b.Box>
              </Wrapper>
            </b.Flex>
          </b.Box>
        </LogoCenterLayout>
      )}
    </>
  );
};

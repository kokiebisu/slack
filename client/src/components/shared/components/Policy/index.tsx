import * as React from 'react';

// Blocks
import * as b from 'styles/blocks';

// Styles
import { PolicyWrapper } from 'components/shared/components/Policy/index.styles';

export const Policy = () => {
  return (
    <b.Box>
      <b.Flex justifyContent='center'>
        <PolicyWrapper>
          <b.Box mt={3} mb={4}>
            <b.Flex>
              <b.Box>
                <input type='checkbox' />
              </b.Box>
              <b.Box ml={3}>
                <b.Text fontSize={15}>It's OK to email me about Slack.</b.Text>
              </b.Box>
            </b.Flex>
          </b.Box>
          <b.Box>
            <b.Text fontFamily='SlackLato-Light' fontSize={13}>
              By continuing, you're agreeing to our{' '}
              <span>Customer Terms of Service</span>,{' '}
              <span>Privacy Policy</span>, and <span>Cookie Policy</span>.
            </b.Text>
          </b.Box>
        </PolicyWrapper>
      </b.Flex>
    </b.Box>
  );
};

import React from 'react';

/**
 * Global
 */
import * as b from 'global/blocks';

/**
 * Props
 */
import { PolicyCardProps } from './props';
import styled from 'styled-components';

export const PolicyCard: React.FC<PolicyCardProps> = () => {
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

const PolicyWrapper = styled(b.Box)`
  width: 370px;

  span {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

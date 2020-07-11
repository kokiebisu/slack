import * as React from 'react';

// Blocks
import * as b from '../../../styles/blocks';

// Styles
import {
  Wrapper,
  LoadingText,
  Rotate,
  Error,
  IconWrapper,
  spinTransition,
} from './index.styles';

// Svg
import { Warning } from '../../../assets/svg';

interface Props {
  loading: boolean;
  error: string;
}

export const Dialog: React.FC<Props> = ({ loading, error }) => {
  return (
    <Wrapper mt={2} mb={3}>
      {loading ? (
        <b.Flex justifyContent='center' alignItems='center'>
          <b.Box>
            <b.Flex justifyContent='center' alignItems='center'>
              <LoadingText mr={3}>
                <b.Text>Hold on...</b.Text>
              </LoadingText>
              <Rotate>
                <b.Span transition={spinTransition} animate={{ rotate: 360 }} />
              </Rotate>
            </b.Flex>
          </b.Box>
        </b.Flex>
      ) : null}
      {error !== '' ? (
        <b.Flex justifyContent='center' alignItems='center'>
          <Error>
            <b.Flex justifyContent='center' alignItems='center'>
              <IconWrapper className='warning' mr={3}>
                <Warning />
              </IconWrapper>
              <b.Box>
                <b.Text color='black' fontSize={13} fontFamily='SlackLato-Thin'>
                  That code wasn't valid. Give it another go!
                </b.Text>
              </b.Box>
            </b.Flex>
          </Error>
        </b.Flex>
      ) : null}
    </Wrapper>
  );
};

import React from 'react';
import * as b from 'global/blocks';
import {
  ConfirmButton,
  DotWrapper,
  DotContainer,
  Dot,
  confirmVariants,
  DotVariants,
  DotContainerVariants,
  DotTransition,
} from 'styles/shared/Confirm';

interface Props {
  loading: boolean;
}

export const Confirm: React.FC<Props> = ({ loading }) => {
  return (
    <b.Box>
      <b.Flex justifyContent='center'>
        <ConfirmButton
          className='confirmbutton'
          type='submit'
          disabled={loading}>
          <b.Flex justifyContent='center' alignItems='center'>
            <b.Box
              variants={confirmVariants}
              animate={loading ? 'loading' : 'loaded'}>
              <b.Text color='white' fontFamily='SlackLato-Bold'>
                Create Account
              </b.Text>
            </b.Box>
            {loading ? (
              <DotWrapper animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
                <DotContainer
                  variants={DotContainerVariants}
                  initial='start'
                  animate='end'>
                  <Dot variants={DotVariants} transition={DotTransition} />
                  <Dot variants={DotVariants} transition={DotTransition} />
                  <Dot variants={DotVariants} transition={DotTransition} />
                </DotContainer>
              </DotWrapper>
            ) : null}
          </b.Flex>
        </ConfirmButton>
      </b.Flex>
    </b.Box>
  );
};

import * as React from 'react';

// Blocks
import * as b from '../../../../styles/blocks';

// Styles
import { Wrapper, ValidationTextWrapper } from './index.styles';

// Util
import { textValidation } from '../../../../util/passwordUtil';

interface Props {
  password: string;
}

export const PasswordValidationText: React.FC<Props> = ({ password }) => {
  return (
    <Wrapper mb={1}>
      {password.length > 0 && (
        <b.Flex justifyContent='center'>
          <ValidationTextWrapper mt={1}>
            <b.Flex justifyContent='flex-end'>
              <b.Box>
                {textValidation(password) ? (
                  <b.Text
                    fontFamily='SlackLato-Regular'
                    fontSize={14}
                    className='weak'>
                    {textValidation(password)}
                  </b.Text>
                ) : null}
              </b.Box>
            </b.Flex>
          </ValidationTextWrapper>
        </b.Flex>
      )}
    </Wrapper>
  );
};

import * as React from 'react';
import * as b from '../../../styles/blocks';

// Components
import {
  PasswordValidationWrapper,
  PasswordValidation,
} from './validationbar.styles';

// Util
import {
  weakRegex,
  mediumRegex,
  strongRegex,
  veryStrongRegex,
} from '../../../util/passwordUtil';

interface Props {
  password: string;
}

export const PasswordValidationBar: React.FC<Props> = ({ password }) => {
  return (
    <b.Box>
      <b.Flex justifyContent='center'>
        <PasswordValidationWrapper>
          <PasswordValidation
            className={password.match(weakRegex) ? 'cleared' : ''}
          />
          <PasswordValidation
            className={password.match(mediumRegex) ? 'cleared' : ''}
          />
          <PasswordValidation
            className={password.match(strongRegex) ? 'cleared' : ''}
          />
          <PasswordValidation
            className={password.match(veryStrongRegex) ? 'cleared' : ''}
          />
        </PasswordValidationWrapper>
      </b.Flex>
    </b.Box>
  );
};

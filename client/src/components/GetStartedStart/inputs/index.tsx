import * as React from 'react';

// Blocks
import * as b from '../../../styles/blocks';

// Styles
import { InputWrapper, Input, IconWrapper } from './index.styles';

// Svgs
import { CheckCircle } from '../../../assets/svg';

// Util
import { fullNameRegex, weakRegex } from '../../../util/passwordUtil';

interface Props {
  fullname: string;
  email: string;
  password: string;
  modifyFullname: React.Dispatch<React.SetStateAction<string>>;
  modifyEmail: React.Dispatch<React.SetStateAction<string>>;
  modifyPassword: React.Dispatch<React.SetStateAction<string>>;
}

export const Inputs: React.FC<Props> = ({
  fullname,
  email,
  password,
  modifyFullname,
  modifyEmail,
  modifyPassword,
}) => {
  return (
    <b.Box mt={3}>
      <b.Flex alignItems='center' flexDirection='column'>
        <b.Box my={2}>
          <b.Box my={2}>
            <b.Text fontFamily='SlackLato-Bold'>Name</b.Text>
          </b.Box>
          <InputWrapper>
            <Input
              value={fullname}
              onChange={(e) => modifyFullname(e.target.value)}
              border='1px solid gray'
              borderRadius={3}
              placeholder='Your full name'
            />
            {fullname && fullname.match(fullNameRegex) ? (
              <IconWrapper className='checkcircle'>
                <CheckCircle />
              </IconWrapper>
            ) : null}
          </InputWrapper>
        </b.Box>
        <b.Box my={2}>
          <b.Box my={2}>
            <b.Text fontFamily='SlackLato-Bold'>Email address</b.Text>
          </b.Box>
          <InputWrapper>
            <Input
              value={email}
              onChange={(e) => modifyEmail(e.target.value)}
              border='1px solid gray'
              borderRadius={3}
              placeholder='name@work-email.com'
            />
            {email ? (
              <IconWrapper className='checkcircle'>
                <CheckCircle />
              </IconWrapper>
            ) : null}
          </InputWrapper>
        </b.Box>
        <b.Box my={2}>
          <b.Box my={2}>
            <b.Text fontFamily='SlackLato-Bold'>Password</b.Text>
          </b.Box>
          <InputWrapper>
            <Input
              value={password}
              onChange={(e) => modifyPassword(e.target.value)}
              border='1px solid gray'
              borderRadius={3}
              placeholder='6 characters or more'
            />
            {password.match(weakRegex) ? (
              <IconWrapper className='checkcircle'>
                <CheckCircle />
              </IconWrapper>
            ) : null}
          </InputWrapper>
        </b.Box>
      </b.Flex>
    </b.Box>
  );
};

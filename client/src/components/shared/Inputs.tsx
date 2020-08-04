import * as React from 'react';

// Blocks
import * as b from 'global/blocks';

// Styles
import { InputWrapper, Input, IconWrapper } from 'styles/shared/Inputs';

// Svgs
import { CheckCircle } from 'assets/svg';

// Util
import { fullNameRegex, weakRegex } from 'util/passwordUtil';
import { Props } from 'reducers/input';

export const Inputs: React.FC<Props> = ({
  fullname,
  email,
  password,
  modifyFullname,
  modifyEmail,
  modifyPassword,
  invite,
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
              autoCapitalize='sentences'
              value={fullname}
              onChange={(e) =>
                modifyFullname({
                  type: 'add_fullname',
                  payload: e.target.value,
                })
              }
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
        {!invite && (
          <b.Box my={2}>
            <b.Box my={2}>
              <b.Text fontFamily='SlackLato-Bold'>Email address</b.Text>
            </b.Box>
            <InputWrapper>
              <Input
                autoCapitalize='none'
                value={email}
                onChange={(e) => {
                  if (modifyEmail) {
                    modifyEmail({ type: 'add_email', payload: e.target.value });
                  }
                }}
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
        )}
        <b.Box my={2}>
          <b.Box my={2}>
            <b.Text fontFamily='SlackLato-Bold'>Password</b.Text>
          </b.Box>
          <InputWrapper>
            <Input
              autoCapitalize='none'
              value={password}
              onChange={(e) =>
                modifyPassword({
                  type: 'add_password',
                  payload: e.target.value,
                })
              }
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

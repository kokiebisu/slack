import React from 'react';
import { useParams } from 'react-router-dom';

import * as b from '../../../../../styles/blocks';
import { Wrapper, Profile, IconWrapper } from './index.styles';
import { UserAlt } from '../../../../../assets/svg';
import { useUserQuery } from '../../../../../generated/graphql';

export const MessageHeader = () => {
  const { userId } = useParams();
  const { data: userData, loading } = useUserQuery({
    variables: {
      userId,
    },
  });
  return (
    <Wrapper>
      <b.Box>
        <b.Flex alignItems='center'>
          <b.Box mr={2}>
            {userData && userData.user.user && (
              <Profile
                backgroundColor={userData.user.user.avatarBackground}
                mr={2}>
                <IconWrapper className='avatar'>
                  <UserAlt />
                </IconWrapper>
              </Profile>
            )}
          </b.Box>
          <b.Box>
            {userData && userData.user.user && (
              <b.Text>{userData.user.user.fullname}</b.Text>
            )}
          </b.Box>
        </b.Flex>
      </b.Box>
      <b.Box>
        <b.Text>
          This is the very beginning of your direct message history with
          {userData && userData.user.user && (
            <b.Span>&nbsp; @{userData.user.user.fullname}</b.Span>
          )}
        </b.Text>
      </b.Box>
    </Wrapper>
  );
};

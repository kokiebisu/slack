import * as React from 'react';
import * as b from '../../../../styles/blocks';
import { useParams } from 'react-router-dom';

// Styles
import { Message } from '.';
import { Heart } from '../../../../assets/svg/Heart';
import { IconWrapper, SlackBot, Name } from './container.styles';

// Query
import { useUsersQuery } from '../../../../generated/graphql';

interface Props {}

export const Messages: React.FC<Props> = () => {
  const { teamId } = useParams();
  const { data: usersData } = useUsersQuery({
    variables: { teamId },
  });

  return (
    <b.Box>
      <SlackBot py={2}>
        <b.Flex alignItems='center'>
          <IconWrapper className='heart' pr={2}>
            <Heart />
          </IconWrapper>
          <Name>
            <b.Text
              fontFamily='SlackLato-Light'
              color='pink__lighter'
              fontSize={15}>
              Slackbot
            </b.Text>
          </Name>
        </b.Flex>
      </SlackBot>
      {usersData &&
        usersData.users &&
        usersData.users.users!.map((user, index) => {
          return (
            <Message
              key={index}
              name={user.fullname}
              teamId={teamId}
              userId={user.id}
            />
          );
        })}
    </b.Box>
  );
};

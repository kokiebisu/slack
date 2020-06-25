import * as React from 'react';

// Blocks
import * as b from '../../../../../styles/blocks';

// Styles
import { Wrapper, Seperator, IconWrapper, Descriptions } from './index.styles';

// Svgs
import { User, MapPinAlt } from '../../../../../assets/svg';

// Query
import {
  useGetBelongingUsersQuery,
  useGetChannelByIdQuery,
} from '../../../../../generated/graphql';

interface Props {
  channelId: string;
}

export const SubSection: React.FC<Props> = ({ channelId }) => {
  const { data: { getBelongingUsers } = {} } = useGetBelongingUsersQuery({
    variables: { channelId },
  });
  const { data: { getChannelById } = {} } = useGetChannelByIdQuery({
    variables: { channelId },
  });

  return (
    <Wrapper>
      <b.Flex>
        <b.Box>
          <b.Flex alignItems='center'>
            <IconWrapper className='person'>
              <User />
            </IconWrapper>
            <b.Box ml={1}>
              <b.Text fontSize={13} color='gray__light'>
                {getBelongingUsers?.belongingUsers &&
                  getBelongingUsers?.belongingUsers!.length}
              </b.Text>
            </b.Box>
          </b.Flex>
        </b.Box>
        <b.Box>
          <b.Flex alignItems='center'>
            <Seperator />
          </b.Flex>
        </b.Box>
        <b.Box>
          <b.Flex alignItems='center'>
            <IconWrapper className='pin'>
              <MapPinAlt />
            </IconWrapper>
            <b.Box ml={1}>
              <b.Text fontSize={13} color='gray__light'>
                1
              </b.Text>
            </b.Box>
          </b.Flex>
        </b.Box>
        <b.Box>
          <b.Flex alignItems='center'>
            <Seperator className='second' />
          </b.Flex>
        </b.Box>
        <Descriptions>
          <b.Flex alignItems='center'>
            <b.Box className='descriptions__wrapper'>
              <b.Span fontSize={13} color='gray__light'>
                {getChannelById &&
                  getChannelById!.ok &&
                  getChannelById.channel?.topic}
              </b.Span>
            </b.Box>
          </b.Flex>
        </Descriptions>
      </b.Flex>
    </Wrapper>
  );
};

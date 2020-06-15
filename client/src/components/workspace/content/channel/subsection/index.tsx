import * as React from 'react';

// Blocks
import * as b from '../../../../../styles/blocks';

// Styles
import { Seperator, IconWrapper } from './index.styles';

// Svgs
import { User, MapPinAlt } from '../../../../../assets/svg';

// Query
import { useGetBelongingUsersQuery } from '../../../../../generated/graphql';

interface Props {
  channelId: string;
}

export const SubSection: React.FC<Props> = ({ channelId }) => {
  const { data: { getBelongingUsers } = {} } = useGetBelongingUsersQuery({
    variables: { channelId },
  });

  return (
    <b.Box>
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
            <Seperator />
          </b.Flex>
        </b.Box>
        <b.Box>
          <b.Flex alignItems='center'>
            <b.Box>
              <b.Text fontSize={13} color='gray__light'>
                Announcements to be made
              </b.Text>
            </b.Box>
          </b.Flex>
        </b.Box>
      </b.Flex>
    </b.Box>
  );
};

import * as React from 'react';
import { useHistory } from 'react-router-dom';

// Blocks
import * as b from 'styles/blocks';

// Svgs
import {
  Wrapper,
  IconWrapper,
  Status,
  Name,
} from 'components/Workspace/Sidebar/Message/index.styles';
import { useMeQuery } from 'generated/graphql';

interface Props {
  name: string;
  teamId: string;
  userId: string;
}

export const Message: React.FC<Props> = ({ name, teamId, userId }) => {
  const history = useHistory();
  const { data: meData } = useMeQuery();
  return (
    <>
      {meData && meData.me && meData.me.user && (
        <Wrapper
          onClick={() => history.push(`/client/${teamId}/user/${userId}`)}
          py={2}>
          <b.Flex alignItems='center'>
            <IconWrapper className='status' pr={2}>
              <Status />
            </IconWrapper>
            <Name>
              <b.Text>{name}</b.Text>
            </Name>
          </b.Flex>
        </Wrapper>
      )}
    </>
  );
};

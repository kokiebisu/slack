import * as React from 'react';
import { useHistory } from 'react-router-dom';

// Blocks
import * as b from '../../../../styles/blocks';

// Svgs
import { Wrapper, IconWrapper, Status, Name } from './index.styles';
import { useParams } from 'react-router-dom';
import { useMeQuery } from '../../../../generated/graphql';

export const Message = () => {
  const history = useHistory();
  const { data: meData } = useMeQuery();
  const { teamId } = useParams();
  return (
    <>
      {meData && meData.me && meData.me.user && (
        <Wrapper
          onClick={() =>
            history.push(`/client/${teamId}/user/${meData.me.user!.id}`)
          }
          py={2}>
          <b.Flex alignItems='center'>
            <IconWrapper className='status' pr={2}>
              <Status />
            </IconWrapper>
            <Name>
              <b.Text>ken</b.Text>
            </Name>
          </b.Flex>
        </Wrapper>
      )}
    </>
  );
};

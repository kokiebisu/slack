import * as React from 'react';

// Blocks
import * as b from 'global/blocks';

// Styles
import {
  Wrapper,
  Name,
  Avatar,
  IconWrapper,
  StatusIcon,
} from 'styles/Workspace/Sidebar/Profile';

// Svgs
import { BottomArrow } from 'assets/svg';
import { Write } from 'assets/svg';

// Graphql
import { useMeQuery } from 'generated/graphql';
import { useToggleDispatch } from 'context/toggle-context';

interface Props {
  hovered: boolean;
  team: Team;
}

interface Team {
  name: string;
}

export const Profile: React.FC<Props> = ({ hovered, team }) => {
  const { data: { me } = {}, loading: meLoading } = useMeQuery();

  const dispatch = useToggleDispatch();

  return (
    <Wrapper onClick={() => dispatch({ type: 'toggle_menu' })}>
      <b.Box>
        <b.Box>
          <b.Flex alignItems='center'>
            <b.Box mr={1}>
              <b.Text fontFamily='SlackLato-Bold' fontSize={14} color='white'>
                {team.name}
              </b.Text>
            </b.Box>
            <b.Box mb={1}>
              <IconWrapper className='bottomarrow'>
                <BottomArrow />
              </IconWrapper>
            </b.Box>
          </b.Flex>
        </b.Box>
        <b.Box>
          {!meLoading && me && (
            <b.Flex alignItems='center'>
              <StatusIcon />
              <Name
                className={hovered ? `hovered` : ``}
                fontSize={13}
                fontFamily='SlackLato-Regular'>
                {me?.user && me?.user.fullname}
              </Name>
            </b.Flex>
          )}
        </b.Box>
      </b.Box>
      <Avatar>
        <IconWrapper className='write'>
          <Write />
        </IconWrapper>
      </Avatar>
    </Wrapper>
  );
};
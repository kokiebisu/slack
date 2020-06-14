import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ClientContentLayout } from '../../layout';
import { Bottom, IconWrapper, Seperator } from './layout.styles';
import * as b from '../../../../../styles/blocks';
import { Info, UserAlt, MapPinAlt } from '../../../../../assets/svg';
import {
  useGetChannelByIdQuery,
  useTeamQuery,
} from '../../../../../generated/graphql';

interface Props {}

export const ChannelPage: React.FC<Props> = () => {
  const { teamId, channelId } = useParams();
  const { data: { getChannelById } = {} } = useGetChannelByIdQuery({
    variables: { channelId },
  });
  const { data: { team } = {} } = useTeamQuery({ variables: { teamId } });
  useEffect(() => {
    if (getChannelById && team) {
      document.title = `Slack | ${getChannelById?.channel!.name} | ${
        team?.team!.name
      }`;
    }
  }, [getChannelById]);

  return (
    <>
      {getChannelById && getChannelById.channel && (
        <ClientContentLayout
          section={`# ${getChannelById?.channel!.name}`}
          subsection={<SubSection />}
          content={<ContentLayout />}
          options={<Options />}
        />
      )}
    </>
  );
};

const ContentLayout = () => {
  return <h2>hello</h2>;
};

const Options = () => {
  return (
    <b.Box>
      <b.Flex alignItems='center'>
        <IconWrapper className='sideoption' mr={2}>
          <Info />
        </IconWrapper>
        <b.Box>
          <b.Text fontSize={14} fontFamily='SlackLato-Regular'>
            Details
          </b.Text>
        </b.Box>
      </b.Flex>
    </b.Box>
  );
};

const SubSection = () => {
  return (
    <b.Box>
      <b.Flex>
        <b.Box>
          <b.Flex alignItems='center'>
            <IconWrapper className='person'>
              <UserAlt />
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

import * as React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import * as b from "global/blocks";
// Query
import { useGetChannelByIdQuery } from "generated/graphql";

// Components
import { Layout } from "components/layout/layout.component";

import styled from "styled-components";

import { Info } from "assets/svg";
import { SubSection } from "components/organisms/subsection/subsection.component";
import { Content } from "components/organisms/content/content.component";
// Styles

export const ChannelWorkspace: React.FC<{}> = () => {
  const { channelId } = useParams();
  const { data: { getChannelById } = {} } = useGetChannelByIdQuery({
    variables: { channelId },
  });

  useEffect(() => {
    if (getChannelById) {
      document.title = `Slack | ${getChannelById?.channel!.name}`;
    }
  }, [getChannelById]);

  return (
    <>
      {getChannelById?.channel && (
        <Layout
          variant="workspace"
          section={`# ${getChannelById?.channel!.name}`}
          subsection={<SubSection variant="channel" channelId={channelId} />}
          content={<Content variant="channel" />}
          options={
            <b.Box>
              <b.Flex alignItems="center">
                <IconWrapper className="sideoption" mr={2}>
                  <Info />
                </IconWrapper>
                <b.Box>
                  <b.Text fontSize={14} fontFamily="SlackLato-Regular">
                    Details
                  </b.Text>
                </b.Box>
              </b.Flex>
            </b.Box>
          }
        />
      )}
    </>
  );
};

const IconWrapper = styled(b.Box)`
  &.sideoption {
    padding: 8px 10px 6px 10px;
    background-color: transparent;
    &:hover {
      background-color: ${({ theme }) => theme.colors.white__dark};
      border-radius: 3px;
    }

    svg {
      width: 17px;
      height: 17px;
      path {
        fill: ${({ theme }) => theme.colors.gray};
      }
    }
  }
`;

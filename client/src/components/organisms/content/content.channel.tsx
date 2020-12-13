import * as React from "react";

// Blocks
import * as b from "global/blocks";

import styled from "styled-components";

// Svg
import { LayerPlus, UserPlus } from "assets/svg";

// Components
import { useParams } from "react-router-dom";
import { useGetChannelByIdQuery } from "generated/graphql";

import { MessageContainer } from "components/Workspace/Channel/Container";
import { MessageBox } from "components/Workspace/MessageBox";
import { useSendMessageMutation } from "generated/graphql";

export const ChannelContent: React.FC<{}> = () => {
  const { channelId } = useParams();
  const { data: { getChannelById } = {} } = useGetChannelByIdQuery({
    variables: { channelId },
    fetchPolicy: "cache-and-network",
  });

  const [send] = useSendMessageMutation();
  const sendMessage = async (message: string) => {
    if (localStorage.getItem("teamId")) {
      await send({
        variables: {
          channelId,
          teamId: localStorage.getItem("teamId")!,
          body: message,
        },
      });
    }
  };

  return (
    <>
      <Wrapper>
        <b.Box className="section_header">
          <Title mb={2}>
            {getChannelById?.channel && (
              <b.Text> #{getChannelById?.channel?.name}</b.Text>
            )}
          </Title>
          <Description>
            <b.Text>
              <b.Span className="creator">
                @{getChannelById?.channel?.fullname}
              </b.Span>{" "}
              created this channel on{" "}
              {getChannelById?.channel?.createdAt
                .split(",")
                .slice(0, 2)
                .join(",")}
              . This is the very beginning of the{" "}
              <b.Span className="channel_name">
                #{getChannelById?.channel?.name}
              </b.Span>{" "}
              channel. &nbsp;
              {getChannelById?.channel &&
                getChannelById?.channel.description &&
                `Description: ${getChannelById?.channel?.description}`}
              &nbsp;
              <b.Span>
                {getChannelById?.channel &&
                  getChannelById?.channel.description && (
                    <>
                      <b.Span>(</b.Span>
                      <b.Span className="edit_button">edit</b.Span>
                      <b.Span>)</b.Span>
                    </>
                  )}
              </b.Span>
            </b.Text>
          </Description>
          <Options>
            <b.Flex alignItems="center">
              <Option mr={2}>
                <b.Flex alignItems="center">
                  <IconWrapper className="layer_plus" mr={2}>
                    <LayerPlus />
                  </IconWrapper>
                  <b.Box>
                    <b.Text>Add an app</b.Text>
                  </b.Box>
                </b.Flex>
              </Option>
              <Option>
                <b.Flex alignItems="center">
                  <IconWrapper className="user_plus" mr={2}>
                    <UserPlus />
                  </IconWrapper>
                  <b.Box>
                    <b.Text>Add people</b.Text>
                  </b.Box>
                </b.Flex>
              </Option>
            </b.Flex>
          </Options>
        </b.Box>
        <MessageContainer />
        <MessageBox sendMessage={sendMessage} />
      </Wrapper>
    </>
  );
};

const Wrapper = styled(b.Box)`
  height: calc(100vh - 65px - 37px);
  overflow-y: auto;
  position: relative;
  & > div {
    &.section_header {
      padding: 25px 20px;
    }
    &.section_content {
      position: relative;
      height: calc(100vh - 65px - 180px- 104px);
      padding: 40px 20px 40px 20px;
    }
  }
`;

const Title = styled(b.Box)`
  & > p {
    font-size: 28px;
    font-family: "SlackLato-Black";
  }
`;

const Description = styled(b.Box)`
  & > p {
    font-size: 18px;
    line-height: 1.5;
    span {
      &.creator {
        background-color: ${({ theme }) => theme.colors.blue__0};
        color: ${({ theme }) => theme.colors.blue};
      }
      &.channel_name {
        font-family: "SlackLato-Bold";
      }
      &.edit_button {
        color: ${({ theme }) => theme.colors.blue};
        &:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }
    }
  }
`;

const Options = styled(b.Box)`
  margin: 15px 0 25px 0;
`;

const Option = styled(b.Button)`
  p {
    font-size: 15px;
    color: ${({ theme }) => theme.colors.blue__light};
  }
  &:hover {
    & > div {
      & > div {
        &:nth-child(1) {
          & > svg {
            & > path {
              fill: ${({ theme }) => theme.colors.blue};
            }
          }
        }
        &:nth-child(2) {
          & > p {
            color: ${({ theme }) => theme.colors.blue};
          }
        }
      }
    }
  }
  &:nth-child(2) {
    position: relative;
    top: 2px;
  }
`;

const IconWrapper = styled(b.Box)`
  position: relative;
  &.layer_plus {
    svg {
      width: 15px;
      height: 15px;
      path {
        fill: ${({ theme }) => theme.colors.blue__light};
      }
    }
  }
  &.user_plus {
    svg {
      width: 18px;
      height: 18px;
      path {
        fill: ${({ theme }) => theme.colors.blue__light};
      }
    }
  }
`;

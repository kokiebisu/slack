import * as React from "react";

// Blocks
import * as b from "global/blocks";

import styled from "styled-components";

import { size } from "global/sizes";

// Svgs
import { User, MapPinAlt } from "assets/svg";

// Query
import {
  useGetBelongingUsersQuery,
  useGetChannelByIdQuery,
} from "generated/graphql";

export const ChannelSubSection: React.FC<{
  channelId?: string;
}> = ({ channelId = "channelId" }) => {
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
          <b.Flex alignItems="center">
            <IconWrapper className="person">
              <User />
            </IconWrapper>
            <b.Box ml={1}>
              <b.Text fontSize={13} color="gray__light">
                {getBelongingUsers?.belongingUsers?.length}
              </b.Text>
            </b.Box>
          </b.Flex>
        </b.Box>
        <b.Box>
          <b.Flex alignItems="center">
            <Seperator />
          </b.Flex>
        </b.Box>
        <b.Box>
          <b.Flex alignItems="center">
            <IconWrapper className="pin">
              <MapPinAlt />
            </IconWrapper>
            <b.Box ml={1}>
              <b.Text fontSize={13} color="gray__light">
                1
              </b.Text>
            </b.Box>
          </b.Flex>
        </b.Box>
        <b.Box>
          <b.Flex alignItems="center">
            <Seperator className="second" />
          </b.Flex>
        </b.Box>
        <Descriptions>
          <b.Flex alignItems="center">
            <b.Box className="descriptions__wrapper">
              <b.Span fontSize={13} color="gray__light">
                {getChannelById?.ok && getChannelById.channel?.topic}
              </b.Span>
            </b.Box>
          </b.Flex>
        </Descriptions>
      </b.Flex>
    </Wrapper>
  );
};

const Wrapper = styled(b.Box)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const IconWrapper = styled(b.Box)`
  &.person {
    bottom: 0.8px;
    svg {
      width: 10px;
      height: 10px;
      path {
        fill: ${({ theme }) => theme.colors.gray__light};
      }
    }
  }

  &.pin {
    svg {
      width: 10px;
      height: 10px;
      path {
        fill: ${({ theme }) => theme.colors.gray__light};
      }
    }
  }
`;

const Seperator = styled(b.Box)`
  height: 10px;
  width: 1.2px;
  background-color: ${({ theme }) => theme.colors.gray__light};
  margin: 0 4px;
  &.second {
    display: none;
    @media ${size["xs"]} {
      display: block;
    }
  }
`;

const Descriptions = styled(b.Box)`
  display: none;
  @media ${size["xs"]} {
    display: block;
  }
`;

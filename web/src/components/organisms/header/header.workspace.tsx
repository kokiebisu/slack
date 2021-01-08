import * as React from "react";
import { useTeamQuery } from "generated/graphql";
import { useParams } from "react-router-dom";

/** styles */
import * as b from "global/blocks";
import styled from "styled-components";

// Breakpoints
import { home, size } from "global/sizes";

/** vectors */
import { Clock, Magnify, Info } from "assets/svg";

export const WorkspaceHeader: React.FC<{}> = () => {
  const { teamId } = useParams();
  const { data: { team } = {}, loading } = useTeamQuery({
    variables: {
      teamId,
    },
  });

  return (
    <b.Box
      height={37}
      backgroundColor="primary__dark"
      borderBottom={1}
      borderBottomStyle="solid"
      borderBottomColor="primary__lighter"
    >
      {loading ? null : (
        <b.Flex alignItems="center" justifyContent="center">
          <b.Box style={{ flex: 1 }} pr={4} pl={3}>
            <b.Flex style={{ justifyContent: "flex-end" }}>
              <IconWrapper className="clock">
                <Clock />
              </IconWrapper>
            </b.Flex>
          </b.Box>
          {team && (
            <Input borderRadius={5}>
              <b.Box>
                <b.Flex alignItems="center" justifyContent="center">
                  <IconWrapper px={1} className="magnify">
                    <Magnify />
                  </IconWrapper>
                  <b.Box px={1} style={{ top: 1 }}>
                    <b.Text fontFamily="SlackLato-Regular" fontSize={13}>
                      Search {team.team?.name}
                    </b.Text>
                  </b.Box>
                </b.Flex>
              </b.Box>
            </Input>
          )}
          <b.Box style={{ flex: 1 }} pr={3} pl={3}>
            <b.Flex style={{ justifyContent: "flex-end" }}>
              <b.Button ml={2} background="transparent">
                <b.Flex alignItems="center">
                  <IconWrapper className="info">
                    <Info />
                  </IconWrapper>
                </b.Flex>
              </b.Button>
            </b.Flex>
          </b.Box>
        </b.Flex>
      )}
    </b.Box>
  );
};

const Input = styled(b.Button)`
  height: 24px;
  border: 1.3px solid ${({ theme }) => theme.colors.purple};
  padding: 0 8px;
  width: 100%;
  max-width: 320px;
  background-color: ${({ theme }) => theme.colors.primary__lighter};
  color: ${({ theme }) => theme.colors.white__dark};
  fill: ${({ theme }) => theme.colors.white__dark};

  @media ${home.lg} {
    width: 500px;
  }

  &:hover {
    border: 1.3px solid ${({ theme }) => theme.colors.purple};
    color: ${({ theme }) => theme.colors.white__dark};
    fill: ${({ theme }) => theme.colors.white__dark};
  }
`;

const IconWrapper = styled(b.Box)`
  position: relative;

  &.info {
    display: none;
    top: 2px;
    svg {
      width: 18px;
      height: 18px;
      path {
        fill: ${({ theme }) => theme.colors.white};
      }
    }
    @media ${size["12xs"]} {
      display: block;
    }
  }

  &.clock {
    display: none;
    border-radius: 5px;
    padding: 6px 6px 3px 7px;
    svg {
      width: 18px;
      height: 18px;
      path {
        fill: ${({ theme }) => theme.colors.white};
      }
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary__lighter};
    }

    @media ${size["12xs"]} {
      display: block;
    }
  }
  &.magnify {
    svg {
      width: 12px;
      height: 12px;
      path {
        fill: ${({ theme }) => theme.colors.white};
      }
    }
  }

  &.present {
    top: 1px;
    svg {
      width: 14px;
      height: 14px;
      path {
        fill: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;

import * as React from "react";
import { useTeamQuery } from "generated/graphql";
import { useParams } from "react-router-dom";

/** styles */
import * as b from "global/blocks";
import { IconWrapper, Input } from "styles/Header/Workspace";

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

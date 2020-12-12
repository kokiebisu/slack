import React from "react";

import * as b from "global/blocks";

import styled from "styled-components";

import { useHistory } from "react-router-dom";
import { Button } from "components/atoms/button/button.component";

export const AvailableCard: React.FC<{
  name?: string;
  url?: string;
  avatarBackground?: string;
}> = ({ name = "Channel", url, avatarBackground = "red" }) => {
  const history = useHistory();
  return (
    <Wrapper>
      <b.Flex alignItems="center" justifyContent="space-between">
        <b.Box>
          <b.Flex>
            <b.Box mr={3}>
              <b.Box
                backgroundColor={avatarBackground}
                width={50}
                height={50}
                style={{
                  border: "3px solid gray__light",
                  borderRadius: "8px",
                }}
              >
                <b.Flex alignItems="center" justifyContent="center">
                  <b.Box>
                    <b.Text
                      color="white"
                      fontFamily="SlackLato-Bold"
                      fontSize={18}
                    >
                      {name.charAt(0).toUpperCase()}
                    </b.Text>
                  </b.Box>
                </b.Flex>
              </b.Box>
            </b.Box>
            <b.Box>
              <b.Flex alignItems="center">
                <b.Box>
                  <WorkspaceName>
                    <b.Text>{name}</b.Text>
                  </WorkspaceName>
                  <WorkspaceURL>
                    <b.Text>{url}.slack.com</b.Text>
                  </WorkspaceURL>
                </b.Box>
              </b.Flex>
            </b.Box>
          </b.Flex>
        </b.Box>
        <Button
          variant="launch"
          onClick={() => {
            history.push(`/client/${url}`);
          }}
          title="Launch"
        />
      </b.Flex>
    </Wrapper>
  );
};

const Wrapper = styled(b.Box)`
  height: 90px;
  /* padding: 25px 0; */
  max-width: 570px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray__lighter};
`;

const IconWrapper = styled(b.Box)`
  margin-right: 15px;
`;

const Icon = styled(b.Box)`
  width: 38px;
  height: 38px;
  border-radius: 5px;
  background-color: blue;
`;

const WorkspaceName = styled(b.Box)`
  margin-bottom: 5px;
  & > p {
    font-family: "SlackLato-Bold";
  }
`;

const WorkspaceURL = styled(b.Box)`
  & > p {
    font-size: 13px;
    color: ${({ theme }) => theme.colors.gray__light};
  }
`;

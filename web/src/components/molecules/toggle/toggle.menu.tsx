import React from "react";
import styled from "styled-components";

import * as b from "../../../global/blocks";

// Images
// import SlackAppIcon from "../../../assets/img/slack-app.png";
import { useHistory } from "react-router-dom";
import { setAccessToken } from "../../../global/token";

import { Option } from "../option";

export const MenuToggle: React.FC<{}> = () => {
  const history = useHistory();

  return (
    <Wrapper py={2}>
      <Section className="first">
        <b.Box>
          <Option
            variant="profile"
            title="kenichkona"
            subtitle="You're set to "
            state="active"
          />
          <Option variant="status" />
          <Option variant="menu" name="Pause notifications" withToggle />
          <Option variant="menu" name="View Profile" />
          <Option variant="menu" name="Preferences" />
        </b.Box>
      </Section>
      <Section className="second">
        <b.Box>
          <Option
            variant="profile"
            title="asdf"
            subtitle="url.slack.com"
            tier="free"
          />
        </b.Box>
      </Section>
      <Section className="third">
        <Option variant="menu" name="Invite people to Slack" />
        <Option variant="menu" name="Settings & administration" withToggle />
        <Option variant="menu" name="Tools" withToggle />
        <Option variant="menu" name="Help" withToggle />
        <Option
          variant="menu"
          name="Sign out of asdf"
          clicked={async () => {
            setAccessToken("");
            // client?.clearStore();
            history.push("/");
          }}
        />
      </Section>
      <Section className="fourth">
        <Option variant="menu" name="Add workspaces" withToggle />
        <Option variant="menu" name="Open the Slack App" openApp />
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled(b.Box)`
  width: 310px;
  max-height: 600px;
  height: calc(100vh - 130px);
  background-color: ${({ theme }) => theme.colors.white__dark};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray__lighter};
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0 !important;
  }

  @media (max-height: 500px) {
    top: 10px;
    height: calc(100vh - 20px);
  }
`;

const Section = styled(b.Box)`
  &.first {
    padding: 15px 0;
  }

  &.second {
    padding: 15px 0;
  }

  &.third {
    padding: 5px 0;
  }

  &.fourth {
    padding: 5px 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray__lighter};
  }
`;
